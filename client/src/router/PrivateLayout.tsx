import Layout from '@/components/layout';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateLayout = () => {
  const { isAuthenticated } = useStore('authStore');
  const location = useLocation();

  return isAuthenticated ? (
    <Layout />
  ) : (
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default observer(PrivateLayout);
