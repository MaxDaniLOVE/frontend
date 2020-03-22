import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validators';
import './Input.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators)
      }
    case 'BLUR_INPUT':
      return {
        ...state,
        isTouched: action.isTouched
      }
    default:
      return state;
  }
}

const Input = (props) => {
  const {type, label, validators, onChange, id, placeholder, errorText, element} = props;
  const [inputState, dispatch] = useReducer(
      inputReducer,
      {
        value: '',
        isValid: false,
        isTouched: false
      }
    )
  const {isValid, value} = inputState
  useEffect(() => {
    onChange(id, isValid, value)
  }, [id, isValid, onChange, value])
  
  const changeHandler = (e) => {
    dispatch({type: 'CHANGE_INPUT', value: e.target.value, validators })
  }
  const touchHandler = () => {
    dispatch({type: 'BLUR_INPUT', isTouched: true })
  }
  // TODO Add border color for input
  const content = element === 'input' 
  ? <input type={type}
      onChange={changeHandler}
      onBlur={touchHandler}
      className="form-control"
      id={id}
      aria-describedby="emailHelp"
      placeholder={placeholder} 
      value={inputState.value}
    />
  : <textarea type={type}
      onChange={changeHandler}
      onBlur={touchHandler}
      className="form-control"
      id={id}
      rows={3}
      aria-describedby="emailHelp"
      placeholder={placeholder} 
      value={inputState.value}
    />
  return (
    <div className='form-input'>
      <label htmlFor={id}>{label}</label>
        {content}
        {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
}

export default Input;
