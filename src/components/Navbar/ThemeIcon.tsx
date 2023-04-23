import { useState, useEffect } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from "next-themes";

export const ThemeIcon = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <FaSun size='30' className='' />
      ) : (
        <FaMoon size='30' className='' />
      )}
    </span>
  );

};
