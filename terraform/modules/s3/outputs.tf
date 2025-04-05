output "bucket_name" {
  value = aws_s3_bucket.resume_bucket.id
}

output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket_arn" {
  value = aws_s3_bucket.resume_bucket.arn
}
