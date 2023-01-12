import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const PublicLayout = () => {
  const { isAuthenticated } = useStore('authStore');
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  return isAuthenticated ? <Navigate to={from} replace /> : <Outlet />;
};

export default observer(PublicLayout);
