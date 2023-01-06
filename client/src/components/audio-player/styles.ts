import { Styles } from '@/types/styles';
import { styled } from '@mui/material';

export const playerWrapper: Styles = {
  backgroundColor: '#fff',
  height: '92px',
  display: 'flex',
  padding: '10px 15px',
  boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
};

export const trackCard: Styles = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  borderRadius: 0,
  flex: 1,
};

export const trackImg: Styles = {
  width: '55px',
  height: '55px',
};

export const controlsWrapper: Styles = {
  display: 'flex',
  flexDirection: 'column',
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

export const PlaybackTime = styled('div')<{ align: 'left' | 'right' }>(
  ({ theme, align = 'left' }) => ({
    fontSize: '12px',
    minWidth: '40px',
    textAlign: align,
    color: theme.palette.text.secondary,
  })
);

export const timelineProgress: Styles = {
  flex: 1,
};

export const expandButtonWrapper: Styles = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

export const expandButton: Styles = {
  alignSelf: 'center',
};

export const slider: Styles = {
  '.MuiSlider-track': {
    background: (theme) => theme.gradients.main,
    borderColor: 'transparent',
  },
  '.MuiSlider-rail, .MuiSlider-track': {
    height: '4px',
  },
  '.MuiSlider-thumb': {
    opacity: 0,
  },
  '&:hover, &:active': {
    '.MuiSlider-thumb': {
      opacity: 1,
    },
  },
  '.MuiSlider-thumb.Mui-active': {
    boxShadow: '0px 0px 0px 10px rgb(102 126 234 / 16%)',
  },
  padding: '8px 0',
};
