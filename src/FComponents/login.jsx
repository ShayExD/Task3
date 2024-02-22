import React, { useState } from 'react';

import {
  Typography,
  TextField,
  Button,
  Grid,

} from '@mui/material';

function Login() {
  

  const [formLoginData, setFormLoginData] = useState({
    username: '',
    password: '',
  });

const loginUser = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  // Find a user with the given username and password
  const loggedInUser = users.find(user => user.username === formLoginData.username && user.password === formLoginData.password);
  if (loggedInUser) {
    console.log('Login successful! Welcome, ', loggedInUser.name);

    // Save the logged-in user in sessionStorage
    sessionStorage.setItem('loggedUser', JSON.stringify(loggedInUser));

    return loggedInUser;
  } else {
    console.log('Invalid username or password. Please try again.');
    return null;
  }
};

const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
 }
const handleSubmit = (e) => {
      // Add your registration logic here
      loginUser();
      console.log('Form LoginData:', formLoginData);
    };

  return (
    <div style={{backgroundColor:'#ffffff'}}>
          <Typography component="h1" variant="h5" style={{ color: '#000000' }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit} style={{marginTop:'10px',marginBottom:'10px'}}>
              <Grid item xs={12} sm={6} style={{marginBottom:'10px'}} >
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  value={formLoginData.username}
                  onChange={handleChange}
                  required
                  />
              </Grid>
              <Grid item xs={12} sm={6}  style={{marginBottom:'10px'}}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formLoginData.password}
                  onChange={handleChange}
                  required
                  />
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" style={{marginTop:'10px'}}>
              Login
            </Button>
            </form>
    </div>
  )
 }

export default Login