import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useRef } from 'react';

const EditTrackModal = ({ open, onClose, currentTrack, onSubmit }) => {
  const trackNameInputRef = useRef(null);
  const trackAuthorInputRef = useRef(null);

  const handleSubmit = () => {
    const data = {
      ...currentTrack,
      name: trackNameInputRef.current.value,
      author: trackAuthorInputRef.current.value,
    };

    console.log(data);

    onSubmit(data);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#fff',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography>Edit</Typography>
          <TextField
            defaultValue={currentTrack?.name}
            inputRef={trackNameInputRef}
            placeholder="Name"
            fullWidth
          />
          <TextField
            defaultValue={currentTrack?.author}
            inputRef={trackAuthorInputRef}
            placeholder="Author"
            fullWidth
          />
          <Button onClick={handleSubmit}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTrackModal;
