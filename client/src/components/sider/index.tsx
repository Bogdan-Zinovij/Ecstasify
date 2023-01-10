import { Routes } from '@/router/routes';
import {
  LibraryMusic,
  Group,
  CardGiftcard,
  AccountCircle,
} from '@mui/icons-material';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import Logo from '../logo';
import { NavLink } from './styles';
import * as s from './styles';
import { useStore } from '@/hooks';

type MenuItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const Sider = () => {
  const { isAdmin } = useStore('profileStore');

  const getMenuItems = () => {
    let menuItems: MenuItem[] = [];

    if (isAdmin) {
      menuItems = [
        {
          label: 'Users',
          path: Routes.Users,
          icon: <Group />,
        },
        {
          label: 'Tracks',
          path: Routes.Tracks,
          icon: <LibraryMusic />,
        },
        {
          label: 'Subscriptions',
          path: Routes.Subscriptions,
          icon: <CardGiftcard />,
        },
        {
          label: 'Authors',
          path: Routes.Authors,
          icon: <AccountCircle />,
        },
      ];
    }

    return menuItems;
  };

  return (
    <Box>
      <Box sx={s.logoWrapper}>
        <Logo />
      </Box>
      <Divider />
      <List sx={s.list}>
        {getMenuItems().map(({ label, path, icon }) => (
          <ListItem key={path} disablePadding>
            <NavLink to={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sider;
