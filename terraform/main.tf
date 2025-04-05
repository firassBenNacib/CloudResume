module "iam" {
  source             = "./modules/iam"
  dynamodb_table_arn = module.dynamodb.table_arn
  depends_on         = [module.dynamodb]
}

module "s3" {
  source      = "./modules/s3"
  bucket_name = var.bucket_name
  tags = {
    Project = var.project_name
  }
}

module "dynamodb" {
  source     = "./modules/dynamodb"
  table_name = var.dynamodb_table_name
  tags = {
    Project = var.project_name
  }
}

module "lambda" {
  source               = "./modules/lambda"
  lambda_zip_path      = "${path.module}/modules/lambda/src/views_counter.zip"
  lambda_exec_role_arn = module.iam.lambda_exec_role_arn
  dynamodb_table_name  = module.dynamodb.table_name
  tags = {
    Project = var.project_name
  }
}

module "apigateway" {
  source               = "./modules/apigateway"
  lambda_invoke_arn    = module.lambda.lambda_invoke_arn
  lambda_function_name = module.lambda.lambda_function_name
}

module "acm" {
  source         = "./modules/acm"
  root_domain    = var.root_domain
  hosted_zone_id = var.hosted_zone_id
}

module "cloudfront" {
  source              = "./modules/cloudfront"
  s3_website_endpoint = module.s3.website_endpoint
  acm_certificate_arn = module.acm.acm_certificate_arn
  root_domain         = var.root_domain
  tags = {
    Project = var.project_name
    Owner   = var.owner_name
  }
  depends_on = [module.acm]
}

module "route53" {
  source            = "./modules/route53"
  root_domain       = var.root_domain
  hosted_zone_id    = var.hosted_zone_id
  cloudfront_domain = module.cloudfront.cloudfront_domain_name
}

module "frontend_upload" {
  source         = "./modules/frontend_upload"
  frontend_path  = "${path.module}/../frontend"
  api_url        = module.apigateway.api_url
  s3_bucket_name = module.s3.bucket_name
}

module "sns" {
  source                = "./modules/sns"
  topic_name            = var.topic_name
  subscription_endpoint = var.alert_email
  protocol              = "email"
}

module "cloudwatch" {
  source               = "./modules/cloudwatch"
  lambda_function_name = module.lambda.lambda_function_name
  sns_topic_arn        = module.sns.topic_arn
  budget_threshold     = var.budget_threshold
  tags = {
    Project     = var.project_name
    Environment = "Prod"
  }
}
