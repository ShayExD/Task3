import React ,{useEffect,useState} from 'react'
import {
  TextField,
  Button,
  Container,
  Typography,
  FormControl,
  Grid,
  Paper,
  Avatar,
  Link,
} from '@mui/material'
import ManOutlinedIcon from '@mui/icons-material/ManOutlined'
import EditDetails from './editDetails';
import PropTypes from 'prop-types';


function Profile({ loggedUser, onLogout }) {

  const [showUpdate,setShowUpdate] = useState(false)

  const handleUpdateButtonClick = () => {
    setShowUpdate((prevState) => !prevState);
  };

  Profile.propTypes = {
    loggedUser: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
  };
  

  const ProfileStyle = {
    paperStyle: {
      padding: 20,
      // height: '50vh',
      // width: 700,
      margin: '20px auto',
    },
    avatarStyle: {
      marginBottom: 15,
      backgroundColor: 'rgb(19, 172, 126)',
    },
    profilePictureStyle : {
    width:"100px", 
    height:"100px", 
    borderRadius:"60px", 
    border:"2px solid black", 
    padding:"2px"
    }
  }

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('loggedUser')) || '')
  console.log(user.profilePicture)
    //const user = JSON.parse(sessionStorage.getItem('loggedUser')) || ''
 
    const handleLogoutClick = (email) => {
      const loggedInUserEmail = user.email
      console.log('loginUser email', loggedInUserEmail)
      console.log('email', email)
      if (loggedInUserEmail === email) {
        sessionStorage.removeItem('loggedUser')
        setUser('')
        onLogout();
      } else {
        console.log('The provided email does not match the logged-in user.')
      }
      console.log('Logout button clicked')
    }
  
    const handleGameClick = () => {
      window.open(
        'https://games.yo-yoo.co.il/games_play.php?game=729#google_vignette',
        '_blank'
      )
    }
  

  return (

    
    

    <Grid>

      <Paper elevation={10} style={ProfileStyle.paperStyle}>
      
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Profile
        </Typography><div>
        {user.profilePicture && (
              <img
                src={user.profilePicture}
                style={ProfileStyle.profilePictureStyle}
              />
            )}</div>
        <h3>
          {user.name} {user.familyName}
        </h3>
        <h3>{user.email}</h3>
        <h3>
          {user.street} {user.number}, {user.city}{' '}
        </h3>
        <h3>{user.dob}</h3>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleUpdateButtonClick}
            >
              Update Details
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleGameClick}
            >
              Game
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={() => handleLogoutClick(user.email)}
            >
              Log out
            </Button>
          </Grid>
        </Grid>
        {showUpdate ? (<EditDetails userToEdit={user}></EditDetails>) : (<></>)}
      </Container>
    </Paper>
  </Grid>  )
}

export default Profile