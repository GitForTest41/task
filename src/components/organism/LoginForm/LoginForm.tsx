import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/useAuth';
import { useError } from '../../molecules/ErrorMessage/useError';
import { FormField } from '../../molecules/FormField/FormField';
import { ActionBtn } from '../../atoms/ActionBtn/ActionBtn';
import { Wrapper, StyledTittle, FormWrapper } from '../RegisterForm/RegisterForm.styles';
import { BottomSection, Btn } from './LoginForm.styles';
import { isLengthValid } from '../../../validators/validators';

export interface LoginModel {
  login: string;
  password: string;
}

interface LoginFormState {
  login: string;
  password: string;
}

const initialLoginState: LoginFormState = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const [loginFormValues, setLoginFormValues] = useState<LoginFormState>({ ...initialLoginState });
  let history = useHistory();
  const { dispatchError, handleToast } = useError();
  // @ts-ignore //
  const { singIn } = useAuth();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setLoginFormValues((f: LoginFormState) => ({ ...f, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      if (!isLengthValid(loginFormValues.login) && !isLengthValid(loginFormValues.password)) {
        dispatchError('Invalid Login');
        return;
      }
      await singIn(loginFormValues);
      await handleToast('login is completed');
    } catch (e) {
      dispatchError('User is not exist, try again, if it does not work contact to your support!!');
    }
  };

  const handleGoToRegistration = useCallback(() => history.push('/register'), [history]);

  return (
    <Wrapper>
      <StyledTittle>Login</StyledTittle>
      <FormWrapper as="form" onSubmit={handleSubmit}>
        <FormField
          label="Email or Username"
          name="login"
          id="login"
          type="text"
          onChange={handleChange}
          value={loginFormValues.login}
        />
        <FormField
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
          value={loginFormValues.password}
        />
        <ActionBtn name="Login" styles={{ width: '60%', height: '40%', background: 'orange', margin: '10px' }} />
      </FormWrapper>
      <BottomSection>
        <span>or</span>
        <Btn onClick={handleGoToRegistration}>Create an account </Btn>
      </BottomSection>
    </Wrapper>
  );
};
