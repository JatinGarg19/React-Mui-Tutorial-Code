import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'

const MuiDialog = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
            open={open}
            onClose={() => setOpen(false)} 
            aria-labelledby='dialog-title' 
            aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>Are you sure you want to submit the test?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} autoFocus>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog