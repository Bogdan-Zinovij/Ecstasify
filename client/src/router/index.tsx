import AuthPage from '@/pages/auth';
import { Routes, Route } from 'react-router-dom';
import UsersPage from '@/pages/users';
import TracksPage from '@/pages/tracks';
import SubscriptionsPage from '@/pages/subscriptions';
import AuthorsPage from '@/pages/authors';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';
import { UserRole } from '@/enums/user-role';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<div>🏠 Home page</div>} />
      </Route>
      <Route
        path="/"
        element={<PrivateLayout allowedRoles={[UserRole.Admin]} />}
      >
        <Route path="users" element={<UsersPage />} />
        <Route path="tracks" element={<TracksPage />} />
        <Route path="subscriptions" element={<SubscriptionsPage />} />
        <Route path="authors" element={<AuthorsPage />} />
      </Route>
      <Route path="/auth" element={<PublicLayout />}>
        <Route
          path="sign-in"
          element={<AuthPage key="sign-in" mode="sign-in" />}
        />
        <Route
          path="sign-up"
          element={<AuthPage key="sign-up" mode="sign-up" />}
        />
      </Route>
    </Routes>
  );
};

export default Router;
