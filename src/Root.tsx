import { MainTemplate } from './templates/MainTemplate/MainTemplate';
import { LoginForm } from './components/organism/LoginForm/LoginForm';
import { useAuth } from './providers/useAuth';
import { TodosList } from './components/organism/ToDosList/TodosList';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorPopup } from './components/molecules/ErrorMessage/ErrorPopup';
import { useError } from './components/molecules/ErrorMessage/useError';
import { RegisterForm } from './components/organism/RegisterForm/RegisterForm';

import 'react-toastify/dist/ReactToastify.css';

export const AuthenticatedApp = () => {
  // return <TodosList />;
  return <TodosList />;
};

const UnauthenticatedApp = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

function Root() {
  // @ts-ignore
  const { user } = useAuth();
  const { error } = useError();

  return (
    <>
      <MainTemplate>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</MainTemplate>;
      {error && <ErrorPopup message={error} />}
    </>
  );
}

export default Root;

//@ToDo type Auth and Error context//
