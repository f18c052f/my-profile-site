import type { ja } from "../i18n/locales/ja";

export type SkillItem = { name: string; icon: string };

/**
 * カテゴリ名は i18n の profile.skills.categories のキーと一致していなければならない。
 * 型で縛ることで、片方だけ変更したときにコンパイルエラーになる。
 */
export type SkillCategory = keyof typeof ja.profile.skills.categories;

export const skills = {
  "Programming Languages": [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "C#", icon: "devicon-csharp-plain colored" },
    { name: "C", icon: "devicon-carbon-original colored" },
    { name: "MATLAB", icon: "devicon-matlab-plain colored" },
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "React/ReactNative", icon: "devicon-react-original colored" },
    { name: "Unity", icon: "devicon-unity-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain colored" },
    { name: "ASP.NET Core", icon: "devicon-dotnetcore-plain colored" },
  ],
  Tools: [
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GoogleCloud", icon: "devicon-googlecloud-plain colored" },
    { name: "WordPress", icon: "devicon-wordpress-plain colored" },
    { name: "AndroidStudio", icon: "devicon-androidstudio-plain colored" },
    { name: "Xcode", icon: "devicon-xcode-plain colored" },
    { name: "RaspberryPi", icon: "devicon-raspberrypi-plain colored" },
    { name: "Arduino", icon: "devicon-arduino-plain colored" },
    { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
    { name: "AzureDevOps", icon: "devicon-azuredevops-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  ],
} satisfies Partial<Record<SkillCategory, SkillItem[]>>;

/** 型付きでカテゴリを反復するためのキー一覧 */
export const skillCategories = Object.keys(skills) as (keyof typeof skills)[];
