import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Grid} from '@mui/material';
import CustomRating from '../CustomRating';
import CustomExit from '../Exit';
import CustomDatePicker from '../../shared/CustomDatePicker';
import CustomMap from '../CustomMap';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog({
  handleClose,
  open,
  commandObj,
  handleCloseDays,
}: any) {
  let {command} = commandObj;

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{position: 'relative'}}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ml: 2, flex: 1, textTransform: 'uppercase'}}
              variant='h6'
              component='div'
            >
              {command.type}
            </Typography>
            <Button autoFocus color='inherit' onClick={handleClose}>
              Done
            </Button>
          </Toolbar>
        </AppBar>
        <Grid
          container
          component='dialog'
          sx={{height: '100vh', alignItems: 'center', justifyContent: 'center'}}
        >
          {command.type === 'complete' ? (
            <CustomExit data={command.data} handleClose={handleClose} />
          ) : command.type === 'rate' ? (
            <CustomRating data={command.data} />
          ) : command.type === 'date' ? (
            <CustomDatePicker
              data={command.data}
              handleCloseDays={handleCloseDays}
            />
          ) : command.type === 'map' ? (
            <CustomMap data={command.data} />
          ) : (
            ''
          )}
        </Grid>
      </Dialog>
    </div>
  );
}
