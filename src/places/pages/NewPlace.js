import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validators';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid
          }
        },
        isValid: formIsValid
      }
    default:
      return state;
  }
}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
    },
    isValid: false
  })

  const inputHandler = useCallback((id, isValid, value) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value,
      isValid,
      inputId: id
    })
  }, []) // changes function only if changes arguments in array 

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
