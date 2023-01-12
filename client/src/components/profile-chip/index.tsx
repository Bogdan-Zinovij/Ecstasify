import { useStores } from '@/hooks';
import { Avatar, Chip, ChipProps, Menu, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import * as s from './styles';

const ProfileChip = () => {
  const {
    authStore: { signOut },
    profileStore: { currentUser, isAdmin },
  } = useStores();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>();

  const handleChipClick: ChipProps['onClick'] = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Chip
        sx={s.chip}
        avatar={<Avatar sx={{ width: '25px', height: '25px' }} />}
        label={`${currentUser?.name} ${isAdmin ? '(Admin)' : ''}`}
        onClick={handleChipClick}
      />
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={s.menu}
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={signOut}>
          <LogoutIcon /> Sign Out
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default observer(ProfileChip);