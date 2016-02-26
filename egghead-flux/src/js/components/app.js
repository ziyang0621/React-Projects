import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Catalog />
        <Cart />
      </div>
    )
  }
}
