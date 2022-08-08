import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%"
};


export default function MainPage() {
  return (
    <>
    <Box 
        display="flex" 
        width={500} height={40} 
        alignItems="center"
        justifyContent="center"
    >
    </Box>    
    <Grid
    container spacing={1}
    direction="column"
    alignItems="center"
    // justifyContent="center"
    >
        <Grid item xs={3}>
        </Grid>

        <Grid item xs={6} alignItems="center">
            <Button variant="contained" color="success" size="large">
                Refresh
            </Button>
        </Grid>

        <Grid item xs={3}>
        </Grid>
 
        <Grid item xs={12}>
        <Button variant="outlined">Alexa, what time does the nearest Costco close?</Button>
        </Grid>
 
        <Grid item xs={12}>
        <Button variant="outlined">Alexa, How far is the nearest chick-fil-a?</Button>
        </Grid>

    </Grid>

    <Box 
            display="flex" 
            width={500} height={40} 
            alignItems="center"
            justifyContent="center"
    >
    </Box>

    <Grid 
    container spacing={4}
    >
        
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/042013/chick-fil-a.png?itok=ESviNAD8"
                    alt="Chick-fil-a"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Chick-Fil-A
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://images6.fanpop.com/image/photos/39800000/Burger-King-Logo-4-nintendofan12-5-39800949-300-300.png"
                    alt="Burger King"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Burger King
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/mcdonalds-sign-1.jpg?quality=82&strip=1&w=1250"
                    alt="McDonald's"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        McDonald's
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

        <Grid item xs={12}>
            <Button variant="contained" disableElevation>
                10% off on TARGET near you!
            </Button>
        </Grid>

        <div style={style}>Sponsored: Target 10% Off.</div>

    </Grid>
    </>
  )
}