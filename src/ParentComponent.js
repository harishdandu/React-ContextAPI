import React from 'react';
import ChildComponent from './ChildComponent';
import { DataProvider } from './DataContext';

class ParentComponent extends React.Component {
  state = {
    data: 'This is the data to be shared',
  };

  render() {
    return (
      <DataProvider value={this.state.data}>
        <div>
          <h2>Parent Component</h2>
          <ChildComponent />
        </div>
      </DataProvider>
    );
  }
}

export default ParentComponent;