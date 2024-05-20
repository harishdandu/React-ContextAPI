import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <footer style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee' }}>
        <p>Footer</p>
      </footer>
    );
  };
  export default Footer;