import { Modal as MuiModal, Stack, Button, Box } from '@mui/material';
import React from 'react';
import SectionHeader from '../section-header';
import * as s from './styles';

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
      <Box sx={s.modalWrapper}>
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
