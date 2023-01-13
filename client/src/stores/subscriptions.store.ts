import { Subscription } from '@/models/subscription';
import { RootService } from '@/services';
import { RootStore } from './root.store';
import { makeAutoObservable } from 'mobx';

const subsMock: Subscription[] = [
  {
    id: '1d78c82f-86b3-411e-982b-847464f77179',
    name: 'Free',
    price: '0.00',
    createdAt: '2023-01-12T17:25:31.862Z',
    updatedAt: '2023-01-12T17:25:31.862Z',
    subscriptionFeatures: [
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Over 80 million songs',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Podcasts and audiobooks',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Podcasts and audiobooks',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Travel abroad with your music',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
    ],
  },
  {
    id: 'e6b8ed34-1d73-4743-8136-1ce70174d974',
    name: 'Premium',
    price: '5.00',
    createdAt: '2023-01-12T17:25:31.862Z',
    updatedAt: '2023-01-12T17:25:31.862Z',
    subscriptionFeatures: [
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Over 80 million songs',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Podcasts and audiobooks',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Podcasts and audiobooks',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Travel abroad with your music',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
    ],
  },
  {
    id: '1c4ab7fe0-148b-4760-88a9-99a6d0c5acae',
    name: 'Premium +',
    price: '10.00',
    createdAt: '2023-01-12T17:25:31.862Z',
    updatedAt: '2023-01-12T17:25:31.862Z',
    subscriptionFeatures: [
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Over 80 million songs',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Podcasts and audiobooks',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Podcasts and audiobooks',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
      {
        id: '13639789-32bd-4c72-8c44-3bb3686cd68e',
        value: '1',
        createdAt: '2023-01-12T17:37:43.030Z',
        updatedAt: '2023-01-12T17:37:43.030Z',
        feature: {
          id: '20dfd374-dfe6-417d-ba31-124ecd4f0e4d',
          name: 'Travel abroad with your music',
          createdAt: '2023-01-12T17:37:30.375Z',
          updatedAt: '2023-01-12T17:37:30.375Z',
        },
      },
    ],
  },
];

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
    this.getSubscriptionsLoading = true;

    const { getAllSubscriptions } = this.rootService.subscriptionsService;
    const subscriptions = await getAllSubscriptions();

    if (subscriptions) {
      this.subscriptions = subscriptions;
    } else {
      this.subscriptions = subsMock;
    }

    this.getSubscriptionsLoading = false;
  }
}
