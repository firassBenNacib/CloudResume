output "lambda_exec_role_arn" {
  description = "ARN of the Lambda execution role"
  value       = aws_iam_role.lambda_exec_role.arn
  sensitive = true
}

output "lambda_exec_role_name" {
  description = "Name of the Lambda execution role"
  value       = aws_iam_role.lambda_exec_role.name
  sensitive = true
}
