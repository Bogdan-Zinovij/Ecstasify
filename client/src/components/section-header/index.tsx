import { Box, Typography, TypographyVariant } from '@mui/material';
import React from 'react';
import * as s from './styles';

type SectionHeaderProps = {
  title: string;
  description?: string;
  extra?: React.ReactNode;
  titleProps?: {
    variant?: TypographyVariant;
  };
  descriptionProps?: {
    variant?: TypographyVariant;
  };
};

const SectionHeader = ({
  title,
  description,
  extra,
  titleProps = { variant: 'h5' },
  descriptionProps,
}: SectionHeaderProps) => {
  return (
    <Box sx={s.sectionHeaderWrapper}>
      <Box>
        <Typography variant={titleProps.variant} fontWeight={600}>
          {title}
        </Typography>
        <Typography variant={descriptionProps?.variant} color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Box>{extra}</Box>
    </Box>
  );
};

export default SectionHeader;
