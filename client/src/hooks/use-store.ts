import { store } from '@/stores/root.store';

export const useStore = <T extends keyof typeof store>(storeName: T) => {
  return store[storeName];
};
