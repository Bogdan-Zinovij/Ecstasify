import { RootService } from '@/services';
import errorHandler from '@/utils/errorHandler';
import { AudioPlayerStore } from './audio-player.store';
import { AuthorsStore } from './authors.store';
import { TracksStore } from './tracks.store';
import { UsersStore } from './users.store';

export class RootStore {
  private rootService = new RootService();
  errorHandler = errorHandler;

  usersStore = new UsersStore(this.rootService, this);
  authorsStore = new AuthorsStore(this.rootService, this);
  tracksStore = new TracksStore(this.rootService, this);
  audioPlayerStore = new AudioPlayerStore(this.rootService, this);
}

export const store = new RootStore();
