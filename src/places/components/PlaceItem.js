import React, { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.scss';

const PlaceItem = ({id, image, title, description, address, creatorId, location}) => {
  const cardStyles = {
    width: '540px',
    height: '600px'
  }

  const auth = useContext(AuthContext);

  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const openConfirmHandler = () => setShowConfirmModal(true);

  const closeConfirmHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = () => {
    console.log('deleting...');
    closeConfirmHandler();
  }
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
          <Map lng={location.lng} lat={location.lat} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        header="Are you sure?"
        onCancel={closeConfirmHandler}
        footerClass="place-item__footer-actions"
        footer={
          <React.Fragment>
            <Button className="outline-primary" onClick={closeConfirmHandler}>CANCEL</Button>
            <Button className="danger" onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
        }
      >
        <p>Are you really want to delete this post?</p>
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
            {auth.isLoggedIn && <Button className={'warning'} to={`/places/${id}`}>
              EDIT
            </Button>}
            {auth.isLoggedIn && <Button className={'danger'} onClick={openConfirmHandler}>
              DELETE
            </Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  )
}

export default PlaceItem;
