import { RootService } from '@/services';
import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root.store';
import { Track } from '@/models/track';
import { sortByCreatedDate } from '@/helpers';

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

    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getAllTracks() {
    runInAction(() => {
      this.getAllTracksLoading = true;
    });

    try {
      const { getAllTracks } = this.rootService.tracksService;
      const { data } = await getAllTracks();

      runInAction(() => {
        this.tracks = sortByCreatedDate(data);
      });
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.getAllTracksLoading = false;
    });
  }

  async createTrack(track: Track) {
    runInAction(() => {
      this.createTrackLoading = true;
    });

    try {
      const { createTrack } = this.rootService.tracksService;
      await createTrack({ ...track, author: track.author.id });
      this.getAllTracks();
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.createTrackLoading = false;
    });
  }

  async deleteTrack(user: Track) {
    runInAction(() => {
      this.createTrackLoading = true;
    });

    try {
      const { deleteTrack } = this.rootService.tracksService;
      const { id: trackId } = user;
      await deleteTrack(trackId);
      this.getAllTracks();
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.createTrackLoading = false;
    });
  }

  async updateTrack(trackId: Track['id'], updatedTrackData: Track) {
    runInAction(() => {
      this.createTrackLoading = true;
    });

    try {
      const { updateTrack } = this.rootService.tracksService;
      await updateTrack(trackId, {
        ...updatedTrackData,
        author: updatedTrackData.author.id,
      });
      this.getAllTracks();
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.createTrackLoading = false;
    });
  }

  resetTracks() {
    this.tracks = [];
  }

  resetCurrentTrack() {
    this.currentTrack = null;
  }

  setCurrentTrack(track: Track) {
    this.currentTrack = track;
  }
}
