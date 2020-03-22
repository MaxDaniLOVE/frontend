import React from 'react';
import './Input.scss';

const Input = ({type, label, validator, onChange, id, placeholder}) => {
  return (
    <div className='form-input'>
      <label htmlFor={id}>{label}</label>
      <input type={type}
        onChange={e => onChange && e.preventDefault()}
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder} />
    </div>
  );
}

export default Input;
