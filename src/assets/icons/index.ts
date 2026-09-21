// このファイルは scripts/build-skill-icons.mjs が生成します。手で編集しないでください。
// 再生成: pnpm icons:build

import icon_csharp_plain from './csharp-plain.svg';
import icon_googlecloud_plain from './googlecloud-plain.svg';
import icon_python_plain from './python-plain.svg';
import icon_react_original from './react-original.svg';
import icon_typescript_plain from './typescript-plain.svg';
import icon_unity_plain from './unity-plain.svg';

export const skillIcons = {
  'csharp-plain': icon_csharp_plain,
  'googlecloud-plain': icon_googlecloud_plain,
  'python-plain': icon_python_plain,
  'react-original': icon_react_original,
  'typescript-plain': icon_typescript_plain,
  'unity-plain': icon_unity_plain,
} as const;

/** src/data/skills.ts の icon はこの union のいずれかでなければならない */
export type SkillIconName = keyof typeof skillIcons;
