import { AppBar, Toolbar } from '@mui/material';
import PageNavigationControls from '../page-navigation-controls';
import ProfileChip from '../profile-chip';

const Header = () => {
  return (
    <AppBar color="transparent" position="static" elevation={0}>
      <Toolbar
        sx={{ padding: '10px 32px 0 32px', justifyContent: 'space-between' }}
      >
        <PageNavigationControls />
        <ProfileChip />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
