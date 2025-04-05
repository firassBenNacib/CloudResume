resource "aws_lambda_function" "cloud_resume" {
  function_name = "CloudResumeCounter"
  filename      = var.lambda_zip_path
  handler       = "views_counter.lambda_handler"
  runtime       = "python3.12"
  role          = var.lambda_exec_role_arn

  source_code_hash = filebase64sha256(var.lambda_zip_path)

  environment {
    variables = {
      TABLE_NAME = var.dynamodb_table_name
    }
  }

  tags = var.tags
}
