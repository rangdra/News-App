'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <button>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="w-8 h-8 text-yellow-500 cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="w-8 h-8 text-gray-800 cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      )}
    </button>
  );
}

export default DarkModeBtn;
