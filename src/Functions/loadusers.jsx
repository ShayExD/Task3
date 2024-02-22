

const loadUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Users:', users);
    // You can return users or perform any other operations with the users if needed.
    return users;
  };

  export default loadUsers;

