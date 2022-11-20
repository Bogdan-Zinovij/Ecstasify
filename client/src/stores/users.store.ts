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

  constructor(rootServise: RootService, rootStore?: RootStore) {
    console.log(rootServise, rootStore);
    this.rootStore = rootStore;
    this.rootService = rootServise;

    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async getAllUsers() {
    try {
      const { getAllUsers } = this.rootService.usersService;
      const { data } = await getAllUsers();

      console.log('users', data);
    } catch (err) {
      console.log(err);
    }
  }

  async createUser(user: User) {
    try {
      this.createUserLoading = true;
      const { createUser } = this.rootService.usersService;
      const { data: newUser } = await createUser(user);
      this.users.unshift(newUser);
      console.log(newUser);
    } catch (err) {
      console.log(err);
    }

    this.createUserLoading = false;
  }

  deleteUser(userId: string) {
    console.log('users', userId);
  }

  updateUser(userId: string, updatedUser: User) {
    console.log('users', userId, updatedUser);
  }
}
