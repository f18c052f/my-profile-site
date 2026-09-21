import React from 'react';
import type { LucideIcon } from 'lucide-react';

type Props = {
  icon: LucideIcon;
  children: React.ReactNode;
};

/** プロフィール内のサブセクション見出し。以前は 5 箇所に同じ JSX が重複していた */
const SectionHeading: React.FC<Props> = ({ icon: Icon, children }) => (
  <h3 className="mb-6 flex items-center text-xl font-semibold text-fg">
    <Icon className="mr-2 h-5 w-5 text-accent" aria-hidden="true" />
    {children}
  </h3>
);

export default SectionHeading;
