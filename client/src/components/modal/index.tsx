import { Modal as MuiModal, Stack, Button, Box } from '@mui/material';
import React from 'react';
import SectionHeader from '../section-header';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
  okProps?: {
    text?: string;
    onClick?: () => void;
    loading?: boolean;
  };
  cancelProps?: {
    onClick?: () => void;
  };
};

const Modal = ({
  open,
  onClose,
  children,
  description,
  title,
  okProps = { text: 'Ok' },
  cancelProps,
}: ModalProps) => {
  return (
    <MuiModal open={open} onClose={onClose} keepMounted={false}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#fff',
          boxShadow: 24,
          p: 3,
          borderRadius: '8px',
        }}
      >
        {title ? (
          <SectionHeader
            title={title}
            description={description}
            titleProps={{ variant: 'h6' }}
            descriptionProps={{ variant: 'body2' }}
          />
        ) : null}
        <Stack spacing={2}>
          {children}
          <Stack direction="row" justifyContent="end" spacing={2}>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              onClick={okProps.onClick}
            >
              {okProps.loading ? 'loading' : okProps.text}
            </Button>
            <Button onClick={cancelProps?.onClick || onClose}>Cancel</Button>
          </Stack>
        </Stack>
      </Box>
    </MuiModal>
  );
};

export default Modal;
