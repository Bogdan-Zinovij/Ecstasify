import { RootService } from '@/services';
import { SignInRequest, SignUpRequest } from '@/services/users.service';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';
import { makePersistable } from 'mobx-persist-store';
import { User } from '@/models/user';

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

  async signUp(data: SignUpRequest) {
    this.signUpLoading = true;

    const { signUp } = this.rootService.usersService;
    const res = await signUp(data);

    if (res) {
      this.setAuth({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });

      const { setUser } = this.rootStore.usersStore;
      setUser(res.user);
    }

    this.signUpLoading = false;
  }

  async signIn(data: SignInRequest) {
    this.signInLoading = true;

    const { signIn } = this.rootService.usersService;
    const res = await signIn(data);

    if (res) {
      this.setAuth({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
      });

      const { setUser } = this.rootStore.usersStore;
      setUser(res.user);
    }

    this.signInLoading = false;
  }

  async signOut() {
    this.signOutLoading = true;

    const { signOut } = this.rootService.usersService;
    const res = await signOut();

    if (res) {
      console.log({ res });
      this.setAuth({} as Auth);

      const { setUser } = this.rootStore.usersStore;
      setUser({} as User);
    }

    this.signOutLoading = false;
  }

  setAuth(auth: Auth) {
    this.auth = auth;
  }
}
