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
