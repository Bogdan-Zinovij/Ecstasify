import { useEffect, useState } from 'react';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import EditTrackModal from './EditTrackModal';
import CreateTrackModal from './CreateTrackModal';

const baseUrl = '/api/v1/tracks';

const Tracks = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(baseUrl);
      const data = await resp.json();
      console.log(data);
      setItems(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTrack = async (id) => {
    // req to delete
    const resp = await fetch(baseUrl + `/${id}`, {
      method: 'DELETE',
    });

    fetchData();
  };

  const handleUpdateTrack = async (id, data) => {
    // req to update
    const resp = await fetch(baseUrl + `/${id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(data),
    });

    fetchData();
  };

  const handleCreateTrack = async (data) => {
    // req to create
    const resp = await fetch(baseUrl, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    setCreateModalOpen(false);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <EditTrackModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
        }}
        onSubmit={(data) => {
          handleUpdateTrack(currentUser.id, data);
        }}
        currentUser={currentUser}
      />
      <CreateTrackModal
        open={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
        }}
        onSubmit={(data) => {
          handleCreateTrack(data);
        }}
        currentUser={currentUser}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>Tracks</Typography>
        <Button
          onClick={() => {
            setCreateModalOpen(true);
          }}
          variant="contained"
        >
          Add
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {items.map((item, i) => {
          return (
            <Paper
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Link
                style={{ textDecoration: 'none', width: '100%' }}
                to={`/lab-2/tracks/${item.id}`}
              >
                <ul key={i}>
                  {Object.entries(item).map(([key, value], i) => {
                    if (key === 'id') return null;
                    return (
                      <li key={i}>
                        {key}: {value.toString()}
                      </li>
                    );
                  })}
                </ul>
              </Link>
              <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                <Button
                  onClick={() => {
                    setCurrentUser(item);
                    setEditModalOpen(true);
                  }}
                  variant="contained"
                >
                  ✏
                </Button>
                <Button
                  onClick={() => {
                    handleDeleteTrack(item.id);
                  }}
                  variant="contained"
                >
                  ⛔
                </Button>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </div>
  );
};

export default Tracks;
