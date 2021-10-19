import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import io from 'socket.io-client';
import {useStyles} from './styles';
import Dialog from '../../layout/Dialog';
const author = 'Client';

const socket = io('https://demo-chat-server.on.ag/');
const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<any>>([]);
  const [commands, setCommands] = useState({command: '', data: ''});
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    socket.on('message', (payload) => {
      setMessages((prev) => [...prev, payload]);
    });
    socket.on('command', (payload) => {
      console.log(payload);

      setCommands(payload);
      setOpen(!open);
    });

    return () => {
      socket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (message) {
      setMessages([...messages, {author, message}]);
      socket.emit('message', {author, message});
      setMessage('');
    }
  };

  const sendCommand = (e: any) => {
    e.preventDefault();
    socket.emit('command', {author, message});
  };

  const handleClose = () => {
    setOpen(!open);
    setCommands({command: '', data: ''});
  };

  const handleCloseDays = (day: any) => {
    setOpen(!open);
    setCommands({command: '', data: ''});
    alert(`${author} ${day}`);
  };

  return (
    <div className={classes.container}>
      <Dialog
        open={open}
        handleClose={handleClose}
        commandObj={commands}
        handleCloseDays={handleCloseDays}
      />
      <Paper elevation={5} className={classes.paper}>
        <div className={classes.messageContainer}>
          <ol className={classes.ol}>
            {messages.map((message, i) => (
              <li
                key={i}
                className={clsx(
                  classes.message,
                  message.author === 'ottonova bot'
                    ? classes.owner
                    : classes.guest,
                )}
              >
                <span>{message.message}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className={classes.action}>
          <TextField
            className={classes.messageInput}
            id='message'
            label='Message'
            placeholder='enter message here'
            variant='outlined'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            disabled={!message}
            variant='contained'
            color='primary'
            onClick={sendMessage}
            className={classes.sendButton}
          >
            Send
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={sendCommand}
            className={classes.sendButton}
          >
            Command
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default ChatScreen;
