import React ,{useEffect} from 'react'
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


function Profile() {

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
  }

    const user = JSON.parse(sessionStorage.getItem('loggedUser')) || ''
 

  return (

    <Grid>
      {user === '' ? (<p>Need to connect to user.</p>):(<Paper elevation={10} style={ProfileStyle.paperStyle}>
      <Grid align="center">
        <Avatar style={ProfileStyle.avatarStyle}>
          <ManOutlinedIcon align="center" />
        </Avatar>
      </Grid>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Profile
        </Typography>
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
              // onClick={handleUpdateDetailsClick}
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
              // onClick={handleGameClick}
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
              // onClick={() => handleLogoutClick(user.email)}
            >
              Log out
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>)}
    {/* <Paper elevation={10} style={ProfileStyle.paperStyle}>
      <Grid align="center">
        <Avatar style={ProfileStyle.avatarStyle}>
          <ManOutlinedIcon align="center" />
        </Avatar>
      </Grid>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Profile
        </Typography>
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
              // onClick={handleUpdateDetailsClick}
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
              // onClick={handleGameClick}
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
              // onClick={() => handleLogoutClick(user.email)}
            >
              Log out
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper> */}
    {/* {isUpdateDetailsVisible && <EditDetails />} */}
  </Grid>  )
}

export default Profile