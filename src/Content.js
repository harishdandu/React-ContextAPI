import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {
    const { theme } = useContext(ThemeContext);
  
    return (
      <div style={{ background: theme === 'light' ? '#fff' : '#111', color: theme === 'light' ? '#333' : '#eee' }}>
        <h2>Content</h2>
        <p>This is the content area.</p>
      </div>
    );
  };
  
  export default Content;