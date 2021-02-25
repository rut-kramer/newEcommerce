import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
    attributes: [],
    currentAttribute:{}
};

const attribute = {

    setAttribute(state, action) {
        state.attributes = action.payload;
    },

    setCurrentAttribute(state,action){
               
  state.currentAttribute=action.payload
    },

//     addNewAttribute(state,action){
//         state.products.push(action.payload);       
//     },
    deleteOldAttribute(state,action){
        state.attributes = state.attributes.filter(x => x._id != action.payload);      
    },
    editOldAttribute(state,action){
        state.attributes = state.attributes.filter(x => x._id != action.payload._id);    
        state.attributes.push(action.payload);    
    }
};

export default produce((state, action) => createReducer(state, action, attribute), initialState);
