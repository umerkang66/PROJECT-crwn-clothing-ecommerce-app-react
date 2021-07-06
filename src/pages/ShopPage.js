import React, { Component } from 'react';
import '../sass/pages/ShopPage.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../components/WithSpinner.js';
import CollectionsOverview from '../components/CollectionsOverview.js';
import CollectionPage from './CollectionPage.js';
import { fetchShopCollectionsStartAsync } from '../redux/actions/shopActions.js';
import { shopIsFetchingSelector } from '../redux/selectors/shopSelectors.js';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchShopCollectionsStartAsync } = this.props;
    fetchShopCollectionsStartAsync();
  }

  render() {
    const { match, isLoading } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: shopIsFetchingSelector,
});

export default connect(mapStateToProps, { fetchShopCollectionsStartAsync })(
  ShopPage
);
