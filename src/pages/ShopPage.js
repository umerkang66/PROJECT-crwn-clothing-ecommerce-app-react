import React from 'react';
import '../sass/pages/ShopPage.scss';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../components/CollectionsOverview.js';
import CollectionPage from './CollectionPage.js';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
