import { useState, useEffect } from 'react';
import viteLogo from '/vite.svg';
import { createTheme } from '@mui/material';
import './App.css';
import Register from './FComponents/register';
import Login from './FComponents/login';
import Profile from './FComponents/profile';
import EditDetails from './FComponents/editDetails';
import SystemAdmin from './FComponents/systemAdmin';
import usersData from './utils/userData.js';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';

import { Avatar, ThemeProvider } from '@mui/material';
import AdministratorSystem from './FComponents/FCsystemAdmin.jsx';

// import { users } from './utils/users.json';

function App() {
	const [loggedUser, setLoggedUser] = useState('');

	const handleLogin = (user) => {
		setLoggedUser(user);
	};


	const handleLogout = () => {
		setLoggedUser(null);
	};

	const loadUsers = () => {
		console.log(usersData);
		const users = JSON.parse(localStorage.getItem('users')) || usersData;
		console.log('Users:', users);
		return users;
	};

	useEffect(() => {
		const savedUsers = JSON.parse(localStorage.getItem('users'));
		if (!savedUsers || savedUsers.length === 0) {
			localStorage.setItem('users', JSON.stringify(usersData));
		}
		const user = JSON.parse(sessionStorage.getItem('loggedUser'));
		setLoggedUser(user);
		loadUsers();
	}, []);


	const theme = createTheme({
	  components: {
		MuiButton: {
		  styleOverrides: {
			root: {
				// backgroundColor:'#deb46d',
			  borderRadius: 15,
			},
		  }, 
		}, 
	  },
	});
	return (
		<ThemeProvider theme={theme}>

		<div className='container'>
			{/* {user === '' ? <Login onLogin={handleLogin} /> : ''}
			{user === '' ? <Register /> : ''}
		{loggedUser ? <Profile /> : <p>need to connect</p>} */}

			<div>
				{loggedUser ? '' : <Login onLogin={handleLogin} />}
				{loggedUser ? (
					<Profile loggedUser={loggedUser} onLogout={handleLogout} />
					) : (
						<div
						style={{
							display: 'flex',
							textAlign: 'center',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Avatar
							style={{
								marginRight: '10px',
								backgroundColor: 'rgb(19, 172, 126)',
								textAlign: 'center',
							}}>
							<ManOutlinedIcon />
						</Avatar>
						<p>User is not logged in</p>
					</div>
				)}
			</div>
			{loggedUser &&
			loggedUser.username === 'admin' &&
			loggedUser.password === 'ad12343211ad' ? (
				<AdministratorSystem />
				) : (
					<></>
					)}


			{!loggedUser ? <Register></Register> : ''}
		</div>
					</ThemeProvider>
	);
}

export default App;
