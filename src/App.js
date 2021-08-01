import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  console.log(input);
  console.log(messages);

  return (
    <div className="App">
      <h1>Hello Clever Programmer</h1>

      <form>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit" onClick={sendMessage}>Send Message</button>
      </form>

      {
        messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
