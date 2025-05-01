@echo off
title Stopping BiasX
echo ============================================
echo 🛑 Stopping BiasX servers (ports 5000, 5173, 5174)
echo ============================================

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do taskkill /F /PID %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5173') do taskkill /F /PID %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5174') do taskkill /F /PID %%a >nul 2>&1

echo ✅ All relevant processes terminated.
pause
