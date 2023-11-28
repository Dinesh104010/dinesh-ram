// src/components/Loginform.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useContext } from 'react';

import { userContext } from './Context';

const Loginform = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   
   const [user, setuser] = useContext(userContext);
  const handleFormSubmit = async (e) => {

    e.preventDefault();
     console.log('Form submitted with:', { name, email, password });
    const api1 = `http://localhost:3001/data?username=${name}`
    const response =  await axios.get(api1);
      if(response.data.length !==0 && response.data[0].username === name && response.data[0].password === password && response.data[0].email === email)
      {
       
        setuser(name);
        navigate('/')
        alert("Successfully Logged in!!")
      }
      else{
        
        navigate('/login')
        alert("Users is wrong")
      }
  };

  const backgroundPattern = "url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="white"
      color="grey"
      backgroundImage={backgroundPattern}
    >
     
      <h2>Already a user!, Please Log in</h2>
      
      <form  style={{ width: '300px' }}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{ style: { color: 'black' } }}
        />
        <TextField
          label="Mail Id"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { color: 'black' } }}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{ style: { color: 'black' } }}
        />
        <p>If you're a new customer ,please Sign UP</p>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={handleFormSubmit}>
          Submit
        </Button>
        
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" style={{ marginTop: '20px', marginLeft: '10px' }}>
            Signup
          </Button>
        </Link>
        <h1 style={{ color: '#B80000', fontSize: '71px',fontFamily:'viner hand itc' }}>ATHENs</h1>
       

      </form>
    </Box>
  );
};

export default Loginform;