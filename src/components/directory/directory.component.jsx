import React, { Component } from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import sections from './directory.data.js';

class Directory extends Component {
  state = { sections };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
