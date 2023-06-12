import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { useState } from 'react'

const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log({ value })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-ex-group-label'>
                Years of Experience
            </FormLabel>
            <RadioGroup name='job-ex-group' aria-labelledby='job-ex-group-label' value={value} onChange={handleChange} >
                <FormControlLabel control={<Radio />} label='0-2' value='0-2' ></FormControlLabel>
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' ></FormControlLabel>
                <FormControlLabel control={<Radio />} label='6-10' value='6-10' ></FormControlLabel>
            </RadioGroup>
        </FormControl>
    </Box>
  )
}

export default MuiRadioButton