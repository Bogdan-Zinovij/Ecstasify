import { useStore } from '@/hooks';
import { SignInRequest, SignUpRequest } from '@/services/users.service';
import { AuthFormMode } from '@/types/auth';
import { TextField, Button, Box, CircularProgress, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo from '../logo';
import * as s from './styles';

interface IAuthFormProps {
  mode: AuthFormMode;
}

type AuthRequest = Partial<SignUpRequest> &
  Pick<SignInRequest, 'email' | 'password'>;

const AuthForm = ({ mode }: IAuthFormProps) => {
  const navigate = useNavigate();
  const isSignInMode = mode === 'sign-in';
  const { signUp, signIn, signInLoading, signUpLoading } =
    useStore('authStore');

  const { handleSubmit, control } = useForm<AuthRequest>({
    defaultValues: {
      name: '',
      password: '',
      email: '',
    },
  });

  const handleSignIn = (data: AuthRequest) => {
    signIn(data);
  };

  const handleSignUp = (data: AuthRequest) => {
    signUp({ ...data, name: data.name ?? '' });
  };

  const toggleAuthPage = () => {
    navigate(isSignInMode ? '/auth/sign-up' : '/auth/sign-in');
  };

  return (
    <Box sx={s.authFormWrapper}>
      <Box
        sx={{
          background: ({ gradients }) => gradients.main,
          padding: '20px 0',
        }}
      >
        <Logo />
      </Box>
      <Box sx={s.controlsWrapper}>
        {mode === 'sign-up' ? (
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  placeholder="Username"
                  label="Username"
                  variant="standard"
                  {...field}
                />
              );
            }}
          />
        ) : null}
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                placeholder="Email"
                label="Email"
                variant="standard"
                type="email"
                {...field}
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                placeholder="Password"
                label="Password"
                variant="standard"
                type="password"
                {...field}
              />
            );
          }}
        />
        <Button
          onClick={
            isSignInMode
              ? handleSubmit(handleSignIn)
              : handleSubmit(handleSignUp)
          }
          disableElevation
          variant="contained"
          sx={s.containedBtn}
          size="large"
          disabled={signInLoading || signUpLoading}
        >
          <Stack direction="row" alignItems="center" gap="10px">
            {signInLoading || signUpLoading ? (
              <CircularProgress size="15px" sx={{ color: 'currentColor' }} />
            ) : null}
            {isSignInMode ? 'Sign In' : 'Sign Up'}
          </Stack>
        </Button>
        <Button onClick={toggleAuthPage} variant="outlined" size="large">
          {isSignInMode ? 'Sign Up' : 'Sign In'}
        </Button>
      </Box>
    </Box>
  );
};

export default observer(AuthForm);
