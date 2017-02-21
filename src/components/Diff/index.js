import React, {Component} from 'react';

import Sitelist from '../Sitelist';

class Diff extends Component {
  // Grab a diff from the differ
  // Options for view other than side-by-side?
  // Configurable for type of diff we want?
  render() {
    return (
      <div>
        <div role="navigation">
          <Sitelist />
        </div>
        <div>
          <p>This is a visual representation of a diff</p>
        </div>
      </div>
    );
  }
}

export default Diff;
