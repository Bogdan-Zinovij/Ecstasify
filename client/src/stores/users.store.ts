import { User } from '@/models/user';
import { RootService } from '@/services';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export class UsersStore {
  private rootStore?: RootStore;
  private rootService: RootService;

  // data
  users: User[] = [];
  currentUser: User | null = null;

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

  async deleteUser(user: User) {
    try {
      this.createUserLoading = true;
      const { deleteUser } = this.rootService.usersService;
      const { id: userId } = user;
      const { data: deletedUser } = await deleteUser(userId);

      this.users = this.users.filter((user) => user.id !== deletedUser.id);
    } catch (err) {
      console.log(err);
    }

    this.createUserLoading = false;
  }

  updateUser(userId: string, updatedUserData: User) {
    console.log('users', userId, updatedUserData);
  }

  resetUsers() {
    this.users = [];
  }

  resetCurrentUser() {
    this.currentUser = null;
  }

  setCurrentUser(author: User) {
    this.currentUser = author;
  }
}
