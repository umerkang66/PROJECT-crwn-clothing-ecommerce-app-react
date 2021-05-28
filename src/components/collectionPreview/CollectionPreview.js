import React from 'react';
import './CollectionPreview.scss';

import CollectionItem from '../collectionItem/CollectionItem.js';

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div style={{ color: 'white' }} className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, i) => i < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
