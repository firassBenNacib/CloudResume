variable "hosted_zone_id" {
  description = "The ID of the existing Route53 hosted zone"
  type        = string
}

variable "root_domain" {
  description = "Root domain"
  type        = string
}

variable "cloudfront_domain" {
  description = "CloudFront domain name"
  type        = string
}
