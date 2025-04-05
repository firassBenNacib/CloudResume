terraform {
  backend "s3" {
    bucket  = "cloud-resume-terraform-state-storage"
    key     = "cloud-resume/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true

  }
}
