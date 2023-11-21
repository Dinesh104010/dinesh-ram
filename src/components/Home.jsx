import React from 'react';
import { Button,   
     Card,   
      CardActionArea,    
       Container, 
        Grid, 
         Paper,
           Stack, 
           TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "./FeaturedBrands.css";

const Home = () => {
  const navigate = useNavigate();
  

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
    <div style={{ height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundImage: "URL('https://wallpaperaccess.com/full/1354213.jpg')", position: 'relative' }}>
      
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        
        <h1 style={{ color: 'silver', fontSize: '71px' }}>ATHENS SPORTS</h1>
      </div>
     

      <Stack direction="row-reverse" spacing={2} style={{ padding: '20px' }}>
        <Button variant="contained" style={{backgroundColor:'yellow'}}>
        <Link to="/brand" state={{color:'white'}}>BRANDS</Link>
        </Button>
        <TextField variant="outlined" label="Search" style={{ backgroundColor: 'white' }} />
        <Button variant="contained" color="primary" style={{backgroundColor:'black'}} onClick={handleLoginClick}>
          Login
        </Button>
        <Button variant="contained" >
            <Link to="/about">ABOUT US</Link>
        </Button>
      </Stack>
    </div>
        <div style={{color:"black",backgroundColor:"silver",height:"50px"}}>  <marquee><h3>CONTACT US: 1234567890 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MAIL US:athens@gmail.com</h3> </marquee></div>
           <div className='su'>
            <Card>
            <Container>
              <Grid container spacing={10} padding={5}>
                <Grid item xs={4}>
                  <Paper sx={{width:"350px",height:"350px",color:"black"}}>
              <Card>
                   <CardActionArea>
                  <img src='https://images.unsplash.com/photo-1592656094267-764a45160876?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dm9sbGV5YmFsbHxlbnwwfHwwfHx8MA%3D%3D' style={{width:"100%",height:"350px"}}></img>
                  <Button ><center>EXPLORE</center></Button>
                  </CardActionArea>
                </Card>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{width:"350px",height:"350px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://img.freepik.com/premium-photo/basketball-arena-with-basketball-ball-ai-generation_201606-5316.jpg' style={{width:"100%",height:"350px"}}></img>
                  <Button ><center>EXPLORE</center></Button>
                  </CardActionArea></Card>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{width:"350px",height:"350px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA95w9TC9MBVMBBHHIu1l3v93R-iqYTdZh4A&usqp=CAU' style={{width:"100%",height:"350px"}}></img>
                    <Button ><center>EXPLORE</center></Button> 
                    </CardActionArea>
                    </Card>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{width:"350px",height:"350px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://t4.ftcdn.net/jpg/05/04/43/17/360_F_504431707_eNMRSWGE99hYGPIxjmKV2KNsgrrl5Ssp.jpg' style={{width:"100%",height:"350px"}}></img>
                  <Button ><center>EXPLORE</center></Button>
                  </CardActionArea></Card>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{width:"350px",height:"350px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://thumbs.dreamstime.com/b/baseball-player-hitting-ball-bat-close-up-158391871.jpg?w=768' style={{width:"100%",height:"350px"}}></img>
                  <Button ><center>EXPLORE</center></Button>
                  </CardActionArea>
                  </Card>

                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper sx={{width:"350px",height:"350px",color:"black"}}>
                    <Card>
                        <CardActionArea>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1nZ5XlayGeLxfIN6_Y_IeW0zhXAt056FQg&usqp=CAU' style={{width:"100%",height:"350px"}}></img>
                  <Button ><center>EXPLORE</center></Button>
                  </CardActionArea>
                  </Card>
                  </Paper>
                </Grid>
               

              </Grid>
            </Container>
            </Card>
           </div>
           
           <div style={{color:'black'}}>
            <footer>
            <center>
              <h2>&copy;ATHENS SPORTS SHOP</h2>
              <span>&#169;SPORTS WORLD</span>
            </center>
            </footer>
           </div>
        </>
  );
};

export default Home;