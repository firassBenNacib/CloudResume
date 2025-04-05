output "api_url" {
  description = "Invoke URL of the deployed API"
  value       = "${aws_api_gateway_deployment.deploy.invoke_url}${aws_api_gateway_stage.prod.stage_name}/counter"
}
