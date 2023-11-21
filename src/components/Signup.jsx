// src/components/Signup.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', { name, email, createPassword, confirmPassword });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="white"
      color="black"
    >
      <h2>Sign Up Form</h2>
      <form onSubmit={handleFormSubmit}  style={{ width: '300px' }}>
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
          InputProps={{ style: { color: 'black'} }}
        />
        <TextField
          label="Create Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          InputProps={{ style: { color: 'black' } }}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{ style: { color: 'black'} }}
        />
        <Button type="submit" variant="text" color="primary" style={{ marginTop: '20px' }}>
          <Link to="/login">sign In</Link>
        </Button>
      </form>
    </Box>
  );
};

export default Signup;