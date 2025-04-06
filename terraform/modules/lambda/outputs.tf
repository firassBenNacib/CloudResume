output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.cloud_resume.function_name
}

output "lambda_function_arn" {
  description = "ARN of the Lambda function"
  value       = aws_lambda_function.cloud_resume.arn
  sensitive = true
}

output "lambda_invoke_arn" {
  value = aws_lambda_function.cloud_resume.invoke_arn
  sensitive = true
}



