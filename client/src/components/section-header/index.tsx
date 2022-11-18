import { Box, Typography } from '@mui/material';
import React from 'react';

type SectionHeaderProps = {
  title: string;
  description?: string;
  extra?: React.ReactNode;
};

const SectionHeader = ({ title, description, extra }: SectionHeaderProps) => {
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
          variant="h5"
          sx={{
            fontWeight: ({ typography }) => typography.fontWeightBold,
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: ({ palette }) => palette.text.secondary }}>
          {description}
        </Typography>
      </Box>
      <Box>{extra}</Box>
    </Box>
  );
};

export default SectionHeader;
