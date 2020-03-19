import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Adolf',
      places: 2},
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Obama',
      places: 1},
    {
      id: 3,
      image: 'https://data.whicdn.com/images/338133085/original.jpg?t=1575706413',
      name: 'Putin',
      places: 2}
  ]
  return <UsersList items={USERS}/>;
}

export default Users;
