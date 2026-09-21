// このファイルは scripts/build-skill-icons.mjs が生成します。手で編集しないでください。
// 再生成: pnpm icons:build

import icon_amazonwebservices_plain_wordmark from './amazonwebservices-plain-wordmark.svg';
import icon_androidstudio_plain from './androidstudio-plain.svg';
import icon_arduino_plain from './arduino-plain.svg';
import icon_azuredevops_plain from './azuredevops-plain.svg';
import icon_carbon_original from './carbon-original.svg';
import icon_csharp_plain from './csharp-plain.svg';
import icon_css3_plain from './css3-plain.svg';
import icon_dotnetcore_plain from './dotnetcore-plain.svg';
import icon_git_plain from './git-plain.svg';
import icon_googlecloud_plain from './googlecloud-plain.svg';
import icon_html5_plain from './html5-plain.svg';
import icon_javascript_plain from './javascript-plain.svg';
import icon_linux_plain from './linux-plain.svg';
import icon_matlab_plain from './matlab-plain.svg';
import icon_postgresql_plain from './postgresql-plain.svg';
import icon_python_plain from './python-plain.svg';
import icon_raspberrypi_plain from './raspberrypi-plain.svg';
import icon_react_original from './react-original.svg';
import icon_streamlit_plain from './streamlit-plain.svg';
import icon_typescript_plain from './typescript-plain.svg';
import icon_unity_plain from './unity-plain.svg';
import icon_wordpress_plain from './wordpress-plain.svg';
import icon_xcode_plain from './xcode-plain.svg';

export const skillIcons = {
  'amazonwebservices-plain-wordmark': icon_amazonwebservices_plain_wordmark,
  'androidstudio-plain': icon_androidstudio_plain,
  'arduino-plain': icon_arduino_plain,
  'azuredevops-plain': icon_azuredevops_plain,
  'carbon-original': icon_carbon_original,
  'csharp-plain': icon_csharp_plain,
  'css3-plain': icon_css3_plain,
  'dotnetcore-plain': icon_dotnetcore_plain,
  'git-plain': icon_git_plain,
  'googlecloud-plain': icon_googlecloud_plain,
  'html5-plain': icon_html5_plain,
  'javascript-plain': icon_javascript_plain,
  'linux-plain': icon_linux_plain,
  'matlab-plain': icon_matlab_plain,
  'postgresql-plain': icon_postgresql_plain,
  'python-plain': icon_python_plain,
  'raspberrypi-plain': icon_raspberrypi_plain,
  'react-original': icon_react_original,
  'streamlit-plain': icon_streamlit_plain,
  'typescript-plain': icon_typescript_plain,
  'unity-plain': icon_unity_plain,
  'wordpress-plain': icon_wordpress_plain,
  'xcode-plain': icon_xcode_plain,
} as const;

/** src/data/skills.ts の icon はこの union のいずれかでなければならない */
export type SkillIconName = keyof typeof skillIcons;
