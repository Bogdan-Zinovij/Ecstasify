import { Styles } from '@/types/styles';

export const tableHead: Styles = {
  background: ({ gradients }) => gradients.main,
  position: 'sticky',
  top: 0,
  zIndex: 1,
};

export const tableCell: Styles = {
  color: '#fff',
  background: 'none',
};
