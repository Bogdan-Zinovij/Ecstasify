import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';

const Lab2 = () => {
  return (
    <Box>
      <Link to={'/lab-2/tracks'}>
        <Button variant="contained">Tracks</Button>
      </Link>
      <Link to={'/lab-2/users'}>
        <Button variant="contained">Users</Button>
      </Link>
      <Link to={'/lab-2/subs'}>
        <Button variant="contained">Subs</Button>
      </Link>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Lab2;
