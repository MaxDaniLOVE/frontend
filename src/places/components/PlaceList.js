import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import PlaceItem from './PlaceItem';
import './PlaceList.scss';

const PlaceList = (props) => {
  if(!props.items.length){
    return (
      <Card>
        <h2 className="center">No places found.</h2>
        <button className="btn btn-success">Share place</button>
      </Card>
    )
  }
  return (
    <ul className="place-list">
      {props.items.map(({id, imageURL, title, description, address, creator, location}) => 
        <PlaceItem
          key={id}
          id={id}
          image={imageURL}
          title={title}
          description={description}
          address={address}
          creatorId={creator}
          location={location}
        />
      )}
      <Button to="/places/new" className="primary">ADD NEW PLACE</Button>
    </ul>
  );
}

export default PlaceList;
