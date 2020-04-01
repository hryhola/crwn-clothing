import React from 'react';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

ShopPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ShopPage;
