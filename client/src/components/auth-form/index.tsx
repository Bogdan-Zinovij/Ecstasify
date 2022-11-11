import { TextField, Button, Box } from '@mui/material';

interface IAuthFormProps {
  mode: 'sign-in' | 'sign-up';
}

const AuthForm = ({ mode }: IAuthFormProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        gap: '20px',
      }}
    >
      <p>Ecstasify {mode}</p>
      <TextField placeholder="Username" label="Username" variant="standard" />
      <TextField
        placeholder="Password"
        label="Password"
        variant="standard"
        type="password"
      />
      <Button variant="contained" size="large">
        Sign In
      </Button>
      <Button variant="outlined" size="large">
        Sign Up
      </Button>
    </Box>
  );
};

export default AuthForm;
