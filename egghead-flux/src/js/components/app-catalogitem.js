import React from 'react';
import AppActions from '../actions/app-actions';
import CartButton from './app-cart-button';

export default (props) => {
  return (
    <div className="col-xs-6 col-sm-4 col-md-3">
      <h4>{ props.item.title}</h4>
      <img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
      <p>{ props.item.summary }</p>
      <p>{ props.item.cost }</p>
      <CartButton
        hander={
          AppActions.addItem.bind(null, props.item)
        }
        txt="Add To Cart"
      />
    </div>
  )
}
