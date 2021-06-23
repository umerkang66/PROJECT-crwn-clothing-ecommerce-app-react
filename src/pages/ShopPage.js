import React, { Component } from 'react';
import '../sass/pages/ShopPage.scss';
import shopData from './shop.data.js';

import CollectionPreview from '../components/CollectionPreview.js';

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
