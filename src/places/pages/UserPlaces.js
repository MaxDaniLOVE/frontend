import React from 'react';
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 1,
      imageURL: 'https://lp-cms-production.imgix.net/2019-06/513008517_large.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
      title: 'Minsk',
      description: 'Love it a lot!',
      address: 'vulica Maksima Bahdanoviča 7а,',
      creatorId: 'MaxDanilau',
      location: {
        lat: 53.9083105,
        lng: 27.5548751
      },
    }
  ]
  return <PlaceList items={DUMMY_PLACES}/>;
}

export default UserPlaces;
