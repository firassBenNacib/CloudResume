resource "aws_s3_object" "frontend_files" {
  for_each = fileset("../frontend", "**/*.*")

  bucket = module.s3.bucket_name
  key    = each.value
  source = "../frontend/${each.value}"

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


  etag = each.value == "script.js" ? null : filemd5("../frontend/${each.value}")

  depends_on = [null_resource.inject_api_url]
}
