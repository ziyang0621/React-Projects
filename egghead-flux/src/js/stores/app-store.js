import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import CartAPI from '../api/CartAPI';

const CHNAGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit(CHNAGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHNAGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHNAGE_EVENT, callback);
  },

  getCart() {
    return CartAPI.cartItems;
  },

  getCatalog() {
    return CartAPI.getCatalog();
  },

  getCartTotals() {
    return CartAPI.cartTotals();
  },

  dispatcherIndex: register( function(action) {
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
        CartAPI.addItem(action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        CartAPI.removeItem(action.item);
        break;

      case AppConstants.INCREASE_ITEM:
        CartAPI.increaseItem(action.item);
        break;

      case AppConstants.DECREASE_ITEM:
        CartAPI.descreaseItem(action.item);
        break;
    }

    AppStore.emitChange();
  })

});

export default AppStore;
