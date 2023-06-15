'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleClick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  if (!mounted) return null;

  return (
    <button onClick={handleClick}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleTheme;
