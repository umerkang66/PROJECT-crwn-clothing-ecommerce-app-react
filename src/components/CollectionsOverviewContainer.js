import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { shopIsFetchingSelector } from '../redux/selectors/shopSelectors.js';
import WithSpinner from './WithSpinner.js';
import CollectionsOverview from './CollectionsOverview.js';

const mapStateToProps = createStructuredSelector({
  isLoading: shopIsFetchingSelector,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
