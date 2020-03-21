import React from 'react';
import Card from '../../shared/components/UIElements/Card';

import './PlaceItem.scss';

const PlaceItem = ({id, image, title, description, address, creatorId, coordinates}) => {
  const cardStyles = {
    width: '540px',
    height: '600px'
  }
  return(
    <li className="place-item__card">
      <Card style={cardStyles} className={'place-item__card'}>
        <div className="place-item__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item__info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button className="btn btn-secondary">VIEW ON MAP</button>
          <button className="btn btn-warning">EDIT</button>
          <button className="btn btn-danger">DELETE</button>
        </div>
      </Card>
    </li>
  )
}

export default PlaceItem;
