import Layout from '@/components/layout';
import AuthPage from '@/pages/auth';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Routes } from './routes';

const Router = () => {
  return (
    <RouterRoutes>
      <Route path={Routes.Home} element={<Layout />}>
        <Route index element={<div>Index page</div>} />
        <Route path="/users" element={<div>Users page</div>} />
        <Route path="/tracks" element={<div>Tracks page</div>} />
        <Route path="/subscriptions" element={<div>Subscriptions page</div>} />
      </Route>
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
