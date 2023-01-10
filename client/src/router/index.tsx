import AuthPage from '@/pages/auth';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Routes } from './routes';
import UsersPage from '@/pages/users';
import TracksPage from '@/pages/tracks';
import SubscriptionsPage from '@/pages/subscriptions';
import AuthorsPage from '@/pages/authors';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

const Router = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<div>Index page</div>} />
        <Route path="users" element={<UsersPage />} />
        <Route path="tracks" element={<TracksPage />} />
        <Route path="subscriptions" element={<SubscriptionsPage />} />
        <Route path="authors" element={<AuthorsPage />} />
      </Route>
      <Route path="/auth" element={<PublicLayout />}>
        <Route
          path="sign-in"
          element={<AuthPage key={Routes.SignIn} mode="sign-in" />}
        />
        <Route
          path="sign-up"
          element={<AuthPage key={Routes.SignUp} mode="sign-up" />}
        />
      </Route>
    </RouterRoutes>
  );
};

export default Router;
