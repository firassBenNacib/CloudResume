variable "topic_name" {
  description = "Name of the SNS topic"
  type        = string
  default     = "cloud-resume-notifications"
}

variable "protocol" {
  description = "Protocol for the SNS subscription (email, https, etc)"
  type        = string
  default     = "email"
}

variable "subscription_endpoint" {
  description = "Email address or endpoint to receive alerts"
  type        = string
}
