'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <button onClick={handleClick}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleTheme;
