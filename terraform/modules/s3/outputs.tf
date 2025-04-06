output "bucket_name" {
  value = aws_s3_bucket.resume_bucket.id
  sensitive = true
}

output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
  sensitive = true
}

output "bucket_arn" {
  value = aws_s3_bucket.resume_bucket.arn
  sensitive = true
}
