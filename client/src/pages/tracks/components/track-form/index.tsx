import { Autocomplete, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Modal from '@/components/modal';
import { useStores } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { IEntityFormProps } from '@/types/entity-form';
import { FormMode } from '@/enums/form-mode';
import { useEffect } from 'react';
import { Track } from '@/models/track';

const TrackForm = ({ open, onClose }: IEntityFormProps) => {
  const {
    tracksStore: {
      createTrack,
      createTrackLoading,
      resetCurrentTrack,
      updateTrack,
      currentTrack,
    },
    authorsStore: { authors, getAllAuthors },
  } = useStores();

  const formMode = currentTrack ? FormMode.Edit : FormMode.Create;

  const defaultValues =
    formMode === FormMode.Edit ? { ...currentTrack } : { name: '' };
  const { control, handleSubmit, reset } = useForm<Track>({
    defaultValues,
  });

  const resetForm = () => {
    reset(defaultValues);
  };

  useEffect(() => {
    getAllAuthors();
    resetForm();
  }, [open]);

  const handleClose = () => {
    resetForm();
    resetCurrentTrack();
    onClose();
  };

  const handleCreateUser = async (data: Track) => {
    await createTrack(data);
    handleClose();
  };

  const handleUpdateUser = async (data: Track) => {
    if (currentTrack) {
      await updateTrack(currentTrack?.id, data);
      handleClose();
    }
  };

  const submitHandler =
    formMode === FormMode.Create ? handleCreateUser : handleUpdateUser;

  return (
    <Modal
      title={`${formMode === FormMode.Create ? 'Add' : 'Edit'} Track`}
      description="Please fill all of the fields."
      okProps={{
        text: formMode === FormMode.Create ? 'Create' : 'Save',
        onClick: handleSubmit(submitHandler),
        loading: createTrackLoading,
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
        <Controller
          name="author"
          control={control}
          render={({ field: { onChange } }) => (
            <Autocomplete
              options={authors}
              getOptionLabel={(option) => option?.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Author"
                  placeholder="Choose an author"
                  variant="outlined"
                />
              )}
              onChange={(_, data) => {
                onChange(data);
                return data;
              }}
            />
          )}
        />
      </Stack>
    </Modal>
  );
};

export default observer(TrackForm);
