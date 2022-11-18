import { Routes } from '@/router/routes';
import { LibraryMusic, Group, CardGiftcard } from '@mui/icons-material';
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

const Sider = () => {
  const items = [
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
  ];

  return (
    <Box>
      <Box sx={s.logoWrapper}>
        <Logo />
      </Box>
      <Divider />
      <List sx={s.list}>
        {items.map(({ label, path, icon }) => (
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
