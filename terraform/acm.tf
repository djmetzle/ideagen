provider "aws" {
  alias  = "aws-east"
  region = "us-east-1"
}

resource "aws_acm_certificate" "ideagen_cert" {
  provider          = aws.aws-east
  domain_name       = "ideagen.djmetzle.io"
  validation_method = "DNS"
}
