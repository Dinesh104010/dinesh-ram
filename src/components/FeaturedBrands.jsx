import React from 'react'
import "./FeaturedBrands.css"
import { Link } from 'react-router-dom';
import {  Container, Grid, Paper } from '@mui/material';

const FeaturedBrands = () => {
  return (
    <>

    <div className='so'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs = {4} >
            <Paper sx={{width:"350px",height:"350px"}}>
             
              <img src='https://i.pinimg.com/736x/72/cc/db/72ccdbd4f3dac6e36cb1722dfc0d8fb1.jpg' style={{maxWidth:'100%'}}></img>

            </Paper>
          </Grid>
          <Grid  item xs = {4}>
            <Paper sx={{width:"350px",height:"350px"}}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUZ0bMgIaO11QIPZ83JGpCGUmHv2z4_MCzQ&usqp=CAU' style={{maxWidth:'100%',height:'350px'}}></img>
            </Paper>
          </Grid>
          <Grid  item xs = {4} >
            <Paper sx={{width:"350px",height:"350px"}}>
              <img src='https://w0.peakpx.com/wallpaper/842/374/HD-wallpaper-puma-amoled-amoled-black-black-logo.jpg' style={{width:"100%",height:'350px'}}></img>

            </Paper>
          </Grid>

          <Grid  item xs = {4} className='d'>
            <Paper sx={{width:"350px",height:"350px"}}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcWIKfV2RAY7zsFwRd0wp7eU8yvqWtkSsRw&usqp=CAU' style={{width:"100%",height:"350px"}}></img>

            </Paper>
          </Grid >
          <Grid  item xs = {4} className='e'>
            <Paper sx={{width:"350px",height:"350px"}}>
              <img src='https://m.media-amazon.com/images/I/71fXj+RIrKL._AC_UF1000,1000_QL80_.jpg' style={{width:"100%",height:"340px"}}></img>

            </Paper>
          </Grid  >
          <Grid  item xs = {4} className='f'>
            <Paper sx={{width:"350px",height:"350px"}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTDHO4Yykr-JE3OBLQc8vyiDSKQU5ISg3Pg&usqp=CAU' style={{width:"100%",height:"350px"}}></img>

            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      </div>
      <div className='sa'>
      <center>
      <Link to="/">BACK TO HOME</Link>
      </center>
      </div>

      </>
      
    
  );
}

export default FeaturedBrands