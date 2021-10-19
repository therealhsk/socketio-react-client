import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import CopyRight from '../../layout/CopyRight';
import CustomTypography from '../../shared/Typography';
import CustomButton from '../../shared/Button';
import CustomLink from '../../shared/CustomLink';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

const LoginForm = (props: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    if (username && password !== null) history.push('/ChatScreen');
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon />
        </Avatar>
        <CustomTypography component='h1' variant='h5' text={'Sign In'} />
        <Box
          component='form'
          noValidate
          onSubmit={props.handleSubmit}
          sx={{mt: 1}}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <CustomButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{mt: 3, mb: 2}}
            buttonText='Sign In'
            onClick={handleSubmit}
          />
          <Grid container>
            <Grid item xs>
              <CustomLink
                href='#'
                variant='body2'
                linkText='Forgot password?'
              />
            </Grid>
            <Grid item>
              <CustomLink
                href='#'
                variant='body2'
                linkText={"Don't have an account? Sign Up"}
              />
            </Grid>
          </Grid>
          <CopyRight sx={{mt: 5}} />
        </Box>
      </Box>
    </Grid>
  );
};

export default LoginForm;
