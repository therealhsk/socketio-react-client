import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = (props: any) => {
  return (
    <Button
      type={props.type}
      fullWidth={props.fullWidth}
      variant={props.variant}
      {...props}
    >
      {props.buttonText}
    </Button>
  );
};

export default CustomButton;
