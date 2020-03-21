import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 1,
      imageURL: 'https://lp-cms-production.imgix.net/2019-06/513008517_large.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
      title: 'Minsk',
      description: 'Love it a lot!',
      address: 'vulica Maksima Bahdanoviča 7а,',
      creator: '1',
      location: {
        lat: 53.9083105,
        lng: 27.5548751
      },
    }, 
    {
      id: 2,
      imageURL: 'https://belarusgid.by/wp-content/uploads/2016/08/naroch.jpg',
      title: 'Naroch',
      description: 'Love it a lot!',
      address: 'Narach Lake',
      creator: '1',
      location: {
        lat: 54.8481639,
        lng: 26.7006121
      },
    }
  ];
  const userId = useParams().userId;
  console.log(userId);
  const loadedPlaces = DUMMY_PLACES.filter(({creator}) => creator === userId)
  return <PlaceList items={loadedPlaces}/>;
}

export default UserPlaces;
