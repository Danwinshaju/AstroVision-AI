@echo off
set ROOT=%~dp0
set PY=%ROOT%venv\Scripts\python.exe
set URL=http://127.0.0.1:8000
if not exist "%PY%" (
  echo Python executable not found at %PY%
  exit /b 1
)
set UVICORN=%ROOT%venv\Scripts\uvicorn.exe
if not exist "%UVICORN%" (
  echo uvicorn executable not found at %UVICORN%
  exit /b 1
)
echo Starting uvicorn at %URL%
start "uvicorn" "%UVICORN%" app:app --reload --host 127.0.0.1 --port 8000
timeout /t 1 >nul
start "chrome" "C:\Program Files\Google\Chrome\Application\chrome.exe" %URL%
