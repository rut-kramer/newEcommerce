import produce from 'immer';
import createReducer from '../reducerUtils';


const initialState = {
        categories: [],
        currentCategory: {},
        categoryListMenu: []
}

const category = {
        setCategories(state, action) {
                state.categories = action.payload;
                state.categoryListMenu = action.payload
        },
        setCurrentCategory(state, action) {
                state.currentCategory = action.payload;
        },
        addNewCategory(state, action) {
                state.categories.push(action.payload);
        },
        deleteOldCategory(state, action) {
                state.categories = state.categories.filter(x => x._id !== action.payload);
        },
        editOldCategory(state, action) {
                state.categories = state.categories.filter(x => x._id !== action.payload._id);
                state.categories.push(action.payload);
        },
        setCategoryListMenu(state, action) {
                state.categoryListMenu = action.payload;
        }
}
export default produce((state, action) => createReducer(state, action, category), initialState);