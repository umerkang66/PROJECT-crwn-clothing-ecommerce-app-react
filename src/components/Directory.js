import React from 'react';
import '../sass/components/Directory.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from './MenuItem.js';
import { selectDirectorySections } from '../redux/selectors/directorySelectors.js';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
