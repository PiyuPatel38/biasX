@echo off
title BiasX Setup Script
echo ============================================
echo 🛠 Starting BiasX Project Setup (Windows)
echo ============================================

:: Step 1 - Backend Setup
echo 🐍 Setting up Python backend...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install --upgrade pip
pip install flask flask-cors transformers torch
pip freeze > requirements.txt
deactivate
cd ..

:: Step 2 - Frontend Setup
echo 📦 Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo ✅ BiasX setup complete!
pause
