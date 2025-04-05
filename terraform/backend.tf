terraform {
  backend "s3" {
    bucket         = "__BACKEND_BUCKET__"
    key            = "__BACKEND_KEY__"
    region         = "__BACKEND_REGION__"
    encrypt        = true
  }
}
