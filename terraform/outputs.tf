output "lambda_exec_role_name" {
  description = "Name of the IAM role used by Lambda"
  value       = module.iam.lambda_exec_role_name
}

output "lambda_exec_role_arn" {
  description = "ARN of the IAM role used by Lambda"
  value       = module.iam.lambda_exec_role_arn
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = module.lambda.lambda_function_name
}

output "lambda_function_arn" {
  description = "ARN of the Lambda function"
  value       = module.lambda.lambda_function_arn
}

output "api_url" {
  description = "Invoke URL of the deployed API Gateway endpoint"
  value       = module.apigateway.api_url
}
