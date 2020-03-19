import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.scss'
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';

const UserItem = ({id, image, name, placeCount}) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Card>
          <Link to={`/${id}/places`}>
            <div className="user-item__image">
              <Avatar image={image} alt={name} heigth={'85px'} width={'85px'}/>
            </div>
            <div className="user-item__info">
              <h2>{name}</h2>
              <h3>{placeCount} {placeCount === 1 ? ' place' : ' places'}</h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
}

export default UserItem;
