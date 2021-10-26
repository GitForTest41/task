import { FormField } from '../../molecules/FormField/FormField';
import { ActionBtn } from '../../atoms/ActionBtn/ActionBtn';
import { Arrow } from '../../atoms/Arrow/Arrow';
import { Wrapper, StyledTittle, FormWrapper } from './RegisterForm.styles';
import React, { useCallback, useState } from 'react';
import { useLogin } from '../../../providers/LoginProvider';

import { useError } from '../../molecules/ErrorMessage/useError';
import { useHistory } from 'react-router-dom';
import { PasswordInfo } from '../../molecules/PasswordInfo/PasswordInfo';
import { isEmailValid, isLengthValid, isPasswordIsValid, IsPasswordsAreTheSame } from '../../../validators/validators';
import { handleRegister } from '../../../api/RegisterHandler';

interface FormValuesState {
  username: string;
  email: string;
  password: string;
  rPassword: string;
}

export interface RegistrationModel {
  username: string;
  email: string;
  password: string;
}

const initialState: FormValuesState = {
  username: '',
  email: '',
  password: '',
  rPassword: '',
};

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState<FormValuesState>({
    ...initialState,
  });
  const [isInfoAboutPasswordVisible, setIsInfoAboutPasswordVisible] = useState(false);
  const { setIsLogged } = useLogin();
  const { dispatchError, handleToast } = useError();
  const history = useHistory();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormValues((f) => ({ ...f, [e.target.name]: e.target.value }));
  }, []);

  const handleBackToLogin = () => history.goBack();

  const handleShowPasswordInfo = useCallback(() => {
    setIsInfoAboutPasswordVisible(true);
    setTimeout(() => {
      setIsInfoAboutPasswordVisible(false);
    }, 5000);
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      e.preventDefault();
      if (!isLengthValid(formValues.username)) {
        dispatchError('username is to short');
        return;
      }

      if (!isEmailValid(formValues.email)) {
        dispatchError('your email is incorrect');
        return;
      }
      if (!isPasswordIsValid(formValues.password)) {
        dispatchError('Wrong password read cearfuly instructions about strong password');
        return;
      }

      if (!IsPasswordsAreTheSame(formValues.password, formValues.rPassword)) {
        dispatchError('password are not the same');
        return;
      }

      await handleRegister(formValues);
      await setIsLogged(true);
      await setFormValues(initialState);
      await handleToast('Register is completed, now you can login');
      await handleBackToLogin();
    } catch (e) {
      await setIsLogged(false);
      await dispatchError('Something went wrong with register please contact your support');
      await setFormValues(initialState);
    }
  };

  return (
    <Wrapper>
      <Arrow onClick={handleBackToLogin} />
      <StyledTittle>Create an new account</StyledTittle>
      <FormWrapper as="form" onSubmit={handleSubmit}>
        <FormField
          label="Username"
          name="username"
          id="username"
          type="text"
          onChange={handleChange}
          value={formValues.username}
        />
        <FormField label="Email" name="email" id="email" type="text" onChange={handleChange} value={formValues.email} />
        <FormField
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
          value={formValues.password}
          onMouseMoveFunc={handleShowPasswordInfo}
        />

        <FormField
          label="Repeat Password"
          name="rPassword"
          id="rPassword"
          type="Password"
          onChange={handleChange}
          value={formValues.rPassword}
        />
        <ActionBtn
          name="Create"
          styles={{
            width: '60%',
            height: '40%',
            background: 'orange',
            margin: '10px',
          }}
        />
      </FormWrapper>
      {isInfoAboutPasswordVisible ? <PasswordInfo /> : null}
    </Wrapper>
  );
};

//@ToDo add Power Password//
