import React from 'react';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../../shared/utils/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import useForm from '../../shared/hooks/form-hook';


const Auth = () => {
  const [formState, inputHandler] = useForm({
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)

  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={authSubmitHandler}>
      <Input
        errorText="Input correct e-mail!"
        element="input"
        id="email"
        type="email"
        label="E-mail:"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        onChange={inputHandler}
        value={formState.inputs.email.value}
        valid={formState.inputs.email.isValid}
      />
      <Input
        errorText="Input correct password! (at least 8 characters length)"
        element="input"
        id="password"
        type="text"
        label="Password:"
        validators={[VALIDATOR_MINLENGTH(8)]}
        onChange={inputHandler}
        value={formState.inputs.password.value}
        valid={formState.inputs.password.isValid}
      />
      <Button type="submit" className="success" disabled={!formState.isValid}>LOG IN</Button>
    </form>
  );
}

export default Auth;
