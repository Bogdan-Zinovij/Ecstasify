import { Routes } from '@/router/routes';
import { AuthFormMode } from '@/types/auth';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from '../logo';
import * as S from './styles';

interface IAuthFormProps {
  mode: AuthFormMode;
}

const AuthForm = ({ mode }: IAuthFormProps) => {
  const navigate = useNavigate();
  const isSignInMode = mode === 'sign-in';

  const handleSignIn = () => {
    console.log('Sign In');
  };

  const handleSignUp = () => {
    console.log('Sign Up');
  };

  const toggleAuthPage = () => {
    navigate(isSignInMode ? Routes.SignUp : Routes.SignIn);
  };

  return (
    <Box sx={S.authFormWrapper}>
      <Logo />
      <TextField placeholder="Username" label="Username" variant="standard" />
      <TextField
        placeholder="Password"
        label="Password"
        variant="standard"
        type="password"
      />
      <Button
        onClick={isSignInMode ? handleSignIn : handleSignUp}
        variant="contained"
        size="large"
      >
        {isSignInMode ? 'Sign In' : 'Sign Up'}
      </Button>
      <Button onClick={toggleAuthPage} variant="outlined" size="large">
        {isSignInMode ? 'Sign Up' : 'Sign In'}
      </Button>
    </Box>
  );
};

export default AuthForm;
