import { Styles } from '@/types/styles';
import { lighten } from '@mui/material';

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
  '&.Mui-disabled': {
    background: ({ palette }) => lighten(palette.primary.main, 0.8),
  },
  transition: 'background 0.2s ease',
};

export const controlsWrapper: Styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px 40px 40px 40px',
};

export const header: Styles = {
  background: ({ gradients }) => gradients.main,
  padding: '20px 0',
};
