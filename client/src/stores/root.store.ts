import { RootService } from '@/services';
import { AuthorsStore } from './authors.store';
import { UsersStore } from './users.store';

export class RootStore {
  private rootService = new RootService();

  usersStore = new UsersStore(this.rootService, this);
  authorsStore = new AuthorsStore(this.rootService, this);
}

export const store = new RootStore();
