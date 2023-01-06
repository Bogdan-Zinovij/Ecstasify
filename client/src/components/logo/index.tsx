import { Typography, Stack } from '@mui/material';
import { Equalizer } from '@mui/icons-material';

const Logo = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Equalizer htmlColor="#fff" />
      <Typography
        variant="h4"
        color="common.white"
        align="center"
        sx={{ mb: '10px' }}
      >
        Ecstasify
      </Typography>
    </Stack>
  );
};

export default Logo;
