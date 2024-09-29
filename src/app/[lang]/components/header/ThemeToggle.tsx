'use client';

import type { FC } from 'react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-row space-x-1">
      <button
        onClick={() => {
          setTheme('light');
        }}
        className="rounded-md border-2 px-2 py-1"
      >
        light
      </button>
      <button
        onClick={() => {
          setTheme('dark');
        }}
        className="rounded-md border-2 px-2 py-1"
      >
        dark
      </button>
    </div>
  );
};
