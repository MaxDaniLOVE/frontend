import React, { useEffect, useState } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';
import Card from '../../shared/components/UIElements/Card';
import useForm from '../../shared/hooks/form-hook';
import { useParams } from 'react-router-dom';

const UpdatePlace = () => {
  const [isLoading, setIsloading] = useState(true)

  const DUMMY_PLACES = [
    {
      id: 'p1',
      imageURL: 'https://lp-cms-production.imgix.net/2019-06/513008517_large.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
      title: 'Minsk',
      description: 'Love it a lot!',
      address: 'vulica Maksima Bahdanoviča 7а,',
      creator: 'u1',
      location: {
        lat: 53.9083105,
        lng: 27.5548751
      },
    }, 
    {
      id: 'p2',
      imageURL: 'https://belarusgid.by/wp-content/uploads/2016/08/naroch.jpg',
      title: 'Naroch',
      description: 'Love it a lot!',
      address: 'Narach Lake',
      creator: 'u1',
      location: {
        lat: 54.8481639,
        lng: 26.7006121
      },
    }
  ];

  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    }
  }, false)

  const identifiedPlace = DUMMY_PLACES.find(({id}) => id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          }
        },
        true
      );
    }
    setIsloading(false)
  }, [setFormData, identifiedPlace.description, identifiedPlace.title, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          No place found...
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        Loading...
      </div>
    );
  }

  return (
    <form onSubmit={placeUpdateSubmitHandler}>
      <Input
        errorText="Input correct title!"
        element="input"
        id="title"
        type="text"
        label="Title:"
        validators={[VALIDATOR_REQUIRE()]}
        onChange={inputHandler}
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />
      <Input
        errorText="Input correct description! (at least 5 characters length)"
        element="textarea"
        id="description"
        type="text"
        label="Description:"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onChange={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />
      <Button type="submit" className="success" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );
}

export default UpdatePlace;
