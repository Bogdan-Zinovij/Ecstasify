import { User } from '@/models/user';
import { Stack, TextField } from '@mui/material';
import { Controller, Control } from 'react-hook-form';

type UserFormProps = {
  control: Control<User>;
};

const UserForm = ({ control }: UserFormProps) => {
  return (
    <Stack spacing={3}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="filled"
            placeholder="Email"
            label="Email"
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="filled"
            placeholder="Password"
            label="Password"
            fullWidth
          />
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="filled"
            placeholder="Name"
            label="Name"
            fullWidth
          />
        )}
      />
    </Stack>
  );
};

export default UserForm;
