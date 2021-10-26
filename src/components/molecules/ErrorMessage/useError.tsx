import React, { createContext, FC, useCallback, useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

type ErrCtx = {
  error: string | null;
  dispatchError: (string) => void;
  handleToast: (string) => void;
};

const ErrorCtx = createContext<Partial<ErrCtx>>({});
export const ErrorProvider: FC = ({ children }) => {
  const [error, setError] = useState<null | string>(null);

  const dispatchError = useCallback((message: string | null) => {
    setError(message);

    setTimeout(() => {
      setError('');
    }, 4000);
  }, []);

  const handleToast = (text: string) => {
    toast.success(text, {
      className: 'custom-toast',
      position: toast.POSITION.TOP_RIGHT,
      style: {
        background: 'grey',
        color: 'orange',
      },
    });
  };

  return (
    <ErrorCtx.Provider value={{ error, dispatchError, handleToast }}>
      <ToastContainer />
      {children}
    </ErrorCtx.Provider>
  );
};

export const useError = () => {
  const errorContext = useContext(ErrorCtx);

  if (!errorContext) throw Error('Use Error needs to be used inside ErrContext ');

  return errorContext;
};
