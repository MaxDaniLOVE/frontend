import React from 'react';
import UserItem from './UserItem';
import './UsersList.css'

const UsersList = ({items}) => {
  if(!items.length){
    return <div className="center">No users found.</div>
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
