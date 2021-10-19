import * as React from 'react';
import {Grid} from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import moment from 'moment';
import CustomDays from '../CustomDays';

const CustomDatePicker = (props: any) => {
  const [value, setValue] = React.useState<Date | null>(new Date(props.data));
  const [days, setDays] = React.useState<Array<any>>([]);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);

    let copiedDate =
      newValue !== null ? new Date(newValue.getTime()) : new Date();

    setDays(
      Array.apply(null, Array(7)).map((x, i) => {
        let date = new Date(copiedDate.getTime());
        return moment(date).add(i, 'days').isoWeekday();
      }),
    );
  };

  return (
    <Grid item md={8}>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns} m>
          <Stack spacing={3}>
            <DesktopDatePicker
              label='Date desktop'
              inputFormat='MM/dd/yyyy'
              value={value}
              onChange={handleChange}
              renderInput={(params: any) => <TextField {...params} />}
              minDate={new Date(props.data)}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <CustomDays days={days} handleCloseDays={props.handleCloseDays} />
    </Grid>
  );
};

export default CustomDatePicker;
