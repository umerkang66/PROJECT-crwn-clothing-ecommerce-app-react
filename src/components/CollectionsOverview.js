import React from 'react';
import '../sass/components/CollectionsOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './CollectionPreview.js';
import { shopCollectionsArrSelector } from '../redux/selectors/shopSelectors.js';

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
  collections: shopCollectionsArrSelector,
});

export default connect(mapStateToProps)(CollectionsOverview);
