import React from 'react';
import CustomTypography from '../../shared/Typography';
import Link from '@mui/material/Link';

const CopyRight = (props: any) => {
  return (
    <CustomTypography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/therealhsk'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </CustomTypography>
  );
};

export default CopyRight;
