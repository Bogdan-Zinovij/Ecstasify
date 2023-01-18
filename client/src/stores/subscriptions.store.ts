import { Subscription } from '@/models/subscription';
import { RootService } from '@/services';
import { RootStore } from './root.store';
import { makeAutoObservable, runInAction } from 'mobx';

export class SubscriptionsStore {
  private rootStore: RootStore;
  private rootService: RootService;

  subscriptions: Subscription[] | null = null;
  getSubscriptionsLoading = false;

  constructor(rootService: RootService, rootStore: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootService;

    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getSubscriptions() {
    runInAction(() => {
      this.getSubscriptionsLoading = true;
    });

    const { getAllSubscriptions } = this.rootService.subscriptionsService;
    const subscriptions = await getAllSubscriptions();

    if (subscriptions) {
      this.setSubscriptions(subscriptions);
    } else {
      this.setSubscriptions([]);
    }

    runInAction(() => {
      this.getSubscriptionsLoading = false;
    });
  }

  setSubscriptions(subscriptions: Subscription[]) {
    this.subscriptions = subscriptions;
  }
}
