import React, { Component } from 'react';
import './Directory.scss';

import MenuItem from '../menuItem/MenuItem.js';
import sections from './directory.data.js';

class Directory extends Component {
  state = { sections };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
