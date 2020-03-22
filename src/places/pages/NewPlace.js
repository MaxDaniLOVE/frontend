import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';

import useForm from '../../shared/hooks/form-hook';

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    address: {
      value: '',
      isValid: false
    },
  }, false)

  const submitHandler = e => {
    e.preventDefault();
    console.log(formState.inputs)
  }

  return <form className="place-form" onSubmit={submitHandler}>
    <Input
      errorText="Input correct title!"
      element="input"
      id="title"
      type="text"
      label="Title:"
      validators={[VALIDATOR_REQUIRE()]}
      onChange={inputHandler}
    />
    <Input
      errorText="Input correct description! (at least 5 characters length)"
      element="textarea"
      id="description"
      type="text"
      label="Description:"
      validators={[VALIDATOR_MINLENGTH(5)]}
      onChange={inputHandler}
    />
    <Input
      errorText="Input correct address!"
      element="input"
      id="address"
      type="text"
      label="Address:"
      validators={[VALIDATOR_REQUIRE()]}
      onChange={inputHandler}
    />
    <Button type="submit" className="success" disabled={!formState.isValid}>ADD PLACE</Button>
  </form>
}

export default NewPlace;
