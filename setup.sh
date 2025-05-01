#!/bin/bash

echo "🛠 Setting up BiasX environment..."

# Backend Setup
echo "📦 Installing backend dependencies..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install flask flask-cors transformers torch
pip freeze > requirements.txt
deactivate
cd ..

# Frontend Setup
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "✅ Setup complete!"
