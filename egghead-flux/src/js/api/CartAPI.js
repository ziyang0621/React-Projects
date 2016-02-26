const CartAPI = {
  catalog: [],
  cartItems: [],

  init() {
    for ( let i = 1; i < 9; i++) {
      this.catalog.push( {
        'id': 'Widget' + i,
        'title': 'Widget #' + i,
        'summary': 'A great widget',
        'description': 'Lorem ipsum dolor sit amet.',
        'cost': i
      });
    }
  },

  removeItem(item) {
    this.cartItems.splice(this.cartItems.findIndex(i => i === item), 1);
  },

  findCartItem(item) {
    return this.cartItems.find(cartItem => cartItem.id === item.id);
  },

  increaseItem(item) {item.qty++},

  descreaseItem(item) {
    item.qty--;
    if (item.qty === 0) {
      this.removeItem(item);
    }
  },

  addItem(item) {
    const cartItem = this.findCartItem(item);
    if (!cartItem) {
      this.cartItems.push(Object.assign({qty: 1}, item));
    } else {
      this.increaseItem(cartItem);
    }
  },

  cartTotals(qty = 0, total = 0) {
    this.cartItems.forEach( cartItem => {
      qty += cartItem.qty;
      total += cartItem.qty * cartItem.cost;
    });
    return {qty, total};
  },

  getCatalog() {
    return this.catalog.map(item => {
      return Object.assign({}, item, this.cartItems.find(cItem => cItem.id === item.id))
    })
  },

}

CartAPI.init();
export default CartAPI;
