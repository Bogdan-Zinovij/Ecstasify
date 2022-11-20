import SectionHeader from '@/components/section-header';
import { Box, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';
import DataTable from '@/components/data-table';
import { User } from '@/models/user';
import { IColumn } from '@/components/data-table/interface';
import UserForm from './components/user-form';
import { useModal } from '@/hooks';

const createData = (
  name: string,
  id: number,
  email: string,
  password: string
) => {
  return { name, id, email, password };
};

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

const rows: User[] = [
  createData('Artem', 1, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 2, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 3, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 4, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 5, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 6, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 7, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 8, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 9, 'artom.matyushenko@gmail.com', '12345678'),
  createData('Artem', 10, 'artom.matyushenko@gmail.com', '12345678'),
];

const UsersPage = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  const handleDelete = (row: User) => {
    console.log('delete', row);
  };

  const handleEdit = (row: User) => {
    console.log('edit', row);
  };

  return (
    <>
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <SectionHeader
          title="Users"
          description="List of registered users. You can manage them from here."
          extra={
            <IconButton onClick={openModal} color="secondary" size="large">
              <Add fontSize="medium" />
            </IconButton>
          }
        />
        <DataTable<User>
          dataSource={rows}
          columns={cols}
          rowKey="id"
          onRow={{ onDelete: handleDelete, onEdit: handleEdit }}
        />
      </Box>
      <UserForm open={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default UsersPage;
