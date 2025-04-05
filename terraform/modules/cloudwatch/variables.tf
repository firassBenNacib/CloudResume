variable "lambda_function_name" {
  description = "Lambda function to monitor"
  type        = string
}

variable "sns_topic_arn" {
  description = "SNS topic ARN for notifications"
  type        = string
}

variable "budget_threshold" {
  description = "Monthly AWS cost threshold (USD)"
  type        = number
  default     = 5
}

variable "tags" {
  description = "Tags to apply to CloudWatch alarms"
  type        = map(string)
  default     = {}
}
