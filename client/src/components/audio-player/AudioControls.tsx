import { Box, IconButton, LinearProgress, Tooltip } from '@mui/material';
import * as s from './styles';

import {
  PlayCircleFilledWhite,
  SkipPrevious,
  SkipNext,
} from '@mui/icons-material';

const Controls = () => {
  return (
    <Box sx={s.controlsWrapper}>
      <Box>
        <Tooltip title="Previous" placement="top">
          <IconButton sx={s.skipButton} color="primary">
            <SkipPrevious fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Play" placement="top">
          <IconButton color="primary" sx={{ padding: '6px' }}>
            <PlayCircleFilledWhite
              sx={{ fontSize: '40px' }}
              fontSize="inherit"
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next" placement="top">
          <IconButton sx={s.skipButton}>
            <SkipNext />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={s.progressWrapper}>
        <Box sx={s.timelineTime}>1:00</Box>
        <LinearProgress
          variant="determinate"
          value={33}
          sx={s.timelineProgress}
        />
        <Box sx={s.timelineTime}>3:00</Box>
      </Box>
    </Box>
  );
};

export default Controls;
