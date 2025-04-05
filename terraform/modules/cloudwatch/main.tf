resource "aws_cloudwatch_metric_alarm" "lambda_errors_alarm" {
  alarm_name          = "${var.lambda_function_name}-InvocationErrors"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "Errors"
  namespace           = "AWS/Lambda"
  period              = 3600
  statistic           = "Sum"
  threshold           = 1
  alarm_description   = "Triggered when Lambda function ${var.lambda_function_name} has invocation errors"
  dimensions = {
    FunctionName = var.lambda_function_name
  }
  alarm_actions = [var.sns_topic_arn]
  tags          = var.tags
}

resource "aws_cloudwatch_metric_alarm" "billing_threshold_alarm" {
  alarm_name          = "MonthlyBillingThreshold"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "EstimatedCharges"
  namespace           = "AWS/Billing"
  period              = 43200
  statistic           = "Maximum"
  threshold           = var.budget_threshold
  alarm_description   = "Estimated charges exceed $${var.budget_threshold}"
  alarm_actions       = [var.sns_topic_arn]
  tags                = var.tags
}
