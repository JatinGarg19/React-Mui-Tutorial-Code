import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

const MuiSwitch = () => {
    const [checked, setchecked] = useState(false)
    console.log({ checked })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel 
            label='Dark Mode' 
            control={<Switch checked={checked} onChange={handleChange} size='small' color='success'/>} 
        />
    </Box>
  )
}

export default MuiSwitch