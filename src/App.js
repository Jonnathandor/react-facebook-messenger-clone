import { useState, useEffect } from 'react';
import './App.css';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data()})))
    });
  }, []);

  useEffect(() => {
    // run code here
    setUsername(prompt('Please enter your name'));

  }, []); // codition if no condition then the block runs when the page loads

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello There</h1>
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)} />

          <IconButton disabled={!input}
          variant="contained"
          color="primary"
          type="submit" 
          onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message}) => (
            <Message
            key={id}
            username={username}
            message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
