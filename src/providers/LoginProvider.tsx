import { createContext, FC, useContext, useState } from 'react';

export const LoginContext = createContext({
  isLogged: false,
  setIsLogged: (value: boolean) => {},
});

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider: FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
