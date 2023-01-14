import { Styles } from '@/types/styles';

export const layout: Styles = {
  maxHeight: '100vh',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const mainWrapper: Styles = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 0,
  width: 0,
  flex: 1,
};

export const content: Styles = {
  padding: '18px 32px 32px 32px',
  flex: 1,
  height: 0,
  overflow: 'auto',
};

export const siderWrapper: Styles = {
  height: '100%',
  flex: '0 0 240px',
};

export const audioPlayerWrapper: Styles = {
  gridColumn: '1 / -1',
};
