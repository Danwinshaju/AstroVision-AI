param(
    [string]$HostName = '127.0.0.1',
    [int]$Port = 8000
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$uvicorn = Join-Path $root 'venv\Scripts\uvicorn.exe'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$url = "http://$($HostName):$($Port)"

if (-Not (Test-Path $uvicorn)) {
    Write-Error "uvicorn executable not found at $uvicorn. Activate your venv or install uvicorn first."
    exit 1
}

Write-Host "Starting uvicorn on $url"
Start-Process -FilePath $uvicorn -ArgumentList "app:app","--reload","--host",$HostName,"--port",$Port -WorkingDirectory $root

Start-Sleep -Seconds 1
if (Test-Path $chrome) {
    Start-Process -FilePath $chrome -ArgumentList $url
} else {
    Write-Host "Chrome not found at expected path; opening default browser instead."
    Start-Process $url
}

# end of script
