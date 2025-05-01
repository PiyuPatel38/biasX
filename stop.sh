#!/bin/bash

echo "🛑 Stopping BiasX servers..."

# Kill Flask (port 5000) and React (port 5173/5174)
lsof -ti :5000 | xargs kill -9 2>/dev/null
lsof -ti :5173 | xargs kill -9 2>/dev/null
lsof -ti :5174 | xargs kill -9 2>/dev/null

echo "✅ All servers stopped."
