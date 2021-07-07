import React from 'react';
import '../sass/components/CollectionsOverview.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from './CollectionPreview.js';
import {
  shopCollectionsArrSelector,
  shopErrMessageSelector,
} from '../redux/selectors/shopSelectors.js';

const CollectionsOverview = ({ collections, errMessage }) => {
  if (errMessage) return <div className="error-message">{errMessage}</div>;

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
  errMessage: shopErrMessageSelector,
});

export default connect(mapStateToProps)(CollectionsOverview);
