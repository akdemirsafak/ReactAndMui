import { Stack,Box, TextField, MenuItem } from "@mui/material"
import React,{useState} from "react"

export const MuiSelect =()=>{
    const [countries,setCountries] = useState<string[]>([])
    console.log({countries})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value
        setCountries(typeof value=== 'string' ? value.split(','):value)
    }
    return(
        <Box width='250px'> 
        <TextField
            fullWidth
            label="Select Country"
            select
            value={countries}
            onChange={handleChange}
            SelectProps={{
                multiple:true
            }}
            helperText='please select your country'
            color="secondary"
            error
        >
            <MenuItem value='tr'>Turkey</MenuItem>
            <MenuItem value='de'>Germany</MenuItem>
            <MenuItem value='uk'>United Kingdom</MenuItem>
            <MenuItem value='us'>United States</MenuItem>
        </TextField>

        </Box>
    )
}