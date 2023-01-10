import { RootService } from '@/services';
import { SignInRequest, SignUpRequest } from '@/services/users.service';
import { makeAutoObservable } from 'mobx';
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
  }

  async signIn(data: SignInRequest) {
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
  }

  setAuth(auth: Auth) {
    this.auth = auth;
  }
}
