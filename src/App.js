import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'Jonnathan', text: 'Hey there'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run code here
    setUsername(prompt('Please enter your name'));

  }, []) // codition if no condition then the block runs when the page loads

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmer</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />
          <Button 
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit" 
          onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map((message, index) => (
          <Message
          username={message.username}
          text={message.text}
          index={index}/>
        ))
      }
    </div>
  );
}

export default App;
