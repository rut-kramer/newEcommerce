import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
        products: [],
        // featuredProducts: [],
        pic: "",
        viewListOrGrid: "list",
        currentProduct: {},
        treeProduct: new Array(4)
};

const product = {

        addToTreeProduct(state, action) {
                state.treeProduct[0] = state.treeProduct[1];
                state.treeProduct[1] = state.treeProduct[2];
                state.treeProduct[2] = state.treeProduct[3]
                state.treeProduct[3] = action.payload;
        },
        setProducts(state, action) {
                state.products = action.payload;
                // state.featuredProducts = state.products.filter(x => x.featured === true)
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
        },

        addNewProduct(state, action) {
                state.products.push(action.payload);
                if (action.payload.featured === true)
                        state.featuredProducts.push(action.payload)

        },
        deleteOldProduct(state, action) {
                state.products = state.products.filter(x => x._id !== action.payload);
        },
        editOldProduct(state, action) {
                state.products = state.products.filter(x => x._id !== action.payload._id);
                state.products.push(action.payload);
        }
};

export default produce((state, action) => createReducer(state, action, product), initialState);