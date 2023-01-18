import { User } from '@/models/user';
import { RootService } from '@/services';
import { SignInRequest, SignUpRequest } from '@/services/users.service';
import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root.store';
import { makePersistable } from 'mobx-persist-store';

type Auth = {
  refreshToken: string;
  accessToken: string;
};

export class AuthStore {
  private rootStore: RootStore;
  private rootService: RootService;

  auth: Auth = {} as Auth;

  signUpLoading = false;
  signInLoading = false;
  signOutLoading = false;

  constructor(rootService: RootService, rootStore: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootService;

    makeAutoObservable(this, {}, { autoBind: true });

    makePersistable(this, {
      name: 'AuthStore',
      properties: ['auth'],
      storage: window.localStorage,
    });
  }

  get isAuthenticated() {
    return !!this.auth.accessToken;
  }

  setAuth(auth: Auth) {
    this.auth = auth;
  }

  async signUp(data: SignUpRequest) {
    runInAction(() => {
      this.signUpLoading = true;
    });

    const { signUp } = this.rootService.usersService;
    const res = await signUp(data);

    if (res) {
      this.setAuth({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });

      const { setCurrentUser } = this.rootStore.profileStore;
      setCurrentUser(res.user);
    }

    runInAction(() => {
      this.signUpLoading = false;
    });
  }

  async signIn(data: SignInRequest) {
    runInAction(() => {
      this.signInLoading = true;
    });

    const { signIn } = this.rootService.usersService;
    const res = await signIn(data);

    if (res) {
      this.setAuth({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });

      const { setCurrentUser } = this.rootStore.profileStore;
      setCurrentUser(res.user);
    }

    runInAction(() => {
      this.signInLoading = false;
    });
  }

  async signOut() {
    runInAction(() => {
      this.signOutLoading = true;
    });

    const { signOut } = this.rootService.usersService;
    const res = await signOut();

    if (res) {
      this.setAuth({} as Auth);

      const { setCurrentUser } = this.rootStore.profileStore;
      setCurrentUser({} as User);
    }

    runInAction(() => {
      this.signOutLoading = false;
    });
  }

  async refreshAuth() {
    const { refreshAuth } = this.rootService.usersService;
    const res = await refreshAuth();

    if (res) {
      this.setAuth({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });

      const { setCurrentUser } = this.rootStore.profileStore;
      setCurrentUser(res.user);

      return res.accessToken;
    } else {
      this.signOut();
    }
  }
}
