import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
        minPrice: 0,
        maxPrice: 0,
        filteredItems: []
}

const filter = {

        setFilteredItems(state, action) {
                state.filteredItems = action.payload;

        },
        addProductFiltered(state, action) {
                state.filteredItems.push( action.payload);

        },
        setMaxPrice(state, action) {
                state.maxPrice = action.payload;
        },
        setMinPrice(state, action) {
                state.minPrice = action.payload;
        },
        setFilterObject(state, action) {
                state.filterObject.categories = action.payload.categories;
                state.filterObject.attributes = action.payload.attributes;
        },
        setAttributesFilterObject(state, action) {
                state.filterObject.attributes = action.payload;
        },
        setCategoriesFilterObject(state, action) {
                state.filterObject.categories = action.payload;
        }

}

export default produce((state, action) => createReducer(state, action, filter), initialState);