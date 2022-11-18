import Layout from '@/components/layout';
import AuthPage from '@/pages/auth';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Routes } from './routes';
import UsersPage from '@/pages/users';
import TracksPage from '@/pages/tracks';
import SubscriptionsPage from '@/pages/subscriptions';

const Router = () => {
  return (
    <RouterRoutes>
      <Route path={Routes.Home} element={<Layout />}>
        <Route index element={<div>Index page</div>} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
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
