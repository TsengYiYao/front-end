import React from 'react';
import UsersList from './../components/UsersList';

const Users = () => {
  const USERS = [{ id: 'u1', name: 'Max Schwarz', image: 'https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?cs=srgb&dl=beautiful-beige-face-fashion-413959.jpg&fm=jpg', places: 3 }]
  return <UsersList items={USERS} />;
};

export default Users;