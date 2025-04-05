variable "frontend_path" {
  description = "Path to the frontend folder"
  type        = string
}

variable "api_url" {
  description = "API Gateway URL"
  type        = string
}

variable "s3_bucket_name" {
  description = "S3 bucket to upload files to"
  type        = string
}
