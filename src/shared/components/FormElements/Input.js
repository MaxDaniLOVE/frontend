import React, { useReducer } from 'react';
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

const Input = ({type, label, validators, onChange, id, placeholder, errorText}) => {
  const [inputState, dispatch] = useReducer(
      inputReducer,
      {
        value: '',
        isValid: false,
        isTouched: false
      }
    )

  const changeHandler = (e) => {
    dispatch({type: 'CHANGE_INPUT', value: e.target.value, validators })
  }
  const touchHandler = () => {
    dispatch({type: 'BLUR_INPUT', isTouched: true })
  }
  // TODO Add border color for input
  return (
    <div className='form-input'>
      <label htmlFor={id}>{label}</label>
      <input type={type}
        onChange={changeHandler}
        onBlur={touchHandler}
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder} 
        value={inputState.value}/>
        {
          !inputState.isValid && inputState.isTouched && <p>{errorText}</p>
        }
    </div>
  );
}

export default Input;
