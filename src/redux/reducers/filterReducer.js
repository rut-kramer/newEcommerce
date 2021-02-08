import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
        minPrice: 30,
        maxPrice: 800,
        filteredItems: []
}

const filter = {

        setFilteredItems(state, action) {

                state.filteredItems = action.payload;

        },
        setMaxPrice(state, action) {
                state.maxPrice = action.payload;
        },
        setMinPrice(state, action) {
                state.minPrice = action.payload;
        }

}

export default produce((state, action) => createReducer(state, action, filter), initialState);