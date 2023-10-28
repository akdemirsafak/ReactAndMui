import {Stack,TextField,InputAdornment} from '@mui/material'
import { useState } from 'react'

export const MuiTextField=()=>{
    const [value,setValue]=useState('')
    return(
        <Stack spacing={4}>

            <Stack direction='row' spacing={2} >
                <TextField label="Name" />
                <TextField label="Outlined" variant='outlined' />
                <TextField label="Filled" variant='filled' />
                <TextField label="Standart" variant='standard'/>
            </Stack>

            
            <Stack direction='row' spacing={2} >
                <TextField label="Small secondary" size='small' color='secondary' />
                <TextField label="Required field" 
                    required 
                    error ={!value}
                    value={value} 
                    onChange={e=>setValue(e.target.value)}
                    helperText={!value ? 'Required':'Dont share your password with anyone'}
                />
                <TextField label="Required input"  helperText='this is a helper text.'/>
                <TextField label="Password"  type='password' disabled/>
                <TextField label="Readonly" helperText="U can focus but cannot write" InputProps={{readOnly:true}}/> 
            </Stack>
                {/* Examples */}
            <Stack direction='row' spacing={2} >
                <TextField label="Amount" InputProps={{
                    startAdornment:<InputAdornment position='start'>$</InputAdornment>,
                    }} />
                <TextField label="Weight" InputProps={{
                    endAdornment:<InputAdornment position='end'>kg</InputAdornment>,
                    }}/>
             
            </Stack>

        </Stack>
    )
}