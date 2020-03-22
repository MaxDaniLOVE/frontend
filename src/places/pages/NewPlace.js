import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';

const NewPlace = () => {
  return <form className="place-form">
    <Input
      errorText="Enter correct e-mail"
      id={'form-control'}
      type="text"
      label="E-mail:"
      validators={[VALIDATOR_REQUIRE()]}
    />
  </form>
}

export default NewPlace;
