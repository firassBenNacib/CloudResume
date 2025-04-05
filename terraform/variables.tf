variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "root_domain" {
  description = "Root domain name"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID"
  type        = string
}

variable "bucket_name" {
  description = "S3 bucket name for the static website"
  type        = string
}

variable "alert_email" {
  description = "Email address for SNS alerts"
  type        = string
}

variable "topic_name" {
  description = "SNS topic name"
  type        = string
  default     = "cloud-resume-topic"
}

variable "budget_threshold" {
  description = "Monthly AWS billing threshold (USD)"
  type        = number
  default     = 3
}

variable "dynamodb_table_name" {
  description = "Name of the DynamoDB table"
  type        = string
  default     = "cloud-resume-visitor-count"
}

variable "project_name" {
  description = "Project tag value"
  type        = string
  default     = "Cloud Resume Challenge"
}

variable "owner_name" {
  description = "Owner tag value"
  type        = string
}
