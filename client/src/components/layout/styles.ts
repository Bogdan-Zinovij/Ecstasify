import { Styles } from '@/types/styles';

export const sideBarWrapper: Styles = {};

export const layout: Styles = {
  height: '100%',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '240px 1fr',
  gridTemplateRows: '1fr',
};

export const mainWrapper: Styles = {
  padding: '32px',
  height: '100%',
};

export const siderWrapper: Styles = {
  height: '100%',
};

export const audioPlayerWrapper: Styles = {
  gridColumn: '1 / -1',
};
