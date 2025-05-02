def analyze_bias(text):
    # Placeholder logic — replace with ML model
    if 'he' in text.lower() or 'she' in text.lower():
        return 'gender', 0.85
    return 'neutral', 0.15
