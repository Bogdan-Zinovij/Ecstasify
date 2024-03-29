import { Box, CircularProgress, Slider } from '@mui/material';
import * as s from './styles';
import {
  PauseCircle,
  PlayCircleFilledWhite,
  SkipNext,
  SkipPrevious,
} from '@mui/icons-material';
import { useStore } from '@/hooks';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';
import CustomIconButton from '../icon-button';
import { formatPlaybackTime } from '@/helpers';

const { PlaybackTime } = s;

const PlaybackControls = () => {
  const {
    playAudio,
    pauseAudio,
    isPlaying,
    currentTime,
    hasError,
    hasLoaded,
    skipTime,
    getAudioDuration,
    attachAudioListeners,
    removeAudioListeners,
    setAudioSource,
  } = useStore('audioPlayerStore');

  const [displayCurrentTime, setDisplayCurrentTime] = useState(0);
  const [seeking, setSeeking] = useState(false);

  useEffect(() => {
    setAudioSource(import.meta.env.VITE_TEST_AUDIO_SRC);
    attachAudioListeners();

    return () => {
      removeAudioListeners();
      pauseAudio();
      setAudioSource('');
    };
  }, []);

  useEffect(() => {
    if (!seeking && currentTime !== displayCurrentTime) {
      setDisplayCurrentTime(currentTime);
    }
  }, [currentTime]);

  const handleTogglePlayback = useCallback(() => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }, [isPlaying]);

  const formattedAudioDuration = formatPlaybackTime(getAudioDuration());
  const formattedAudioCurrentTime = formatPlaybackTime(displayCurrentTime);

  const disabledControls = !hasLoaded || hasError;

  return (
    <Box sx={s.controlsWrapper}>
      <Box>
        <CustomIconButton
          IconButtonProps={{
            sx: s.skipButton,
            color: 'primary',
            disabled: disabledControls,
          }}
          tooltipText="Previous"
          icon={<SkipPrevious fontSize="inherit" />}
        />
        <CustomIconButton
          tooltipText={isPlaying ? 'Pause' : 'Play'}
          IconButtonProps={{
            disabled: disabledControls,
            onClick: handleTogglePlayback,
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
          IconButtonProps={{ sx: s.skipButton, disabled: disabledControls }}
          tooltipText="Next"
          icon={<SkipNext />}
        />
      </Box>
      <Box sx={s.progressWrapper}>
        <PlaybackTime align="right">{formattedAudioCurrentTime}</PlaybackTime>
        <Slider
          size="small"
          sx={s.slider}
          value={displayCurrentTime}
          disabled={disabledControls}
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

export default observer(PlaybackControls);
