import React, { Component } from 'react';
import '../sass/pages/ShopPage.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../components/CollectionsOverviewContainer.js';
import CollectionPageContainer from './CollectionPageContainer.js';
import { fetchShopCollectionsStartAsync } from '../redux/actions/shopActions.js';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchShopCollectionsStartAsync } = this.props;
    fetchShopCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect(null, { fetchShopCollectionsStartAsync })(ShopPage);
