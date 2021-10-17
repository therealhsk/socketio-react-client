import {Link} from '@mui/material';

const CustomLink = (props: any) => {
  return (
    <Link href={props.href} variant={props.variant}>
      {props.linkText}
    </Link>
  );
};

export default CustomLink;
