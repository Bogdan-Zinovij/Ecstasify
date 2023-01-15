/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_HOST: string;
  readonly VITE_TEST_AUDIO_SRC: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
