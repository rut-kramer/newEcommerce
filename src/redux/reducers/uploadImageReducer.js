import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    ImageLocation: "",
    functionSetImage: ""
}

const filter = {
    setImageLocation(state, action) {
        state.ImageLocation = action.payload;
    },
    setfunctionToSetImage(state, action) {
        state.functionSetImage = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, filter), initialState);