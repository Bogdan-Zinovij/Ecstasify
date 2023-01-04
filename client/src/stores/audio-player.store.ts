import { RootService } from '@/services';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './root.store';

export class AudioPlayerStore {
  // create parent class with this fields?
  private rootStore?: RootStore;
  private rootService: RootService;

  // pass audio src into constructor
  audio = new Audio('');

  currentTime = 0;

  isPlaying = false;
  hasEnded = false;

  constructor(rootServise: RootService, rootStore?: RootStore) {
    this.rootStore = rootStore;
    this.rootService = rootServise;

    this.audio.ontimeupdate = () => {
      this.updateCurrentTime(this.audio.currentTime);
    };

    makeAutoObservable(this, undefined, { autoBind: true });
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

  get duration() {
    return this.audio.duration;
  }

  updateCurrentTime(currentTime: number) {
    this.currentTime = currentTime;
  }
}
