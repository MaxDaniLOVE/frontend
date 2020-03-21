import React, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import './PlaceItem.scss';

const PlaceItem = ({id, image, title, description, address, creatorId, coordinates}) => {
  const cardStyles = {
    width: '540px',
    height: '600px'
  }
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);
  console.log(address)
  return(
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button className="danger" onClick={closeMapHandler}>X</Button>}
      >
        <div className="map-container">
          <h2>THE MAP!</h2>
        </div>
      </Modal>
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
            <Button className={'secondary'} onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button className={'warning'} to={`/places/${id}`}>
              EDIT
            </Button>
            <Button className={'danger'}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default PlaceItem;
