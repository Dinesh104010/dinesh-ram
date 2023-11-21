// src/components/Loginform.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Loginform = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', { name, email, password });
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
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit} style={{ width: '300px' }}>
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
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          <Link to="/">Submit</Link>
        </Button>
        
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" style={{ marginTop: '20px', marginLeft: '10px' }}>
            Signup
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default Loginform;