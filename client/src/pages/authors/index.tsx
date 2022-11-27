import { IColumn } from '@/components/data-table/interface';
import AuthorForm from './components/author-form';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import EntityDashboard from '@/components/entity-dashboard';
import { Author } from '@/models/author';

const cols: IColumn<Author>[] = [
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
];

const AuthorsPage = () => {
  const {
    getAllAuthors,
    getAllAuthorsLoading,
    authors,
    resetAuthors,
    deleteAuthor,
    setCurrentAuthor,
  } = useStore('authorsStore');

  return (
    <EntityDashboard<Author>
      columns={cols}
      dataSource={authors}
      EntityForm={AuthorForm}
      getAllRecords={getAllAuthors}
      resetRecords={resetAuthors}
      getAllRecordsLoading={getAllAuthorsLoading}
      onDeleteRecord={deleteAuthor}
      onEditRecord={setCurrentAuthor}
      rowKey="id"
      title="Authors"
      description="List of registered authors. You can manage them from here."
      emptyMessage="No authors to show yet."
    />
  );
};

export default observer(AuthorsPage);
