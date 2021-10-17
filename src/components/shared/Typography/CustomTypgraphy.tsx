import {Typography} from '@mui/material';

const CustomTypography = (props: any) => {
  return (
    <Typography
      variant={props.variant}
      color={props.color}
      align={props.align}
      {...props}
    >
      {props.text}
      {props.children}
    </Typography>
  );
};

export default CustomTypography;
