from flask import Flask, request, jsonify
from transformers import pipeline

# Initialize Flask app
app = Flask(__name__)

# Load sentiment analysis pipeline (RoBERTa)
sentiment_pipeline = pipeline("sentiment-analysis", model="cardiffnlp/twitter-roberta-base-sentiment")

# Load zero-shot classifier for bias detection
bias_pipeline = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Bias categories (can be extended)
bias_labels = [
    "gender bias",
    "racial bias",
    "age bias",
    "cultural bias",
    "disability bias",
    "no bias"
]

@app.route("/api/check", methods=["POST"])
def check():
    data = request.get_json()
    text = data.get("text", "")

    # Bias detection using zero-shot classification
    bias_result = bias_pipeline(text, candidate_labels=bias_labels)
    bias_label = bias_result["labels"][0].upper().replace(" ", "_")  # Best match
    bias_score = bias_result["scores"][0]

    # Feedback based on detected bias
    if bias_label == "NO_BIAS":
        feedback = "No obvious bias detected. You're good!"
    else:
        feedback = f"Potential {bias_label.replace('_', ' ').lower()} detected. Consider revising the language."

    # Sentiment analysis
    sentiment_result = sentiment_pipeline(text)[0]
    sentiment_label = sentiment_result['label'].upper()
    sentiment_score = round(sentiment_result['score'], 3)

    return jsonify({
        "bias_label": bias_label,
        "feedback": feedback,
        "sentiment_label": sentiment_label,
        "sentiment_score": sentiment_score
    })

if __name__ == "__main__":
    app.run(debug=True)
