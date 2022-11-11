import { Styles } from '@/types/styles';

export const authFormWrapper: Styles = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '350px',
  gap: '20px',
  width: '100%',
  backgroundColor: (theme) => theme.palette.background.paper,
  padding: '40px',
  borderRadius: '10px',
};
