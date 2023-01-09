import { Box, Paper, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AudioPlayer from '../audio-player';
import Sider from '../sider';
import * as S from './styles';

const Layout = () => {
  return (
    <Box sx={S.layout}>
      <Stack flexDirection="row" flex="1" height={0}>
        <Box sx={S.siderWrapper}>
          <Sider />
        </Box>
        <Paper sx={S.mainWrapper}>
          <Outlet />
        </Paper>
      </Stack>
      <Box sx={S.audioPlayerWrapper}>
        <AudioPlayer />
      </Box>
    </Box>
  );
};

export default Layout;
