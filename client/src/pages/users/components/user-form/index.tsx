import { User } from '@/models/user';
import { Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Modal from '@/components/modal';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';

type UserFormProps = {
  open: boolean;
  onClose: () => void;
};

const UserForm = ({ open, onClose }: UserFormProps) => {
  const { createUser, createUserLoading } = useStore('usersStore');
  const defaultValues = {
    name: '',
    email: '',
    password: '',
  };
  const { control, handleSubmit, reset } = useForm<User>({
    defaultValues,
  });

  const resetFrom = () => {
    reset(defaultValues);
  };

  const handleCreateUser = async (data: User) => {
    await createUser(data);
    resetFrom();
    onClose();
  };

  const handleCancel = () => {
    resetFrom();
    onClose();
  };

  return (
    <Modal
      title="Add User"
      description="Please fill all of the fields to create new user."
      okProps={{
        text: 'Create',
        onClick: handleSubmit(handleCreateUser),
        loading: createUserLoading,
      }}
      cancelProps={{ onClick: handleCancel }}
      open={open}
      onClose={onClose}
    >
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
    </Modal>
  );
};

export default observer(UserForm);
