import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../actions/app-actions';

export default (props) => {
  return (
    <tr>
      <td>
        <CartButton
          txt="X"
          hander={AppActions.removeItem.bind(null, props.item)} />
      </td>
      <td>{props.item.title}</td>
      <td>{props.item.qty}</td>
      <td>
        <div className="btn-group">
          <CartButton
            txt="-"
            hander={AppActions.decreaseItem.bind(null, props.item)} />
          <CartButton
            txt="+"
            hander={AppActions.increaseItem.bind(null, props.item)} />
        </div>
      </td>
      <td>${props.subtotal}</td>
    </tr>
  )
}
