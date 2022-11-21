import { User } from '@/models/user';
import { RootService } from '@/services';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export class UsersStore {
  private rootStore?: RootStore;
  private rootService: RootService;

  // data
  users: User[] = [];

  // loading states
  createUserLoading = false;
  getAllUsersLoading = false;

  constructor(rootServise: RootService, rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootServise;

    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async getAllUsers() {
    try {
      this.getAllUsersLoading = true;
      const { getAllUsers } = this.rootService.usersService;
      const { data } = await getAllUsers();

      this.users = data;
    } catch (err) {
      console.log(err);
    }

    this.getAllUsersLoading = false;
  }

  resetUsers() {
    this.users = [];
  }

  async createUser(user: User) {
    try {
      this.createUserLoading = true;
      const { createUser } = this.rootService.usersService;
      const { data: newUser } = await createUser(user);

      this.users.unshift(newUser);
    } catch (err) {
      console.log(err);
    }

    this.createUserLoading = false;
  }

  updateUser(userId: string, updatedUser: User) {
    console.log('users', userId, updatedUser);
  }
}
