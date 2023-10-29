import { Stack,Box, TextField, MenuItem } from "@mui/material"
import React,{useState} from "react"

export const MuiSelect =()=>{
    const [country,setCountry] = useState('')
    console.log({country})
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value as string)
    }
    return(
        <Box width='250px'> 
        <TextField
            fullWidth
            label="Select Country"
            select
            value={country}
            onChange={handleChange}
        >
            <MenuItem value='tr'>Turkey</MenuItem>
            <MenuItem value='de'>Germany</MenuItem>
            <MenuItem value='uk'>United Kingdom</MenuItem>
            <MenuItem value='us'>United States</MenuItem>
        </TextField>

        </Box>
    )
}