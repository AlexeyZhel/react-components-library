import React, { Component } from 'react';

import { TestComponent } from './reactComponentLib';

class App extends Component {
  render() {
    return (
      <div>
        <TestComponent text="Component from React library" />
      </div>
    );
  }
}

export default App;
