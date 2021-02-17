import produce from 'immer';
import createReducer from '../reducerUtils';


const initialState = {
        paper: {}
}

const paper = {
        setPaper(state, action) {
                state.paper = action.payload;
        }

}
export default produce((state, action) => createReducer(state, action, paper), initialState);