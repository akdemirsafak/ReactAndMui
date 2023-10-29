import { Box,FormControlLabel,Switch, FormControl, FormLabel, FormHelperText } from "@mui/material"
import React, { useState } from "react"

export const MuiSwitch = ()=>{
    const [checked,setChecked]=useState(false);
    const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
        setChecked(event.target.checked)
    }
    console.log(checked)
    return(
        <Box>
            <FormControlLabel label='Dark mode' control={<Switch checked={checked} onChange={handleChange}/>}/>
        </Box>
    )
}