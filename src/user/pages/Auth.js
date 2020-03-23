import React, { useState, useContext } from 'react';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from '../../shared/utils/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import useForm from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';
import { AuthContext } from '../../shared/context/auth-context';
import './Auth.scss';

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isLoginMode, setIsLoginMode] = useState(true)

  const [formState, inputHandler, setFormData] = useForm({
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
    auth.login()
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
        ...formState.inputs,
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode)
  }

  return (
    <div className="auth-page">
      <Card>
        <h3>Please enter your email and password!</h3>
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (<Input
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            type="text"
            id="name"
            label="Your name:"
            errorText="Input correct name!"
            onChange={inputHandler}
          />)

          }
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
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
            onChange={inputHandler}
            value={formState.inputs.password.value}
            valid={formState.inputs.password.isValid}
          />
          <Button type="submit" className="success" disabled={!formState.isValid}>
            {isLoginMode ? 'LOG IN' : 'SIGN UP'}
          </Button>
        </form>
      </Card>
      <Button type="button" className="outline-primary" onClick={switchModeHandler}>
        SWITCH TO {!isLoginMode ? 'LOG IN' : 'SIGN UP'}
      </Button>
    </div>
  );
}

export default Auth;
