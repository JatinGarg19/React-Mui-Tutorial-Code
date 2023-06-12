import { InputAdornment, Stack, TextField } from "@mui/material"
import { useState } from "react"

const MuiTextField = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction = 'row'>
            <TextField label='Name' variant="outlined"></TextField>
            <TextField label='Name' variant="filled"></TextField>
            <TextField label='Name' variant="standard"></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
        <TextField label='Small Secondary' size="small" color="secondary"></TextField>
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Form Input' required value={value} 
            onChange={(e) => setValue(e.target.value)} 
            error={!value} helperText={!value ? 'Required' : 'Do not share password'} />
            <TextField label='Form Input' helperText='Do not share your password with anyone.' />
            <TextField label='Password' type="Password" helperText='Do not share your password with anyone.' disabled />
            <TextField label='Read Only' InputProps={{ readOnly: true }} />
        </Stack>
        <Stack spacing={2} direction='row'>
            <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>,}}/>
            <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position="end">kg</InputAdornment>,}}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextField