@echo off
title Running BiasX
echo ============================================
echo 🚀 Starting BiasX: Flask + React
echo ============================================

:: Start Flask backend in new terminal
start cmd /k "cd backend && call venv\Scripts\activate && python run.py"

:: Start React frontend in new terminal
start cmd /k "cd frontend && npm run dev"

echo ✅ Servers launching...
echo 🔗 Flask API:     http://127.0.0.1:5000/api/status
echo 🔗 React frontend: http://localhost:5173
pause
