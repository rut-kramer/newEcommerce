import produce from 'immer';
import createReducer from '../reducerUtils';
import axios from 'axios'
import { actions } from '../../action';

const initialState = {
     stores:[],
     currentStore:{}
}

const storeByUserReducer = {

    setStorePerUser(state, action) {
                state.stores = action.payload;    
        },
     setSoreCurrent(state, action) {
            state.currentStore = action.payload;    
    },
    deleteOldStore(state, action) {
        state.stores = state.stores.filter(x => x._id != action.payload);    
},
}

export default produce((state, action) => createReducer(state, action, storeByUserReducer), initialState);