variable "s3_website_endpoint" {
  description = "S3 static website endpoint"
  type        = string
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate for custom domain"
  type        = string
}

variable "root_domain" {
  description = "Root domain for CloudFront aliases"
  type        = string
}


variable "tags" {
  description = "Tags to apply to the distribution"
  type        = map(string)
  default     = {}
}
