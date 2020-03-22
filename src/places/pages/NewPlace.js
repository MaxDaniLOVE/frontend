import React from 'react';
import Input from '../../shared/components/FormElements/Input';

const NewPlace = () => {
  return <form className="place-form">
    <Input errorText="Enter correct e-mail" id={'form-control'} type="text" label="Title" validator={[]}/>
  </form>
}

export default NewPlace;
