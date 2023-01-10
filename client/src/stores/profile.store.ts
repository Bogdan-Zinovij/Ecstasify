import { makePersistable } from 'mobx-persist-store';
import { User } from '@/models/user';
import { RootService } from '@/services';
import { RootStore } from './root.store';
import { makeAutoObservable } from 'mobx';
import { UserRoles } from '@/enums/user-role';

export class ProfileStore {
  private rootStore: RootStore;
  private rootService: RootService;

  currentUser: User = {} as User;

  constructor(rootService: RootService, rootStore: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootService;

    makeAutoObservable(this, {}, { autoBind: true });

    makePersistable(this, {
      name: 'ProfileStore',
      properties: ['currentUser'],
      storage: window.localStorage,
    });
  }

  get isAdmin() {
    return this.currentUser.role === UserRoles.Admin;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
