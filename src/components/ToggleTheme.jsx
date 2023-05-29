'use client';
import { useTheme } from 'next-themes';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
  };

  return <button onClick={handleClick}>Toggle</button>;
};

export default ToggleTheme;
