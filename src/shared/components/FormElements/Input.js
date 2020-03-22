import React, { useReducer } from 'react';
import './Input.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        value: action.value,
        isValid: true
      }
    default:
      return state;
  }
}

const Input = ({type, label, validator, onChange, id, placeholder, errorText}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false})

  const changeHandler = (e) => {
    dispatch({type: 'CHANGE_INPUT', value: e.target.value})
  }
  // TODO Add border color for input
  return (
    <div className='form-input'>
      <label htmlFor={id}>{label}</label>
      <input type={type}
        onChange={changeHandler}
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder} 
        value={inputState.value}/>
        {
          !inputState.isValid && <p>{errorText}</p>
        }
    </div>
  );
}

export default Input;
