import {Grid} from '@mui/material';
import GoogleMapReact from 'google-map-react';
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

const CustomMap = (props: any) => {
  const LocationPin = (pin: any) => (
    <div className='pin'>
      <Icon icon={locationIcon} className='pin-icon' />
      <p className='pin-text'>{pin.text}</p>
    </div>
  );
  return (
    <Grid item>
      <GoogleMapReact
        // bootstrapURLKeys={{
        //   // key: process.env.mapKey
        // }}
        defaultCenter={props.data}
        defaultZoom={11}
      >
        <LocationPin
          lat={props.data.lat}
          lng={props.data.lng}
          text={'ottonova'}
        />
      </GoogleMapReact>
    </Grid>
  );
};

export default CustomMap;
