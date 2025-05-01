from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load model (already in your app)
classifier = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

# ✅ Add this status route
@app.route('/api/status', methods=['GET'])
def status():
    return jsonify({
        "status": "running",
        "model": "distilbert-base-uncased-finetuned-sst-2-english",
        "message": "BiasX Flask backend is alive and healthy."
    }), 200

@app.route('/api/check', methods=['POST'])
def check_bias():
    text = request.json.get("text", "")
    result = classifier(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
