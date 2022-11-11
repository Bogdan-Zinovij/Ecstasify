import AuthPage from '@/pages/auth';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Routes } from './routes';

const Router = () => {
  return (
    <RouterRoutes>
      <Route
        path={Routes.SignIn}
        element={<AuthPage key={Routes.SignIn} mode="sign-in" />}
      />
      <Route
        path={Routes.SignUp}
        element={<AuthPage key={Routes.SignUp} mode="sign-up" />}
      />
    </RouterRoutes>
  );
};

export default Router;
