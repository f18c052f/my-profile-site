import type { SkillIconName } from '../assets/icons';
import type { ja } from '../i18n/locales/ja';

export type SkillItem = { name: string; icon: SkillIconName };

/**
 * カテゴリ名は i18n の profile.skills.categories のキーと一致していなければならない。
 * 型で縛ることで、片方だけ変更したときにコンパイルエラーになる。
 */
export type SkillCategory = keyof typeof ja.profile.skills.categories;

export const skills = {
  'Programming Languages': [
    { name: 'Python', icon: 'python-plain' },
    { name: 'TypeScript', icon: 'typescript-plain' },
    { name: 'JavaScript', icon: 'javascript-plain' },
    { name: 'C#', icon: 'csharp-plain' },
    { name: 'C', icon: 'carbon-original' },
    { name: 'MATLAB', icon: 'matlab-plain' },
    { name: 'HTML', icon: 'html5-plain' },
    { name: 'CSS', icon: 'css3-plain' },
    { name: 'React/ReactNative', icon: 'react-original' },
    { name: 'Unity', icon: 'unity-plain' },
    { name: 'Linux', icon: 'linux-plain' },
    { name: 'ASP.NET Core', icon: 'dotnetcore-plain' },
  ],
  Tools: [
    { name: 'Git', icon: 'git-plain' },
    { name: 'GoogleCloud', icon: 'googlecloud-plain' },
    { name: 'WordPress', icon: 'wordpress-plain' },
    { name: 'AndroidStudio', icon: 'androidstudio-plain' },
    { name: 'Xcode', icon: 'xcode-plain' },
    { name: 'RaspberryPi', icon: 'raspberrypi-plain' },
    { name: 'Arduino', icon: 'arduino-plain' },
    { name: 'Streamlit', icon: 'streamlit-plain' },
    { name: 'AWS', icon: 'amazonwebservices-plain-wordmark' },
    { name: 'AzureDevOps', icon: 'azuredevops-plain' },
    { name: 'PostgreSQL', icon: 'postgresql-plain' },
  ],
} satisfies Partial<Record<SkillCategory, SkillItem[]>>;

/** 型付きでカテゴリを反復するためのキー一覧 */
export const skillCategories = Object.keys(skills) as (keyof typeof skills)[];
