import { Styles } from '@/types/styles';

export const authFormWrapper: Styles = {
  maxWidth: '350px',
  width: '100%',
  backgroundColor: ({ palette }) => palette.background.paper,
  borderRadius: '10px',
  overflow: 'hidden',
};

export const containedBtn: Styles = {
  background: ({ gradients }) => gradients.main,
  boxShadow: 'none',
};

export const controlsWrapper: Styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px 40px 40px 40px',
};
