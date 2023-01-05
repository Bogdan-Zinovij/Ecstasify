import {
  Box,
  CircularProgress,
  IconButton,
  Slider,
  Tooltip,
} from '@mui/material';
import * as s from './styles';

import {
  PlayCircleFilledWhite,
  SkipPrevious,
  SkipNext,
  PauseCircle,
} from '@mui/icons-material';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';

const minTwoDigits = (n: number) => {
  return (n < 10 ? '0' : '') + n;
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.ceil(((time / 60) % 1) * 60);

  return `${minTwoDigits(minutes)}:${minTwoDigits(seconds)}`;
};

const Controls = () => {
  const {
    playAudio,
    pauseAudio,
    isPlaying,
    currentTime,
    hasLoaded,
    skipTime,
    getAudioDuration,
  } = useStore('audioPlayerStore');

  const [displayCurrentTime, setDisplayCurrentTime] = useState(0);
  const [seeking, setSeeking] = useState(false);

  useEffect(() => {
    if (!seeking && currentTime !== displayCurrentTime) {
      setDisplayCurrentTime(currentTime);
    }
  }, [currentTime]);

  const handleToggleAudio = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying]);

  const formattedAudioDuration = formatTime(getAudioDuration());
  const formattedAudioCurrentTime = formatTime(displayCurrentTime);

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
            sx={{
              padding: '6px',
              position: 'relative',
            }}
            onClick={handleToggleAudio}
          >
            {!hasLoaded && (
              <CircularProgress size="50px" sx={{ position: 'absolute' }} />
            )}
            {isPlaying && hasLoaded ? (
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
        <Box sx={s.timelineTime}>{formattedAudioCurrentTime}</Box>
        <Slider
          size="small"
          onChangeCommitted={(_, value) => {
            setSeeking(false);
            skipTime(value as number);
          }}
          onChange={(_, value) => {
            setSeeking(true);
            setDisplayCurrentTime(value as number);
          }}
          sx={{
            '& .MuiSlider-track': {
              background: (theme) => theme.gradients.main,
              borderColor: 'transparent',
            },
            '.MuiSlider-thumb.Mui-active': {
              boxShadow: '0px 0px 0px 10px rgb(102 126 234 / 16%)',
            },
            padding: '8px 0',
          }}
          max={hasLoaded ? getAudioDuration() : 0}
          value={displayCurrentTime}
        />
        <Box sx={s.timelineTime}>{formattedAudioDuration}</Box>
      </Box>
    </Box>
  );
};

export default observer(Controls);
