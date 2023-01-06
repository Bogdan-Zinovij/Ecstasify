import { RootService } from '@/services';
import { makeAutoObservable, runInAction } from 'mobx';
import { RootStore } from './root.store';

export class AudioPlayerStore {
  // create parent class with this fields?
  private rootStore?: RootStore;
  private rootService: RootService;

  private audio: HTMLAudioElement = new Audio();

  private AUDIO_END_OFFSET = 1;

  private audioEventHandlers: {
    event: keyof HTMLMediaElementEventMap;
    handler: () => void;
  }[] = [
    { event: 'timeupdate', handler: this.syncAudioCurrentTime.bind(this) },
    { event: 'ended', handler: this.handleAudioEnded.bind(this) },
    { event: 'canplay', handler: this.handleAudioCanPlay.bind(this) },
  ];

  currentTime = 0;
  isPlaying = false;
  hasLoaded = false;

  constructor(rootServise: RootService, rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootServise;

    makeAutoObservable(this, undefined, { autoBind: true });
  }

  attachAudioListeners() {
    for (const { event, handler } of this.audioEventHandlers) {
      this.audio.addEventListener(event, handler);
    }
  }

  removeAudioListeners() {
    for (const { event, handler } of this.audioEventHandlers) {
      this.audio.removeEventListener(event, handler);
    }
  }

  handleAudioCanPlay() {
    runInAction(() => {
      this.hasLoaded = true;
    });
  }

  handleAudioEnded() {
    this.audio.currentTime = 0;
    this.setIsPlaying(false);
  }

  syncAudioCurrentTime() {
    runInAction(() => {
      this.currentTime = this.audio.currentTime;
    });
  }

  setIsPlaying(isPlaying: boolean) {
    this.isPlaying = isPlaying;
  }

  playAudio() {
    this.isPlaying = true;
    this.audio.play();
  }

  pauseAudio() {
    this.isPlaying = false;
    this.audio.pause();
  }

  setAudioSource(src: string) {
    this.audio.src = src;
  }

  getAudioDuration() {
    return this.audio.duration || 0;
  }

  getAudioCurrentTime() {
    return this.audio.currentTime;
  }

  skipTime(time: number) {
    if (time === this.getAudioDuration()) {
      // sometimes when trying to skip the audio exactly
      // till the end (set audio.currentTime = audio.duration) the duration gets
      // modifed a bit (increases for a 1s or so) - so this is workaround to avoid that
      this.audio.currentTime = this.getAudioDuration() - this.AUDIO_END_OFFSET;
    } else {
      this.audio.currentTime = time;
    }
  }
}
