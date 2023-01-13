import { Author } from '@/models/author';
import { Track } from '@/models/track';
import BaseService from './base.service';

type TrackPayload = Omit<Track, 'author'> & { author: Author['id'] };

class TracksService extends BaseService {
  getAllTracks = () => {
    return this.httpRequest.get<Track[]>('/tracks');
  };

  createTrack = (data: TrackPayload) => {
    return this.httpRequest.post<Track>('/tracks', data);
  };

  updateTrack = (trackId: Track['id'], data: TrackPayload) => {
    return this.httpRequest.patch<Track>(`/tracks/${trackId}`, data);
  };

  deleteTrack = (trackId: string) => {
    return this.httpRequest.delete<Track>(`/tracks/${trackId}`);
  };
}

export default TracksService;
