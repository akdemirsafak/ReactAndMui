import {Box,Divider,Stack,Grid} from '@mui/material'

export const MuiLayout=()=>{
    return (
        <>
        <Stack 
            sx={{border:'1px solid'}} 
            direction='row' 
            spacing={5} //Spacing ile elementler arası(Childs) boşlukları ayarlıyoruz.
            divider={<Divider orientation='vertical' flexItem/>}
        > 
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

            //mui.com/system/properties all is working here
            >
                Hello without Sx
            </Box>
        </Stack>

        <Grid container my={4} rowSpacing={2} columnSpacing={3}> 

        {/* xs for mobile
        sm for tablet
        md for desktop
        lg and xl for larger monitors */}
        
            <Grid item xs={12} sm={6} md={4}>
                <Box bgcolor='primary.light' p={2}>Item1</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box bgcolor='primary.light' p={2}>Item2</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box bgcolor='primary.light' p={2}>Item3</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box bgcolor='primary.light' p={2}>Item4</Box>
            </Grid>
        </Grid>
        
        </>
     
    )
}