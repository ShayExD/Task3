import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './FComponents/register'
import Login from './FComponents/login'
import Profile from './FComponents/profile'
import EditDetails from './FComponents/editDetails'



function App() {

  const loadUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Users:', users);
    // You can return users or perform any other operations with the users if needed.
    return users;
  };

  useEffect(() => {
    loadUsers();
  }, []);


  return (
    <>
    <Login/>
    <Profile/>
    <Register/>
    <EditDetails/>
    </>
  )
}

export default App
