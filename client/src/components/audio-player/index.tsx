import { Box, IconButton, Tooltip } from '@mui/material';
import * as s from './styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import AudioControls from './AudioControls';
import TrackPreview from './TrackPreview';

const AudioPlayer = () => {
  return (
    <Box sx={s.playerWrapper}>
      <TrackPreview />
      <AudioControls />
      <Tooltip title="Expand">
        <IconButton sx={s.expandButton}>
          <KeyboardArrowUp />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AudioPlayer;
