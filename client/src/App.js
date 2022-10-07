import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const PAGES = {
  Users: 'Users',
  Tracks: 'Tracks',
  Subscriptions: 'Subscriptions',
};

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async path => {
    try {
      setLoading(true);
      const resp = await fetch(`http://localhost:80/api/v1/${path}`);
      const data = await resp.json();
      console.log(data);
      setItems(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUsersBtnClick = () => {
    setCurrentPage(PAGES.Users);
    fetchData('users');
  };

  const handleTracksBtnClick = () => {
    setCurrentPage(PAGES.Tracks);
    fetchData('tracks');
  };

  const handleSubscriptionsBtnClick = () => {
    setCurrentPage(PAGES.Subscriptions);
    fetchData('subscriptions');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography sx={{ mb: 5 }} variant="h3">
        Ecstasify 🎵
      </Typography>
      <Grid sx={{ mb: 10 }} container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" onClick={handleUsersBtnClick}>
            Users
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleTracksBtnClick}>
            Tracks
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSubscriptionsBtnClick}>
            Subscriptions
          </Button>
        </Grid>
      </Grid>
      {loading && <CircularProgress />}
      {!loading && (
        <>
          <Typography sx={{ mb: 5 }}>{currentPage}</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '60%',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
            }}
          >
            {items.map((item, i) => {
              return (
                <ul key={i}>
                  {Object.entries(item).map(([key, value], i) => {
                    if (key === 'id') return null;
                    return (
                      <li key={i}>
                        {key}: {value}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default App;
