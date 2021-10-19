import {Grid, Rating} from '@mui/material';

const CustomRating = (props: any) => {
  return (
    <Grid item>
      <Rating
        name='size-large'
        max={props.data[1]}
        defaultValue={2}
        size='large'
      />
    </Grid>
  );
};

export default CustomRating;
