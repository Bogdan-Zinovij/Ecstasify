import { Styles } from '@/types/styles';
import { lighten } from '@mui/system';

export const tableHead: Styles = {
  background: ({ palette }) => lighten(palette.primary.main, 0.85),
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

export const tableCell: Styles = {
  color: ({ palette }) => palette.primary.main,
  background: 'none',
  whiteSpace: 'nowrap',
};

export const rowWrapper: Styles = {
  '&:last-child td, &:last-child th': {
    border: 0,
  },
};

export const rowCell: Styles = {
  whiteSpace: 'nowrap',
};
