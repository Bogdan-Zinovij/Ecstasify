import { RootService } from '@/services';
import { UsersStore } from './users.store';

export class RootStore {
  private rootService = new RootService();

  usersStore = new UsersStore(this.rootService, this);
}

export const store = new RootStore();
