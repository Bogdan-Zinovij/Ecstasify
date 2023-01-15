import { AppBar, Toolbar } from '@mui/material';
import PageNavigationControls from '../page-navigation-controls';
import ProfileChip from '../profile-chip';
import * as s from './styles';

const Header = () => {
  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar sx={s.toolbar}>
        <PageNavigationControls />
        <ProfileChip />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
