import { useEffect, useState } from 'react';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import EditUserModal from '../components/EditUserModal';
import CreateUserModal from './CreateUserModal';

const Users = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`http://127.0.0.1:80/api/v1/users`);
      const data = await resp.json();
      console.log(data);
      setItems([]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    // req to delete
    const resp = await fetch(`http://127.0.0.1:80/api/v1/users`, {
      method: 'DELETE',
    });

    fetchData();
  };

  const handleUpdateUser = async (data) => {
    // req to update
    const resp = await fetch(`http://127.0.0.1:80/api/v1/users`, {
      method: 'PATCH',
    });

    fetchData();
  };

  const handleCreateUser = async (data) => {
    // req to update
    const resp = await fetch(`http://127.0.0.1:8080/api/v1/users`, {
      method: 'CREATE',
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
      <EditUserModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
        }}
        onSubmit={handleUpdateUser}
        currentUser={currentUser}
      />
      <CreateUserModal
        open={createModalOpen}
        onClose={() => {
          setCreateModalOpen(false);
        }}
        onSubmit={handleCreateUser}
        currentUser={currentUser}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>Users</Typography>
        <Button
          variant="contained"
          onClick={() => {
            setCreateModalOpen(true);
          }}
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
                to={`/lab-2/users/${item.userId}`}
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
                <Button onClick={handleDeleteUser} variant="contained">
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

export default Users;
