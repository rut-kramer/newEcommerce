import produce from 'immer';
import createReducer from '../reducerUtils';
const initialState = {
        categories: [],
}
const categoryDesignFunc = {
        setCategoryDesign(state, action) {
                state.categoryDesign = action.payload;
        },
        setStatusShowCategory(state, action) {
                state.categories[action.payload.index].statusShow = action.payload.value;
        }



}

export default produce((state, action) => createReducer(state, action, categoryDesignFunc), initialState);