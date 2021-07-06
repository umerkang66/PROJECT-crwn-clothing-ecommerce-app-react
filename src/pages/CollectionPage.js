import React from 'react';
import '../sass/pages/CollectionPage.scss';
import { connect } from 'react-redux';

import CollectionItem from '../components/CollectionItem.js';
import { shopCollectionSelector } from '../redux/selectors/shopSelectors.js';

const CollectionPage = ({ collection }) => {
  if (!collection) return null;

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2>{title.toUpperCase()}</h2>
      <div className="collection-page__items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params;
  return {
    collection: shopCollectionSelector(collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
