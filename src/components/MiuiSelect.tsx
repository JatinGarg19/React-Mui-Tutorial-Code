import { Box , TextField , MenuItem } from "@mui/material"
import React, { useState } from "react"

const MiuiSelect = () => {
  const [country, setCountry] = useState("")
  console.log({ country })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }

  return (
    <Box width='250px'>
        <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth > 
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>Usa</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
            <MenuItem value='CH'>China</MenuItem>
        </TextField>
    </Box>
  )
}

export default MiuiSelect