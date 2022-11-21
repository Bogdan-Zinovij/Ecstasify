import SectionHeader from '@/components/section-header';
import { Box, IconButton, LinearProgress, Tooltip } from '@mui/material';
import { Add } from '@mui/icons-material';
import DataTable from '@/components/data-table';
import { User } from '@/models/user';
import { IColumn } from '@/components/data-table/interface';
import UserForm from './components/user-form';
import { useModal, useStore } from '@/hooks';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const cols: IColumn<User>[] = [
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Password',
    key: 'password',
    dataIndex: 'password',
  },
];

const UsersPage = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const { getAllUsers, users, getAllUsersLoading, resetUsers } =
    useStore('usersStore');

  useEffect(() => {
    getAllUsers();

    return () => {
      resetUsers();
    };
  }, []);

  const handleDelete = (row: User) => {
    console.log('delete', row);
  };

  const handleEdit = (row: User) => {
    console.log('edit', row);
  };

  return (
    <>
      {getAllUsersLoading ? (
        <LinearProgress
          sx={{ position: 'absolute', top: 0, width: '100%', left: 0 }}
        />
      ) : null}
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SectionHeader
          title="Users"
          description="List of registered users. You can manage them from here."
          extra={
            <Tooltip title="Add new user">
              <IconButton onClick={openModal} color="secondary" size="large">
                <Add fontSize="medium" />
              </IconButton>
            </Tooltip>
          }
        />
        {users && users.length > 0 ? (
          <DataTable<User>
            dataSource={users}
            columns={cols}
            rowKey="id"
            onRow={{ onDelete: handleDelete, onEdit: handleEdit }}
          />
        ) : null}
      </Box>
      <UserForm open={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default observer(UsersPage);
