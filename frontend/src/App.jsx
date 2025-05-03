import { useState } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(`${apiUrl}/api/check`, { text: input });
      const result = {
        input,
        ...res.data,
        id: Date.now(),
        expanded: true
      };
      setResponses((prev) => [result, ...prev]);
    } catch (err) {
      setResponses((prev) => [
        {
          input,
          error: 'API error: ' + err.message,
          id: Date.now(),
          expanded: true
        },
        ...prev
      ]);
    }

    setLoading(false);
    setInput('');
  };

  const toggleExpand = (id) => {
    setResponses((prev) =>
      prev.map((r) => (r.id === id ? { ...r, expanded: !r.expanded } : r))
    );
  };

  return (
    <div className="app-container">
      <header>
        <h1>🎭 BiasX</h1>
        <p>Real-time bias + sentiment analysis</p>
      </header>

      <div className="input-section">
  <textarea
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter a sentence or paragraph..."
  />
  <button onClick={handleAnalyze} className='button-analyse' disabled={loading}>
    {loading ? 'Analyzing...' : 'Analyze'}
  </button>
</div>


      <div className="results-section">
        {responses.map((r, idx) => (
          <div key={r.id} className="response-card">
<div className="response-header" onClick={() => toggleExpand(r.id)}>
  <button
    className="toggle-btn"
    onClick={(e) => {
      e.stopPropagation(); // prevent parent click toggle
      toggleExpand(r.id);
    }}
  >
    {r.expanded ? '▲' : '▼'}
  </button>
  <div className="response-title">
    <strong>#{responses.length - idx} • Input:</strong> {r.input}
  </div>
</div>


            {r.expanded && (
              <div className="response-body">
                {r.error ? (
                  <p className="error">{r.error}</p>
                ) : (
                  <>
                    <p><strong>Bias Label:</strong> <span className={r.bias_label === 'GENDER_BIAS' ? 'bias' : 'neutral'}>{r.bias_label}</span></p>
                    <p><strong>Feedback:</strong> {r.feedback}</p>
                    <p><strong>Sentiment:</strong> <span className={r.sentiment_label === 'NEGATIVE' ? 'bias' : 'neutral'}>{r.sentiment_label}</span></p>
                    <p><strong>Sentiment Score:</strong> {r.sentiment_score}</p>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
