import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    objectFields: {
    }
}

const storeReducer = {

    setSaveAllDetailsStore(state, action) {
        state.objectFields = action.payload
     },
}

export default produce((state, action) => createReducer(state, action, storeReducer), initialState);
