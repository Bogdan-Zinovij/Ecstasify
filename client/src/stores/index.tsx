import React, { createContext } from 'react';
import { RootStore } from './root.store';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

type RootStoreProviderProps = {
  children: React.ReactNode;
  store: RootStore;
};

const RootStoreProvider = ({ children, store }: RootStoreProviderProps) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export default RootStoreProvider;
