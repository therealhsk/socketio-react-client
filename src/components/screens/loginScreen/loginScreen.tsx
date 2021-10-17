import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import BackgroundImage from '../../layout/BackgroundImage';
import LoginForm from '../../layout/LoginForm';

const theme = createTheme();

function LoginScreen() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{height: '100vh'}}>
        <CssBaseline />
        <BackgroundImage
          xs={false}
          sm={4}
          md={7}
          imageUrl={
            'url(https://cdn.dribbble.com/users/1391761/screenshots/2985367/media/1379d824bd896bf6a16c2e774854a925.png?compress=1&resize=400x300)'
          }
        />
        <LoginForm handleSubmit={handleSubmit} />
      </Grid>
    </ThemeProvider>
  );
}
export default LoginScreen;
