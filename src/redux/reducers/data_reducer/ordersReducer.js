import produce from 'immer';
import { actions } from '../../action';
import createReducer from '../reducerUtils';

const initialState = {
  orders:[]
}
const ordersReduser = {
   setAllOrders(state,action)
   {
     state.orders=action.payload  
   }
}

export default produce((state, action) => createReducer(state, action, ordersReduser), initialState);