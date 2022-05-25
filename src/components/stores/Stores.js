import React from 'react'
import { Autocomplete,TextField,FormGroup,Button,FormControlLabel,Checkbox,FormControl,FormLabel,RadioGroup, Radio } from '@mui/material'

const locations = [
  { label: 'Ontario'},
  { label: 'Alberta'},
  { label: 'British Columbia'},
  { label: 'Ottawa'},
  { label: 'Prince Edward Island'}]

const Stores = () => {
  return (
    <>
        <TextField id="outlined-basic" label="First Name" variant="outlined" required/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" /><br/><br/>
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={locations}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Location" />}
        />
        <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Order</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="delivery"
                name="radio-buttons-group"
              >
              <FormControlLabel value="pickup" control={<Radio />} label="Pick-Up" />
              <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
              </RadioGroup>
        </FormControl>
        <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Subscribe to newsletter" />
        </FormGroup>
        <Button variant="contained" onClick={() => {alert('Order is successful!')}}>Submit</Button>
    </>
  )
}

export default Stores