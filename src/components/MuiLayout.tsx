import {Box} from '@mui/material'

export const MuiLayout=()=>{
    return (
        <>
            <Box 
                //component='h1' 
                sx={{
                    backgroundColor:'primary.main',
                    color:'white',
                    height:'30px',
                    textAlign:'center',
                    width:'500px',
                    padding:'16px',
                    '&:hover':{
                        backgroundColor:'primary.light'
                    }
                }}
            >
                helloo
            </Box>
            <Box 
                display='flex' 
                height='30px'
                width='500px'
                bgcolor='success.light'
                p={2} //padding 18px
                mt={2}
            //mui.com/system/properties all is working here
            >
                Hello without Sx
            </Box>
        </>
    )
}