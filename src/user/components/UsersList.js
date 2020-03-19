import React from 'react';
import UserItem from './UserItem';
import './UsersList.scss'

const UsersList = ({items}) => {
  if(!items.length){
    return <h2 className="center">No users found.</h2>
  }
  return (
    <ul className="list-group">
      {
        items.map(({id, image, name, places}) => 
          <UserItem key={id} image={image} id={id} name={name} placeCount={places}
        />)
      }
    </ul>
  );
}

export default UsersList;
