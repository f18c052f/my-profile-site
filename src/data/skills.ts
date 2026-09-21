import type { SkillIconName } from '../assets/icons';

export type Technology = { name: string; icon: SkillIconName };

/**
 * 代表的に使う技術だけを並べる。
 *
 * 言語やフレームワークは入れ替わりが早く、網羅すると陳腐化も更新の手間も
 * 大きくなるため、「何を作れるか」は profile.skills.domains 側で表現し、
 * ここは少数に絞っている。
 *
 * 変更したら `pnpm icons:build` を実行してアイコンを取り込み直すこと。
 */
export const technologies: Technology[] = [
  { name: 'Python', icon: 'python-plain' },
  { name: 'TypeScript', icon: 'typescript-plain' },
  { name: 'React / React Native', icon: 'react-original' },
  { name: 'C# / ASP.NET Core', icon: 'csharp-plain' },
  { name: 'Unity', icon: 'unity-plain' },
  { name: 'Google Cloud', icon: 'googlecloud-plain' },
];
