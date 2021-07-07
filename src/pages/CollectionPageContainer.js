import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { shopIsFetchingSelector } from '../redux/selectors/shopSelectors.js';
import WithSpinner from '../components/WithSpinner.js';
import CollectionPage from './CollectionPage.js';

const mapStateToProps = createStructuredSelector({
  isLoading: shopIsFetchingSelector,
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
