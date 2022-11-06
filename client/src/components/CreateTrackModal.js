import React, { useRef } from 'react';
import { Box, Typography, TextField, Modal, Button } from '@mui/material';

const CreateTrackModal = ({ open, onClose, onSubmit }) => {
  const nameInputRef = useRef(null);
  const authorInputRef = useRef(null);

  const handleSubmit = () => {
    const data = {
      name: nameInputRef.current.value,
      author: authorInputRef.current.value,
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
          <Typography>Create</Typography>
          <TextField inputRef={nameInputRef} placeholder="Name" fullWidth />
          <TextField inputRef={authorInputRef} placeholder="Author" fullWidth />
          <Button onClick={handleSubmit}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateTrackModal;
