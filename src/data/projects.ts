import { animations } from '../assets/images/generated/manifest';
import type { ja } from '../i18n/locales/ja';

/** 個人開発の id は i18n の profile.projects.items のキーと一致している必要がある */
export type ProjectId = keyof typeof ja.profile.projects.items;

export type ProjectLink = { kind: 'github' | 'youtube'; url: string };

/**
 * 表示順。デモの GIF は assets-src/ に `<id>.gif` で置いて
 * `pnpm images:build` を実行する。技術名は言語で変わらないのでここに持つ。
 */
export const projects = [
  {
    id: 'hikikomori',
    animation: animations.hikikomori,
    technologies: ['ESP32', 'C++', 'Servo'],
    links: [
      { kind: 'github', url: 'https://github.com/f18c052f/self-automated_hikikomori' },
      { kind: 'youtube', url: 'https://youtu.be/gk-dLM3qwz0' },
    ],
  },
  {
    id: 'smartled',
    animation: animations.smartled,
    technologies: ['ESP32', 'WLED', 'Alexa', 'Gemini API', 'AWS', 'TypeScript'],
    links: [{ kind: 'github', url: 'https://github.com/f18c052f/SmartLED' }],
  },
] satisfies {
  id: ProjectId;
  animation: (typeof animations)[keyof typeof animations];
  technologies: string[];
  links: ProjectLink[];
}[];
