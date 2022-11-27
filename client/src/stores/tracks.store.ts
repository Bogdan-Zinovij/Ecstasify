import { RootService } from '@/services';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';
import { Track } from '@/models/track';

export class TracksStore {
  private rootStore?: RootStore;
  private rootService: RootService;

  // data
  tracks: Track[] = [];
  currentTrack: Track | null = null;

  // loading states
  createTrackLoading = false;
  getAllTracksLoading = false;

  constructor(rootServise: RootService, rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootServise;

    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async getAllTracks() {
    try {
      this.getAllTracksLoading = true;
      const { getAllTracks } = this.rootService.tracksService;
      const { data } = await getAllTracks();

      this.tracks = data;
    } catch (err) {
      console.log(err);
    }

    this.getAllTracksLoading = false;
  }

  async createTrack(track: Track) {
    try {
      this.createTrackLoading = true;
      const { createTrack } = this.rootService.tracksService;
      await createTrack(track);
      this.getAllTracks();
    } catch (err) {
      console.log(err);
    }

    this.createTrackLoading = false;
  }

  async deleteTrack(user: Track) {
    try {
      this.createTrackLoading = true;
      const { deleteTrack } = this.rootService.tracksService;
      const { id: trackId } = user;
      await deleteTrack(trackId);
      this.getAllTracks();
    } catch (err) {
      console.log(err);
    }

    this.createTrackLoading = false;
  }

  async updateUser(trackId: Track['id'], updatedTrackData: Track) {
    try {
      this.createTrackLoading = true;
      const { updateTrack } = this.rootService.tracksService;
      await updateTrack(trackId, updatedTrackData);
      this.getAllTracks();
    } catch (err) {
      console.log(err);
    }

    this.createTrackLoading = false;
  }

  resetUsers() {
    this.tracks = [];
  }

  resetCurrentUser() {
    this.currentTrack = null;
  }

  setCurrentUser(track: Track) {
    this.currentTrack = track;
  }
}
