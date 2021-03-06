import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';
import Template from './app-template';
import CatalogDetail from './product/app-catalogdetail';
import {Router, Route, IndexRoute } from 'react-router';

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={Catalog} />
        <Route path="cart" component={Cart} />
        <Route path="item/:item" component={CatalogDetail} />
      </Route>
    </Router>
  )
}
