@echo off
title Science Fair Project Showcase Server
echo ===================================================
echo   Science Fair Project Showcase - Local Web Server
echo ===================================================
echo.

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python was not found on your system PATH.
    echo.
    echo Please make sure Python is installed, or double-click 
    echo 'index.html' to open it directly in your browser.
    echo.
    pause
    exit /b 1
)

echo [INFO] Starting local development server...
echo [INFO] Access the web application at: http://localhost:8000
echo.
echo Press Ctrl+C in this window to stop the server.
echo.
python -m http.server 8000
pause
