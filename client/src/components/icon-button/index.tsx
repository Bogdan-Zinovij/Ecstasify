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
      <span>
        <IconButton {...IconButtonProps}>{icon}</IconButton>
      </span>
    </Tooltip>
  );
};

export default CustomIconButton;
