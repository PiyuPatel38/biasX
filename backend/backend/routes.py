from flask import Blueprint, request, jsonify
from .model import analyze_bias

main = Blueprint('main', __name__)

@main.route('/api/check', methods=['POST'])
def check_bias():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'Missing input text'}), 400

    label, score = analyze_bias(data['text'])
    return jsonify({'label': label, 'score': score})
