import React from 'react';
import '../sass/components/CollectionsOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './CollectionPreview.js';
import { shopSelectorItems } from '../redux/reducers/shopReducer.js';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopSelectorItems,
});

export default connect(mapStateToProps)(CollectionsOverview);
