import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    viewModel: {
        viewMode: false,
        currentPage: ""
    },
    currentComponent: "",

}

const wrapFunctions = {

    setMode(state, action) {
        state.viewModel.viewMode = action.payload
    },
    setLocation(state, action) {
        state.viewModel.currentPage = action.payload
    },
    setCurrentComponent(state, action) {
        state.currentComponent = action.payload
    },

}

export default produce((state, action) => createReducer(state, action, wrapFunctions), initialState);
