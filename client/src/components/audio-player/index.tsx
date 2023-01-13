import { Box, IconButton, Tooltip } from '@mui/material';
import * as s from './styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import PlaybackControls from './PlaybackControls';
import TrackPreview from './TrackPreview';

const AudioPlayer = () => {
  return (
    <Box sx={s.playerWrapper}>
      <TrackPreview />
      <PlaybackControls />
      <Box sx={s.expandButtonWrapper}>
        <Tooltip title="Expand">
          <IconButton sx={s.expandButton}>
            <KeyboardArrowUp />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default AudioPlayer;
