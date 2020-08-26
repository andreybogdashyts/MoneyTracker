import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Best form of contact</FormLabel>
      <RadioGroup aria-label="gender" name="gender" onChange={handleChange} defaultValue="Phone">
        <FormControlLabel value="Email" control={<Radio />} label="Email"   />
        <FormControlLabel value="Phone" control={<Radio />} label="Phone"  /> 
        <FormControlLabel value="Email and Phone" control={<Radio />} label="Email and Phone" />
      
      </RadioGroup>
    </FormControl>
  );
}