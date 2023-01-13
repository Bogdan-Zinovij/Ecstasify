import { RootStoreContext } from '@/stores';
import { useContext } from 'react';

export const useStores = () => useContext(RootStoreContext);
