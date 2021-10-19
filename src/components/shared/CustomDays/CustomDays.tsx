import {Grid, Paper} from '@mui/material';
import {styled} from '@mui/system';
const CustomDays = (props: any) => {
  var weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const handleClose = (day: any) => {
    props.handleCloseDays(day);
  };

  const Item = styled(Paper)(({theme}) => ({
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));

  return (
    <Grid container>
      {props.days.length
        ? props.days.map((date: any, index: any) => (
            <Grid item md={3} key={index}>
              <Item
                key={index}
                elevation={5}
                sx={{margin: 2, color: 'white', backgroundColor: '#0091EA'}}
                onClick={() => handleClose(weekDays[date - 1])}
              >
                {weekDays[date - 1]}
              </Item>
            </Grid>
          ))
        : ''}
    </Grid>
  );
};

export default CustomDays;
