import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Register from './FComponents/register';
import Login from './FComponents/login';
import Profile from './FComponents/profile';
import EditDetails from './FComponents/editDetails';
import SystemAdmin from './FComponents/systemAdmin';
import usersData from './utils/userData.js';
// import { users } from './utils/users.json';

function App() {
	const [user, setUser] = useState(
		JSON.parse(sessionStorage.getItem('loggedUser')) || ''
	);

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
		loadUsers();
	}, []);

	return (
		<>
			{user === '' ? <Login /> : ''}
			{user === '' ? <Register /> : ''}
		</>
	);
}

export default App;
