import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** 本文中のカード。以前は同じクラス列が 8 箇所に重複していた */
const Card: React.FC<Props> = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-border bg-surface-2 p-4 shadow-sm md:p-6 ${className}`}>
    {children}
  </div>
);

export default Card;
