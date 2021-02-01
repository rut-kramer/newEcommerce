import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
        products: [],
        pic: "",
        viewListOrGrid: "list",
        currentProduct: {}

};

const product = {

        setProducts(state, action) {
                state.products = action.payload;
        },
        setProductImage(state, action) {
                state.pic = action.payload.p
                state.products[action.payload.i].images[0] = action.payload.p
                // state.products[action.payload.i].images[0] = action.payload.p
                // state.pic = state.products[action.payload.i].images[0]

        },
        setLOrG(state, action) {
                state.viewListOrGrid = action.payload
        },
        setCurrentProduct(state, action) {

                state.currentProduct = action.payload
        }

};

export default produce((state, action) => createReducer(state, action, product), initialState);
