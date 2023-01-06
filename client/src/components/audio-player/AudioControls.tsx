import { Box, CircularProgress, Slider } from '@mui/material';
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
import CustomIconButton from '../icon-button';

const { PlaybackTime } = s;

const minTwoDigits = (n: number) => {
  return (n < 10 ? '0' : '') + n;
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

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
    attachAudioListeners,
    removeAudioListeners,
  } = useStore('audioPlayerStore');

  const [displayCurrentTime, setDisplayCurrentTime] = useState(0);
  const [seeking, setSeeking] = useState(false);

  useEffect(() => {
    attachAudioListeners();

    return () => {
      removeAudioListeners();
    };
  }, []);

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
        <CustomIconButton
          IconButtonProps={{
            sx: s.skipButton,
            color: 'primary',
            disabled: !hasLoaded,
          }}
          tooltipText="Previous"
          icon={<SkipPrevious fontSize="inherit" />}
        />
        <CustomIconButton
          tooltipText={isPlaying ? 'Pause' : 'Play'}
          IconButtonProps={{
            disabled: !hasLoaded,
            onClick: handleToggleAudio,
            color: 'primary',
            sx: {
              padding: '6px',
              position: 'relative',
            },
          }}
          icon={
            <>
              {!hasLoaded && (
                <CircularProgress size="50px" sx={{ position: 'absolute' }} />
              )}
              {isPlaying && hasLoaded ? (
                <PauseCircle sx={{ fontSize: '40px' }} />
              ) : (
                <PlayCircleFilledWhite sx={{ fontSize: '40px' }} />
              )}
            </>
          }
        />
        <CustomIconButton
          IconButtonProps={{ sx: s.skipButton, disabled: !hasLoaded }}
          tooltipText="Next"
          icon={<SkipNext />}
        />
      </Box>
      <Box sx={s.progressWrapper}>
        <PlaybackTime align="right">{formattedAudioCurrentTime}</PlaybackTime>
        <Slider
          disabled={!hasLoaded}
          size="small"
          sx={s.slider}
          value={displayCurrentTime}
          max={hasLoaded ? getAudioDuration() : 0}
          onChangeCommitted={(_, value) => {
            setSeeking(false);
            skipTime(value as number);
          }}
          onChange={(_, value) => {
            setSeeking(true);
            setDisplayCurrentTime(value as number);
          }}
        />
        <PlaybackTime align="left">{formattedAudioDuration}</PlaybackTime>
      </Box>
    </Box>
  );
};

export default observer(Controls);
