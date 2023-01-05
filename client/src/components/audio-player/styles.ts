import { Styles } from '@/types/styles';

export const playerWrapper: Styles = {
  backgroundColor: '#fff',
  height: '92px',
  display: 'flex',
  padding: '10px 15px',
  justifyContent: 'space-between',
  boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
};

export const trackCard: Styles = {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  gap: '15px',
  borderRadius: 0,
};

export const trackImg: Styles = {
  width: '55px',
  height: '55px',
};

export const controlsWrapper: Styles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  flex: 1,
  alignItems: 'center',
};

export const skipButton: Styles = {
  color: (theme) => theme.palette.text.secondary,
};

export const progressWrapper: Styles = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '10px',
};

export const timelineTime: Styles = {
  fontSize: '12px',
  minWidth: '40px',
};

export const timelineProgress: Styles = {
  flex: 1,
};

export const expandButton: Styles = {
  alignSelf: 'center',
};
