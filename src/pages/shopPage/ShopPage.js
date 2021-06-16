import React, { Component } from 'react';
import './ShopPage.scss';
import shopData from './shop.data.js';

import CollectionPreview from '../../components/collectionPreview/CollectionPreview.js';

class ShopPage extends Component {
  state = { collections: shopData };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
