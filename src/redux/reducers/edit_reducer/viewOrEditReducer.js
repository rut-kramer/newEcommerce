import createReducer from '../reducerUtils'
import produce from 'immer';

const initialState = {

    // viewModel: {
    //     viewMode: false,
    //     currentPage: ""
    // }
    isAdmin: true
}

const viewModel = {
    //     setMode(state, action) {
    //         state.viewModel.viewMode = action.payload
    //     },
    //     setLocation(state, action) {
    //         state.viewModel.currentPage = action.payload
    //     }
    setAdmin(state, action) {
        state.isAdmin = true
    },
    setClient(state, action) {
        state.isAdmin = false
    },
    replaceAdmin(state, action) {
        state.isAdmin = !state.isAdmin
    },
}
export default produce((state, action) => createReducer(state, action, viewModel), initialState);
