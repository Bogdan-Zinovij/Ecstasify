import { Box, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

const Layout = () => {
  return (
    <Box sx={S.layout}>
      <Box sx={S.siderWrapper}>Sidebar</Box>
      <Paper sx={S.mainWrapper}>
        <Outlet />
      </Paper>
    </Box>
  );
};

export default Layout;
