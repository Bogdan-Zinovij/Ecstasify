import { User } from '@/models/user';
import { Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Modal from '@/components/modal';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { IEntityFormProps } from '@/types/entity-form';
import { FormMode } from '@/enums/form-mode';
import { useEffect } from 'react';

const UserForm = ({ open, onClose }: IEntityFormProps) => {
  const {
    createUser,
    createUserLoading,
    resetCurrentUser,
    updateUser,
    currentUser,
  } = useStore('usersStore');

  const formMode = currentUser ? FormMode.Edit : FormMode.Create;

  const defaultValues: Partial<User> =
    formMode === FormMode.Edit
      ? { ...currentUser }
      : {
          name: '',
          email: '',
          password: '',
        };

  const { control, handleSubmit, reset } = useForm<User>({
    defaultValues,
  });

  const resetForm = () => {
    reset(defaultValues);
  };

  useEffect(() => {
    resetForm();
  }, [open]);

  const handleCreateUser = async (data: User) => {
    await createUser(data);
    onClose();
  };

  const handleUpdateUser = async (data: User) => {
    if (currentUser) {
      await updateUser(currentUser?.id, data);
      onClose();
    }
  };

  const submitHandler =
    formMode === FormMode.Create ? handleCreateUser : handleUpdateUser;

  const handleClose = () => {
    resetForm();
    resetCurrentUser();
    onClose();
  };

  return (
    <Modal
      title="Add User"
      description="Please fill all of the fields to create new user."
      okProps={{
        text: formMode === FormMode.Create ? 'Create' : 'Save',
        onClick: handleSubmit(submitHandler),
        loading: createUserLoading,
      }}
      cancelProps={{ onClick: handleClose }}
      open={open}
      onClose={handleClose}
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
        {formMode === FormMode.Create ? (
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
        ) : null}
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
