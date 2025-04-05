resource "aws_sns_topic" "notification_topic" {
  name = var.topic_name
}

resource "aws_sns_topic_subscription" "subscription" {
  topic_arn = aws_sns_topic.notification_topic.arn
  protocol  = var.protocol
  endpoint  = var.subscription_endpoint
}
