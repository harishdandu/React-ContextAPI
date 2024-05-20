// ThemeSwitcher.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;