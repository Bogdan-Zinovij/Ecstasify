import { Box, Paper, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AudioPlayer from '../audio-player';
import Sider from '../sider';
import Header from '../header';
import * as s from './styles';

const Layout = () => {
  return (
    <Box sx={s.layout}>
      <Stack flexDirection="row" flex="1" height={0}>
        <Box sx={s.siderWrapper}>
          <Sider />
        </Box>
        <Paper sx={s.mainWrapper}>
          <Header />
          <Box sx={s.content}>
            <Outlet />
          </Box>
        </Paper>
      </Stack>
      <Box sx={s.audioPlayerWrapper}>
        <AudioPlayer />
      </Box>
    </Box>
  );
};

export default Layout;
