import { useEffect, useState } from 'react';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import EditSubModal from './EditSubModal';
import CreateSubModal from './CreateSubModal';

const Subs = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `http://127.0.0.1:80/api/v1/subscriptions/subscription-plans`
      );
      const data = await resp.json();
      console.log(data);
      setItems(data.todos.slice(0, 10));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSub = async () => {
    // req to delete
    const resp = await fetch(
      `http://127.0.0.1:80/api/v1/subscriptions/subscription-plans`,
      {
        method: 'DELETE',
      }
    );

    fetchData();
  };

  const handleUpdateSub = async (data) => {
    // req to update
    const resp = await fetch(
      `http://127.0.0.1:80/api/v1/subscriptions/subscription-plans`,
      {
        method: 'PATCH',
      }
    );

    fetchData();
  };

  const handleCreateSub = async (data) => {
    // req to update
    const resp = await fetch(
      `http://127.0.0.1:80/api/v1/subscriptions/subscription-plans`,
      {
        method: 'PATCH',
      }
    );
    setCreateModalOpen(false);

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <EditSubModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
        }}
        onSubmit={handleUpdateSub}
        currentUser={currentUser}
      />
      <CreateSubModal
        open={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
        }}
        onSubmit={handleCreateSub}
        currentUser={currentUser}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>Subs</Typography>
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
                to={`/lab-2/subs/${item.userId}`}
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
                <Button onClick={handleDeleteSub} variant="contained">
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

export default Subs;
