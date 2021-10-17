import {Grid} from '@mui/material';

const BackgroundImage = (props: any) => {
  return (
    <Grid
      item
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      sx={{
        backgroundImage: `${props.imageUrl}`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></Grid>
  );
};

export default BackgroundImage;
