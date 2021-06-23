import React from 'react';
import '../sass/components/CollectionItem.scss';
import { connect } from 'react-redux';

import { addItem } from '../redux/actions/cartActions.js';
import CustomButton from './CustomButton.js';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
