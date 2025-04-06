output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.this.id
  sensitive = true
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.this.domain_name
  sensitive = true
}
