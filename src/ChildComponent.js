import React, { useContext } from 'react';
import DataContext from './DataContext';

const ChildComponent = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>Data from Parent: {data}</p>
    </div>
  );
};

export default ChildComponent;