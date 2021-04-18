import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
  cart:
  {
    // user: "",
    // address: "",
    // date: Date.now(),
    products: [],
    // status: "שולם",
    // store: "",
    totalPrice: 0
  }
}


const cartReducer = {

  updateSetOrder(state, action) {
    switch (action.payload.target.name) {
      case "address":
        state.cart.address = action.payload.target.value
        break;
      default:
    }
  },
  setTotalPrice(state, action) {
    state.cart.totalPrice = action.payload;
  },
  setUserOrder(state, action) {
    state.cart.user = action.payload;
  },
  setStore(state, action) {
    state.cart.store = action.payload;
  },
  clear(state, action) {
    state.cart.products = [];
    // state.cart.totalPrice=0;
  },
  remove(state, action) {

    var tg = state.cart.products.splice(action.payload.product._id, 1);
    state.cart.products = state.cart.products.filter(x => x !== tg);
    //    for (let index = 0; index < action.payload.amount; index++) {
    //          state.cart.totalPrice-=action.payload.product.price;

    //    }
  },

  addProductToCart(state, action) {

    let productsCart = state.cart.products;
    if (!productsCart)
      productsCart = [];
    productsCart.push(action.payload);
    state.cart.products = productsCart;
    // dispatch(actions.callcTotalPrice());
    // this.callcTotalPrice(state)
    state.cart.totalPrice += (action.payload.product.price * action.payload.amount);

  },
  pluseAmount(state, action) {
    state.cart.products[action.payload.index].amount = state.cart.products[action.payload.index].amount + action.payload.amount;
    // state.cart.totalPrice+=state.cart.product[action.payload].product.price
  },
  minuseAmount(state, action) {
    if (state.cart.products[action.payload].amount > 1) {
      state.cart.products[action.payload].amount--;
      // state.cart.totalPrice-=state.cart.product[action.payload].product.price
    }
  },
  // הכנסת הקוקי לסטיט
  setOrder(state, action) {
    state.cart = action.payload;
  },


}

export default produce((state, action) => createReducer(state, action, cartReducer), initialState);