#!/bin/bash

# === BiasX Project Runner ===
# Location: /Users/trupal/Piyu Patel/biasX

echo "🔁 Starting BiasX: The Mirror of Ethics..."

# --- Start Flask Backend ---
echo "🚀 Launching Flask backend..."
osascript <<END
tell application "Terminal"
    do script "cd \"$PWD/backend\" && source venv/bin/activate && python app.py"
end tell
END

# --- Start React Frontend ---
echo "🌐 Launching React frontend..."
osascript <<END
tell application "Terminal"
    do script "cd \"$PWD/frontend\" && npm run dev"
end tell
END

echo "✅ All systems launching..."
echo "→ Flask API:     http://127.0.0.1:5000/api/status"
echo "→ React frontend: http://localhost:5173 (or 5174)"
