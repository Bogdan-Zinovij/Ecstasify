import { Styles } from '@/types/styles';

export const sideBarWrapper: Styles = {};

export const layout: Styles = {
  maxHeight: '100vh',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const mainWrapper: Styles = {
  height: '100%',
  borderRadius: 0,
  width: 0,
  flex: 1,
};

export const content: Styles = {
  padding: '32px',
};

export const siderWrapper: Styles = {
  height: '100%',
  flex: '0 0 240px',
};

export const audioPlayerWrapper: Styles = {
  gridColumn: '1 / -1',
};
