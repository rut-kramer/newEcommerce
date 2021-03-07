import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllCategories, createNewCategory, deleteCategory, editCategory, getCategoriesByStore } from './middleware/crudCategory'
import { checkPermission, onAuthStateChanged, setUserId } from './middleware/crudLogin'
import { newOrder, getOrdersByStore } from './middleware/crudOrder'
import { getAllProducts, newProduct, addNewImageToProduct, deleteProduct, editproduct, oneProduct } from './middleware/crudProduct'
import { createNewStore, getStoreByUser, deleteStore } from './middleware/crudStore'
import { getTheLastUpdatedStorePerUser } from './middleware/crudUser'
import { createNewPaper } from './middleware/crudPaper'
import { getAllAttributes, newAttributes, deleteAttributes, editAttribute } from './middleware/crudAttribute'
import { uploadImage } from './middleware/crud'
import productReducer from './reducers/data_reducer/productReducer';
import paperReducer from './reducers/data_reducer/paperReducer'
import categoriesReducer from './reducers/data_reducer/categoryReducer';
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/data_reducer/ordersReducer';
import logoReducer from './reducers/edit_reducer/logoReducer';
import storeHomeReducer from "./reducers/edit_reducer/storeHomePageReducer";
import viewOrEditReducer from "./reducers/edit_reducer/viewOrEditReducer";
import storeReducer from "./reducers/storeReducer";
import userReducer from "./reducers/userReducer";
import coinsReducer from "./reducers/coinsReducer";
import filterReducer from "./reducers/filterReducer";
import wrapReducer from "./reducers/wrapReducer";
import { addToCart, changeProductAmount } from "./middleware/crudCart"
import { actions } from './action';
import attributeReducer from "./reducers/data_reducer/attributeReducer";
import { deleteTerms, newTerm } from './middleware/crudTerm';

const reducers =
    combineReducers({
        //לכאן צריך להביא את כל הרדיוסרים לאחר שנייבא אותם באימפורט openStoreReducer,
        ordersReducer, cartReducer, categoriesReducer, productReducer,
        userReducer, logoReducer, viewOrEditReducer, storeHomeReducer,
        coinsReducer, storeReducer, wrapReducer, filterReducer, paperReducer, attributeReducer
    })

const store = createStore(
    reducers,

    composeWithDevTools(
        applyMiddleware(
            //לכאן נביא את כל הפונקציות מהקרד של ריאקט
            //לאחר שנייבא אותם באימפורט
            //crud - פונקציות מ 
            // userIdByEmail,
            uploadImage,
            //crudCategory - פונקציות מ 
            getAllCategories,
            createNewCategory,
            deleteCategory,
            editCategory,
            // crudLogin - פונקציות מ
            checkPermission,
            onAuthStateChanged,
            setUserId,
            //crudOrder - פונקציות מ 
            newOrder,
            //crudProduct - פונקציות מ 
            getAllProducts,
            newProduct,
            addNewImageToProduct,
            deleteProduct,
            editproduct,
            oneProduct,
            //crudStore - פונקציות מ 

            createNewStore,
            getStoreByUser,
            getCategoriesByStore,
            getOrdersByStore,
            //crudUser - פונקציות מ
            getTheLastUpdatedStorePerUser,
            deleteStore,
            createNewPaper,
            addToCart,
            changeProductAmount,
            deleteAttributes, newAttributes, getAllAttributes, editAttribute,
            deleteTerms, newTerm
        ))
)
window.store = store;

store.dispatch(actions.onAuthStateChanged());
store.dispatch(actions.oneProduct())

export default store;