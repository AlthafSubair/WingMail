"use client";
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light'); // Default to 'light' to match server-rendered content

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme}>
       {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  );
};

export default ThemeToggle;
