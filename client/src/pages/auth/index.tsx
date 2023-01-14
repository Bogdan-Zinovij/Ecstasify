import AuthForm from '@/components/auth-form';
import { AuthFormMode } from '@/types/auth';
import { Box } from '@mui/material';
import * as s from './styles';

type AuthPageProps = {
  mode: AuthFormMode;
};

const AuthPage = ({ mode }: AuthPageProps) => {
  return (
    <Box sx={s.authPageWrapper}>
      <AuthForm mode={mode} />
    </Box>
  );
};

export default AuthPage;
