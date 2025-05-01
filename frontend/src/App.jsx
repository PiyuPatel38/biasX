import { useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/api/check', {
        text: input
      });
      setResult(JSON.stringify(res.data[0], null, 2));
    } catch (err) {
      console.error(err);
      setResult('❌ Error contacting Flask API');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial', backgroundColor: '#1e1e2f', color: 'white', minHeight: '100vh' }}>
      <h1>BiasX: The Mirror of Ethics</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a phrase..."
        style={{ width: '80%', height: '100px', padding: 10, fontSize: 16, borderRadius: 8 }}
      />
      <br />
      <button
        onClick={handleCheck}
        style={{ padding: '10px 20px', marginTop: 20, fontSize: 16, backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: 8 }}
      >
        Analyze Bias
      </button>
      <pre style={{ marginTop: 20, fontSize: 14 }}>{result}</pre>
    </div>
  );
}

export default App;
