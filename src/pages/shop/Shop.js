import React, { Component } from 'react';
import './Shop.scss';
import shopData from './shop.data.js';

import PreviewCollection from '../../components/collectionPreview/PreviewCollection.js';

class ShopPage extends Component {
  state = { collections: shopData };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
