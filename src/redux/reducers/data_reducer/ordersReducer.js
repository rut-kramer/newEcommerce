import produce from 'immer';
import createReducer from '../reducerUtils';

const initialState = {
  orders: []
}
const ordersReducer = {
  setAllOrders(state, action) {
    state.orders = action.payload
  }
}

export default produce((state, action) => createReducer(state, action, ordersReducer), initialState);