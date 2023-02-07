$SiteArgs = 'cd site; npm run dev'
$CmsArgs  = 'cd cms; npm run develop'
Start-Process powershell -ArgumentList $SiteArgs
Start-Process powershell -ArgumentList $CmsArgs