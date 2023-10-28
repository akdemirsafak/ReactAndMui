import {Stack,Button,IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export const MuiButton=()=>{
    return(
        <div>
            <Stack spacing={4}>
                <Stack spacing={2} direction='row'>
                    <Button variant='text' href='https://google.com'>Btn Text</Button>
                    <Button variant='contained'>Btn Contained</Button>
                    <Button variant='outlined'>Btn Outlined</Button>
                </Stack>

                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary'>Primary</Button>
                    <Button variant='contained' color='secondary'>Secondary</Button>
                    <Button variant='contained' color='warning'>Warning</Button>
                    <Button variant='contained' color='error'>Error</Button>
                     <Button variant='contained' color='info'>info</Button>
                    <Button variant='contained' color='success'>success</Button>
                 
                </Stack>

                <Stack spacing={2} direction='row' display='block'>
                    <Button variant='contained' size='small'>Small</Button>
                    <Button variant='contained' size='medium'>Medium</Button>
                    <Button variant='contained' size='large'>Large</Button>

                 
                </Stack>

                
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
                    <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
                   <IconButton aria-aria-label='send' color='success' size='large'>
                        <SendIcon/>
                    </IconButton>
                    <Button variant='contained' endIcon={<SendIcon/>} disableElevation onClick={()=> alert('Clicked Disabled Elevation')}> Disable Elevation</Button>  
                      <Button variant='contained' endIcon={<SendIcon/>} disableRipple onClick={()=> alert('Clicked Disabled Ripple')}> Disable Ripple</Button>      
                </Stack>

                <Stack spacing={2} direction='row'>
                 
                  
                </Stack>



            </Stack>
        </div>
    )}
