import { IColumn } from '@/components/data-table/data-table.interface';
import { Track } from '@/models/track';
import { useStore } from '@/hooks';
import EntityDashboard from '@/components/entity-dashboard';
import TrackForm from './components/track-form';
import { observer } from 'mobx-react-lite';
import { Author } from '@/models/author';

const columns: IColumn<Track>[] = [
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
  },
  {
    title: 'Created At',
    key: 'createdAt',
    dataIndex: 'createdAt',
  },
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: 'Author name',
    key: 'author',
    dataIndex: 'author',
    render: (value: Author) => value.name,
  },
];

const TracksPage = () => {
  const {
    getAllTracks,
    tracks,
    getAllTracksLoading,
    resetTracks,
    deleteTrack,
    setCurrentTrack,
  } = useStore('tracksStore');

  return (
    <EntityDashboard<Track>
      columns={columns}
      dataSource={tracks}
      EntityForm={TrackForm}
      getAllRecords={getAllTracks}
      getAllRecordsLoading={getAllTracksLoading}
      onDeleteRecord={deleteTrack}
      onEditRecord={setCurrentTrack}
      resetRecords={resetTracks}
      rowKey="id"
      title="Tracks"
      description="List of all tracks. You can manage them from here."
      emptyMessage="No tracks to show yet."
    />
  );
};

export default observer(TracksPage);
