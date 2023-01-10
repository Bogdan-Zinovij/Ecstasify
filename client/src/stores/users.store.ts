import { sortByCreatedDate } from '@/helpers';
import { User } from '@/models/user';
import { RootService } from '@/services';
import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root.store';

export class UsersStore {
  private rootStore?: RootStore;
  private rootService: RootService;

  // data
  users: User[] = [];
  currentUser: User | null = null;
  user: User = {} as User;

  // loading states
  createUserLoading = false;
  getAllUsersLoading = false;
  getUserLoading = false;

  constructor(rootServise: RootService, rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootServise;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getUser(id: string) {
    this.getUserLoading = true;
    const { getUser } = this.rootService.usersService;
    const user = await getUser(id);
    console.log({ user });
    this.getUserLoading = false;
  }

  setUser(user: User) {
    this.user = user;
  }

  async getAllUsers() {
    runInAction(() => {
      this.getAllUsersLoading = true;
    });

    try {
      const { getAllUsers } = this.rootService.usersService;
      const data = await getAllUsers();

      if (data) {
        runInAction(() => {
          this.users = sortByCreatedDate(data);
        });
      }
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.getAllUsersLoading = false;
    });
  }

  async createUser(user: User) {
    runInAction(() => {
      this.createUserLoading = true;
    });

    try {
      const { createUser } = this.rootService.usersService;
      await createUser(user);
      this.getAllUsers();
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.createUserLoading = false;
    });
  }

  async deleteUser(user: User) {
    runInAction(() => {
      this.createUserLoading = true;
    });

    try {
      const { deleteUser } = this.rootService.usersService;
      const { id: userId } = user;
      await deleteUser(userId);
      this.getAllUsers();
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.createUserLoading = false;
    });
  }

  async updateUser(userId: User['id'], updatedUserData: User) {
    runInAction(() => {
      this.createUserLoading = true;
    });

    try {
      const { updateUser } = this.rootService.usersService;
      await updateUser(userId, updatedUserData);
      this.getAllUsers();
    } catch (err) {
      console.log(err);
    }

    runInAction(() => {
      this.createUserLoading = false;
    });
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
