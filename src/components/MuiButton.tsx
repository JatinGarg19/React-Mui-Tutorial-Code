import { Button, ButtonGroup, Stack } from '@mui/material'

const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='outlined' color='warning'>Warning</Button>
            <Button variant='outlined' color='info'>Info</Button>
            <Button variant='outlined' color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='text' color='error'>Error</Button>
            <Button variant='text' color='warning'>Warning</Button>
            <Button variant='text' color='info'>Info</Button>
            <Button variant='text' color='success'>Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-aria-label='alignment button group'>
                <Button onClick={() => alert('left clicked')} >Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
    </Stack>
    
   
  )
}

export default MuiButton