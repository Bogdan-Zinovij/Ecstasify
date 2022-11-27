import { User } from '@/models/user';
import { IColumn } from '@/components/data-table/interface';
import UserForm from './components/user-form';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import EntityDashboard from '@/components/entity-dashboard';

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
];

const UsersPage = () => {
  const {
    getAllUsers,
    users,
    getAllUsersLoading,
    resetUsers,
    deleteUser,
    setCurrentUser,
  } = useStore('usersStore');

  return (
    <EntityDashboard<User>
      columns={cols}
      dataSource={users}
      EntityForm={UserForm}
      getAllRecords={getAllUsers}
      getAllRecordsLoading={getAllUsersLoading}
      onDeleteRecord={deleteUser}
      onEditRecord={setCurrentUser}
      resetRecords={resetUsers}
      rowKey="id"
      title="Users"
      description="List of registered users. You can manage them from here."
      emptyMessage="No users to show yet."
    />
  );
};

export default observer(UsersPage);
