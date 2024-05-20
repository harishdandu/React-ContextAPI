import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee' }}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;