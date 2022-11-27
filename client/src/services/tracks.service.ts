import { Author } from '@/models/author';
import { Track } from '@/models/track';
import { HttpRequest } from '@/utils/request';
import BaseService from './base.service';

type TrackPayload = Omit<Track, 'author'> & { author: Author['id'] };

class TracksService extends BaseService {
  constructor(httpRequest: HttpRequest) {
    super(httpRequest);
  }

  getAllTracks = () => {
    return this.httpRequest.get<Track[]>('/tracks');
  };

  createTrack = (data: TrackPayload) => {
    return this.httpRequest.post<Track, TrackPayload>('/tracks', data);
  };

  updateTrack = (trackId: Track['id'], data: TrackPayload) => {
    return this.httpRequest.patch<Track, TrackPayload>(
      `/tracks/${trackId}`,
      data
    );
  };

  deleteTrack = (trackId: string) => {
    return this.httpRequest.delete<Track>(`/tracks/${trackId}`);
  };
}

export default TracksService;
