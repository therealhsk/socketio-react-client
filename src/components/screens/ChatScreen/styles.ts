import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#263238',
  },
  paper: {
    width: '90em',
    height: '90%',
    position: 'relative',
  },
  action: {
    display: 'flex',
    width: '96%',
    alignItems: 'center',
    margin: '1em',
    position: 'absolute',
    bottom: 0,
  },
  sendButton: {
    width: '10em',
    height: '60%',
    margin: '0 2em',
  },
  messageInput: {
    width: '80%',
  },
  messageContainer: {
    overflowY: 'auto',
    height: '85%',
  },
  divider: {
    margin: '0.1em',
  },
  message: {
    listStyle: 'none',
  },
  owner: {
    margin: '1em',
    backgroundColor: '#0091EA',
    padding: '0.5em 1.5em',
    borderRadius: '20px',
    color: '#FFF',
    wordBreak: 'break-word',
    maxWidth: '65%',
    width: 'fit-content',
    marginRight: 'auto',
  },
  guest: {
    margin: '1em',
    backgroundColor: '#8BC34A',
    padding: '0.5em 1.5em',
    borderRadius: '20px',
    color: '#FFF',
    wordBreak: 'break-word',
    maxWidth: '65%',
    width: 'fit-content',
    marginLeft: 'auto',
  },
  ol: {
    paddingInlineEnd: '40px',
  },
});
