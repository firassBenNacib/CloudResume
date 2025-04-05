variable "lambda_zip_path" {
  description = "Path to the zipped Lambda function"
  type        = string
}

variable "lambda_exec_role_arn" {
  description = "IAM role ARN for Lambda to execute"
  type        = string
}

variable "dynamodb_table_name" {
  description = "Name of the DynamoDB table"
  type        = string
}

variable "tags" {
  description = "Tags for the Lambda function"
  type        = map(string)
  default     = {}
}
