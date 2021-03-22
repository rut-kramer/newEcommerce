import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    title: 'Uploud Images'
}

const filter = {

    setTitleBySideBar(state, action) {
        debugger
        state.title = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, filter), initialState);