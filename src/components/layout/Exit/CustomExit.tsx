import {Grid, Button} from '@mui/material';
import {useHistory} from 'react-router';

const CustomExit = (props: any) => {
  const history = useHistory();

  const handleExit = () => {
    history.push('/');
  };
  return (
    <Grid item>
      <div>
        <Button
          variant='outlined'
          size='large'
          sx={{margin: 2}}
          onClick={handleExit}
        >
          Yes
        </Button>
        <Button
          variant='outlined'
          size='large'
          sx={{margin: 2}}
          onClick={props.handleClose}
        >
          No
        </Button>
      </div>
    </Grid>
  );
};

export default CustomExit;
