import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon  from '@mui/icons-material/FormatItalic'
import  FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react'

export const MuiButton=() => {
    const [formats, setFormats] = useState<string|null>(null) 
    console.log({formats})
    
    const handleFormatChange = (
        _event : React.MouseEvent<HTMLElement>,
        updatedFormats : string | null) => {
        setFormats(updatedFormats)
    }
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
                    <IconButton aria-label='send' color='success' size='large'>
                        <SendIcon/>
                    </IconButton>
                    <Button variant='contained' endIcon={<SendIcon/>} disableElevation onClick={()=> alert('Clicked Disabled Elevation')}> Disable Elevation</Button>  
                    <Button variant='contained' endIcon={<SendIcon/>} disableRipple onClick={()=> alert('Clicked Disabled Ripple')}> Disable Ripple</Button>      
                </Stack>

                <Stack direction='row'>
                    <ButtonGroup variant='outlined' >
                        <Button >Left</Button>
                        <Button >Center</Button>
                        <Button >Right</Button>
                    </ButtonGroup>
                </Stack>
                
                <Stack direction='row'>
                    <ButtonGroup variant='text' orientation='vertical' size='small' aria-label='alignment button group'>
                        <Button onClick={()=>alert('left clicked')}>Left</Button>
                        <Button >Center</Button>
                        <Button >Right</Button>
                    </ButtonGroup>
                </Stack>
            {/* ToggleButton */}
            <Stack direction='row'>
                <ToggleButtonGroup  
                aria-label='text formatting'
                orientation='vertical'
                color='success'
                size='small'
                value={formats} 
                onChange={handleFormatChange}
             
            >
                    <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>


            </Stack>
        </div>
    )}
