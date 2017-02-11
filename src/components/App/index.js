import React, { Component } from 'react';
import data from './data.json';

import Sitetable from '../Sitetable';

class App extends Component {
  render() {
    console.log(data.sites);
    return (
      <div className="app">
        <div className="top-bar">
          <h2>EDGI Web Monitoring</h2>
        </div>
        <Sitetable sites={data.sites} />
      </div>
    );
  }
}

export default App;
