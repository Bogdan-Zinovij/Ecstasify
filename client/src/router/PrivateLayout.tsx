import Layout from '@/components/layout';
import { UserRole } from '@/enums/user-role';
import { useStores } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { Navigate, useLocation } from 'react-router-dom';

type PrivateLayoutProps = {
  allowedRoles?: UserRole[];
};

const PrivateLayout = ({ allowedRoles = [] }: PrivateLayoutProps) => {
  const {
    authStore: { isAuthenticated },
    profileStore: { currentUser },
  } = useStores();
  const location = useLocation();
  const isAllowedRole = allowedRoles.includes(currentUser.role);

  if (allowedRoles.length > 0 && !isAllowedRole) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return isAuthenticated ? (
    <Layout />
  ) : (
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default observer(PrivateLayout);
