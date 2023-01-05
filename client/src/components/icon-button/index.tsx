import { IconButton, IconButtonProps, Tooltip } from '@mui/material';
import React from 'react';

interface IIconButtonProps {
  tooltipText?: string;
  IconButtonProps?: IconButtonProps;
  icon: React.ReactNode;
}

const CustomIconButton = ({
  icon,
  tooltipText,
  IconButtonProps,
}: IIconButtonProps) => {
  return (
    <Tooltip title={tooltipText} placement="top">
      <IconButton {...IconButtonProps}>{icon}</IconButton>
    </Tooltip>
  );
};

export default CustomIconButton;
