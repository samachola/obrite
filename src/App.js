import React, { Component } from 'react';

import Events  from './components/events.js';

class App extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Events />
      </div>
    );
  }
}

export default App;
