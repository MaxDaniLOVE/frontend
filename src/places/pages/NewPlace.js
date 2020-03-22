import React from 'react';
import Input from '../../shared/components/FormElements/Input';

const NewPlace = () => {
  return <form className="place-form">
    <Input id={'form-control'} type="text" label="Title" validator={[]} onChange={e => console.log(e.target.value)} />
  </form>
}

export default NewPlace;
