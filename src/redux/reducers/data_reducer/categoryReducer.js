import produce from 'immer';
import createReducer from '../reducerUtils';
import axios from 'axios'
import { actions } from '../../action';

const initialState = {
    categories: [],
    currentCategory: {}
}

const category = {
    setCategories(state, action) {
        state.categories = action.payload.categories;
    },
    setCurrentCategory(state, action) {
        state.currentCategory = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, category), initialState);