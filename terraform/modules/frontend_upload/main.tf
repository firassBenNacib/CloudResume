resource "null_resource" "inject_api_url" {
  triggers = {
    api_url = var.api_url
  }

  provisioner "local-exec" {
    command = "sed -i 's|{{API_URL}}|${var.api_url}|' \"${var.frontend_path}/script.js\""
  }
}

resource "aws_s3_object" "frontend_files" {
  for_each = fileset(var.frontend_path, "**/*.*")

  bucket = var.s3_bucket_name
  key    = each.value
  source = "${var.frontend_path}/${each.value}"

  content_type = lookup({
    html = "text/html"
    css  = "text/css"
    js   = "application/javascript"
    png  = "image/png"
    jpg  = "image/jpeg"
    jpeg = "image/jpeg"
    svg  = "image/svg+xml"
    json = "application/json"
    pdf  = "application/pdf"
    },
    try(
      lower(trimspace(regex("\\.([a-zA-Z0-9]+)$", each.value)[0])),
      ""
    ),
  "application/octet-stream")

  etag = each.value == "script.js" ? null : filemd5("${var.frontend_path}/${each.value}")

  depends_on = [null_resource.inject_api_url]
}

resource "null_resource" "reset_script" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "sed -i 's|${var.api_url}|{{API_URL}}|' \"${var.frontend_path}/script.js\""
  }

  depends_on = [aws_s3_object.frontend_files]
}
