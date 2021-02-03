import produce from 'immer';
import { actions } from '../action';
import createReducer from './reducerUtils';

const initialState = {
  cart:
  {
    user: "",
    address: "",
    date: Date.now(),
    product: [],
    status: "שולם",
    store: "",
    totalPrice: 0
  }
}


const cartReduser = {

  updateSetOrder(state, action) {
    switch (action.payload.target.name) {
      case "address":
        state.cart.address = action.payload.target.value
        break;
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
    state.cart.product = [];
    // state.cart.totalPrice=0;
  },
  remove(state, action) {

    var tg = state.cart.product.splice(action.payload.product._id, 1);
    state.cart.product = state.cart.product.filter(x => x != tg);
    //    for (let index = 0; index < action.payload.amount; index++) {
    //          state.cart.totalPrice-=action.payload.product.price;

    //    }
  },

  addToCart(state, action) {
    state.cart.product.push(action.payload);
    // dispatch(actions.callcTotalPrice());
    // this.callcTotalPrice(state)
    state.cart.totalPrice += action.payload.product.price;

  },
  pluseAmount(state, action) {
    state.cart.product[action.payload].amount++;
    // state.cart.totalPrice+=state.cart.product[action.payload].product.price
  },
  minuseAmount(state, action) {
    if (state.cart.product[action.payload].amount > 1) {
      state.cart.product[action.payload].amount--;
      // state.cart.totalPrice-=state.cart.product[action.payload].product.price
    }
  },
  // הכנסת הקוקי לסטיט
  setOrder(state, action) {
    state.cart = action.payload;
  },


}

export default produce((state, action) => createReducer(state, action, cartReduser), initialState);