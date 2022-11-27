import { Track } from '@/models/track';
import { HttpRequest } from '@/utils/request';
import BaseService from './base.service';

class TracksService extends BaseService {
  constructor(httpRequest: HttpRequest) {
    super(httpRequest);
  }

  getAllTracks = () => {
    return this.httpRequest.get<Track[]>('/tracks');
  };

  createTrack = (data: Track) => {
    return this.httpRequest.post<Track>('/tracks', data);
  };

  updateTrack = (trackId: Track['id'], data: Track) => {
    return this.httpRequest.patch<Track>(`/tracks/${trackId}`, data);
  };

  deleteTrack = (trackId: string) => {
    return this.httpRequest.delete<Track>(`/tracks/${trackId}`);
  };
}

export default TracksService;
