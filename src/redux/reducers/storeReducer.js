import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    objectFields: {
    },
    currentStore: {}
}

const storeReducer = {

    setSaveAllStoreDetails(state, action) {
        state.objectFields = action.payload
    },
    setCurrentStore(state, action) {
        debugger
        state.currentStore = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, storeReducer), initialState);
