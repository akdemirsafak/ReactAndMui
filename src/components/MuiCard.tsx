import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'


export const MuiCard=()=>{
    return(
        <Box width='300px'>
            <Card>
                <CardMedia 
                    component='img'
                    height='200px'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography gutterBottom variant='body2' color='text.secondary'>
                        This is a body2 text
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}