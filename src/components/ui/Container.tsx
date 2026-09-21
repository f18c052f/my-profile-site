import React from 'react';

type Props = {
  children: React.ReactNode;
  /** ギャラリーのように意図的に広く取る場合だけ true にする */
  wide?: boolean;
};

/** 本文の横幅を揃える。以前は 4xl / 6xl / 7xl が混在していた */
const Container: React.FC<Props> = ({ children, wide = false }) => (
  <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${wide ? 'max-w-6xl' : 'max-w-5xl'}`}>
    {children}
  </div>
);

export default Container;
