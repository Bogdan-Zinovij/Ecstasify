import { Box, IconButton, LinearProgress, Tooltip } from '@mui/material';
import * as s from './styles';

import {
  PlayCircleFilledWhite,
  SkipPrevious,
  SkipNext,
  PauseCircle,
} from '@mui/icons-material';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';

const minTwoDigits = (n: number) => {
  return (n < 10 ? '0' : '') + n;
};

const formatAudioTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.ceil(((time / 60) % 1) * 60);

  return `${minTwoDigits(minutes)}:${minTwoDigits(seconds)}`;
};

const Controls = () => {
  const { audio, playAudio, pauseAudio, isPlaying, currentTime } =
    useStore('audioPlayerStore');

  const handlePlayAudioClick = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const trackDuration = formatAudioTime(audio.duration || 0);
  const trackCurrentTime = formatAudioTime(audio.currentTime);

  return (
    <Box sx={s.controlsWrapper}>
      <Box>
        <Tooltip title="Previous" placement="top">
          <IconButton sx={s.skipButton} color="primary">
            <SkipPrevious fontSize="inherit" />
          </IconButton>
        </Tooltip>
        <Tooltip title={isPlaying ? 'Pause' : 'Play'} placement="top">
          <IconButton
            color="primary"
            sx={{ padding: '6px' }}
            onClick={handlePlayAudioClick}
          >
            {isPlaying ? (
              <PauseCircle sx={{ fontSize: '40px' }} />
            ) : (
              <PlayCircleFilledWhite sx={{ fontSize: '40px' }} />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Next" placement="top">
          <IconButton sx={s.skipButton}>
            <SkipNext />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={s.progressWrapper}>
        <Box sx={s.timelineTime}>{trackCurrentTime}</Box>
        <LinearProgress
          variant="determinate"
          value={(currentTime * 100) / audio.duration || 0}
          sx={s.timelineProgress}
        />
        <Box sx={s.timelineTime}>{trackDuration}</Box>
      </Box>
    </Box>
  );
};

export default observer(Controls);
