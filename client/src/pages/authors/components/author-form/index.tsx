import { Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { Author } from '@/models/author';
import { IEntityFormProps } from '@/types/entity-form';
import { useEffect } from 'react';
import Modal from '@/components/modal';
import { FormMode } from '@/enums/form-mode';

const AuthorForm = ({ open, onClose }: IEntityFormProps) => {
  const {
    createAuthor,
    createAuthorLoading,
    currentAuthor,
    resetCurrentAuthor,
    updateAuthor,
  } = useStore('authorsStore');

  const formMode = currentAuthor ? FormMode.Edit : FormMode.Create;

  const defaultValues: Partial<Author> =
    formMode === FormMode.Edit
      ? { ...currentAuthor }
      : {
          name: '',
        };

  const { control, handleSubmit, reset } = useForm<Author>({
    defaultValues,
  });

  const resetForm = () => {
    reset(defaultValues);
  };

  useEffect(() => {
    resetForm();
  }, [open]);

  const handleClose = () => {
    resetForm();
    resetCurrentAuthor();
    onClose();
  };

  const handleCreateAuthor = async (data: Author) => {
    await createAuthor(data);
    handleClose();
  };

  const handleUpdateAuthor = async (data: Author) => {
    if (currentAuthor) {
      await updateAuthor(currentAuthor?.id, data);
      handleClose();
    }
  };

  const submitHandler =
    formMode === FormMode.Create ? handleCreateAuthor : handleUpdateAuthor;

  return (
    <Modal
      title={`${formMode === FormMode.Create ? 'Add' : 'Edit'} Author`}
      description="Please fill all of the necessary fields."
      okProps={{
        text: formMode === FormMode.Create ? 'Create' : 'Save',
        onClick: handleSubmit(submitHandler),
        loading: createAuthorLoading,
      }}
      cancelProps={{ onClick: handleClose }}
      open={open}
      onClose={handleClose}
    >
      <Stack spacing={3}>
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

export default observer(AuthorForm);
