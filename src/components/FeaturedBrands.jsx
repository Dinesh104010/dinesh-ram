import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function FeaturedBrands()
{

  return (
   <div style={{backgroundColor:'gray'}}> 
    <marquee><h1>FLAT 20% OFF ON THE FOLLOWING TOP FEATURED BRANDS </h1></marquee>
<div style={{backgroundColor:"gray"}} >

    <Paper elevation={22} style={{margin:"50px",backgroundColor:"gray"}}>
    <Stack direction="row" spacing={4} >

    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/97/da/04/97da0412bcd589db41430cce60e228c3.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/2f/f4/b4/2ff4b4ebab30c52ce08117d57b19ac6b.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/1b/c9/42/1bc942b6b48c2ee518192c4fb95d6483.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/90/31/ea/9031ea7af104636e684019912688893a.jpg"
      />
     
    </Card>

    
    
    
   
    </Stack>
   <br></br>
    <Stack direction="row" spacing={4}>

    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/38/2d/66/382d66614145ec6ab289be10fd0686aa.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/15/2b/c1/152bc19bd1fb78b2d232fd083ab63285.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/a7/5f/89/a75f890966b1612695012d1772719b4c.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/cc/bc/48/ccbc48b8ca0683cee844a1e0937c44f4.jpg"
      />
     
    </Card>

    
    
    
   
    </Stack>
   <br></br>
    <Stack direction="row" spacing={4}>

    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/736x/8f/06/95/8f0695797498365de0e3aaf06f9df980.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/a8/f4/37/a8f437a435eb719baa5e8162b130e08e.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/5c/a0/b5/5ca0b5f1741f2118deb6a718bbfb985f.jpg"
      />
     
    </Card>
    <Card sx={{ width:"1500px",height:"300px"}}>
      
      <CardMedia component="img"
       height="300px" 
       image="https://i.pinimg.com/474x/38/d9/67/38d9679ff1bf2a59bc5e51f58f1a5916.jpg"
      />
     
    </Card>

    
    
    
   
    </Stack>
   
    </Paper>
    <center>
      <Link to="/" >
      <Button variant='contained' style={{backgroundColor:"black"}}>Home</Button>
      </Link>
    </center>
    </div>
    </div>
  );
}