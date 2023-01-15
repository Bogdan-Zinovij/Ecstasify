import { Styles } from '@/types/styles';

export const modalWrapper: Styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: ({ palette }) => palette.background.paper,
  boxShadow: 24,
  p: 3,
  borderRadius: '8px',
};
