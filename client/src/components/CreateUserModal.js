import React, { useRef } from 'react';
import { Box, Typography, TextField, Modal, Button } from '@mui/material';

const CreateUserModal = ({ open, onClose, onSubmit }) => {
  const userNameInputRef = useRef(null);
  const userEmailInputRef = useRef(null);
  const userPasswordInputRef = useRef(null);

  const handleSubmit = () => {
    const data = {
      email: userEmailInputRef.current.value,
      password: userPasswordInputRef.current.value,
      name: userNameInputRef.current.value,
    };

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
          <TextField inputRef={userNameInputRef} placeholder="Name" fullWidth />
          <TextField
            inputRef={userEmailInputRef}
            placeholder="Email"
            fullWidth
          />
          <TextField
            inputRef={userPasswordInputRef}
            placeholder="Password"
            fullWidth
          />
          <Button onClick={handleSubmit}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
