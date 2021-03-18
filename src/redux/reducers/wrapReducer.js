import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {
    viewModel: {
        viewMode: false,
        currentPage: ""
    },
    currentComponent: "",
    mainWidth: 0

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
    setMainWidth(state, action) {
        state.mainWidth = action.payload
    }

}

export default produce((state, action) => createReducer(state, action, wrapFunctions), initialState);
