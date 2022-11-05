import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', gap: 10 }}>
      <Link to="/lab-1">
        <Button variant="contained">Lab1</Button>
      </Link>
      <Link to="/lab-2">
        <Button variant="contained">Lab 2</Button>
      </Link>
    </Box>
  );
};

export default Home;
