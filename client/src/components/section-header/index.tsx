import { Box, Typography, TypographyVariant } from '@mui/material';
import React from 'react';

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
    <Box
      sx={{
        mb: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography
          variant={titleProps.variant}
          sx={{
            fontWeight: ({ typography }) => typography.fontWeightBold,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant={descriptionProps?.variant}
          sx={{ color: ({ palette }) => palette.text.secondary }}
        >
          {description}
        </Typography>
      </Box>
      <Box>{extra}</Box>
    </Box>
  );
};

export default SectionHeader;
