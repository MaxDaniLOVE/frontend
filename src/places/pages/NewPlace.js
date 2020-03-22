import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';

const NewPlace = () => {
  const titleInputHandler = useCallback((id, isValid, value) => {}, []) // changes function only if changes arguments in array 
  const descriptionInputHandler = useCallback((id, isValid, value) => {}, [])
  return <form className="place-form">
    <Input
      errorText="Input correct title!"
      element="input"
      id="title-input"
      type="text"
      label="Title:"
      validators={[VALIDATOR_REQUIRE()]}
      onChange={titleInputHandler}
    />
    <Input
      errorText="Input correct description! (at least 5 characters length)"
      element="textarea"
      id="description-input"
      type="text"
      label="Description:"
      validators={[VALIDATOR_MINLENGTH(5)]}
      onChange={descriptionInputHandler}
    />
  </form>
}

export default NewPlace;
