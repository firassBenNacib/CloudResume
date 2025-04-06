output "lambda_exec_role_name" {
  description = "Name of the IAM role used by Lambda"
  value       = module.iam.lambda_exec_role_name
  sensitive = true
}

output "lambda_exec_role_arn" {
  description = "ARN of the IAM role used by Lambda"
  value       = module.iam.lambda_exec_role_arn
  sensitive = true
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = module.lambda.lambda_function_name
}

output "lambda_function_arn" {
  description = "ARN of the Lambda function"
  value       = module.lambda.lambda_function_arn
  sensitive = true
}

output "api_url" {
  description = "Invoke URL of the deployed API Gateway endpoint"
  value       = module.apigateway.api_url
  sensitive = true
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = module.cloudfront.cloudfront_distribution_id
  sensitive = true
}
