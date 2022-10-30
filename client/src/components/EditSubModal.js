import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { useRef } from 'react';

const EditSubModal = ({ open, onClose, currentUser, onSubmit }) => {
  const userNameInputRef = useRef(null);
  const userEmailInputRef = useRef(null);
  const userPasswordInputRef = useRef(null);

  const handleSubmit = () => {
    const data = {
      ...currentUser,
      email: userEmailInputRef.current,
      password: userPasswordInputRef.current,
      name: userNameInputRef.current,
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
            defaultValue={currentUser?.todo}
            placeholder="Name"
            fullWidth
          />
          <TextField
            defaultValue={currentUser?.email}
            placeholder="Email"
            fullWidth
          />
          <TextField
            defaultValue={currentUser?.password}
            placeholder="Password"
            fullWidth
          />
          <Button onClick={handleSubmit}>Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditSubModal;
