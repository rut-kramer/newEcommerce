import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    storeId: "",
    objectFields: {
    }
}

const FuncOpenStore = {

    setSaveAllDetailsStore(state, action) {
        state.objectFields = action.payload
    },
    setStoreId(state, action) {
        state.storeId = action.payload
    },


}

export default produce((state, action) => createReducer(state, action, FuncOpenStore), initialState);
