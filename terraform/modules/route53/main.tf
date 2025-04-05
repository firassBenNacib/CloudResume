resource "aws_route53_record" "root_domain" {
  zone_id = var.hosted_zone_id
  name    = var.root_domain
  type    = "A"

  alias {
    name                   = var.cloudfront_domain
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_domain" {
  zone_id = var.hosted_zone_id
  name    = "www.${var.root_domain}"
  type    = "A"

  alias {
    name                   = var.cloudfront_domain
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}
