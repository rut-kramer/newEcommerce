import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllCategories, createNewCategory, deleteCategory, editCategory,getCategoriesByStore} from './middleware/crudCategory'
import { checkPermission, onAuthStateChanged, setUserId } from './middleware/crudLogin'
import { newOrder,getOrdersByStore } from './middleware/crudOrder'
import { getAllProducts, newProduct, addNewImageToProduct, deleteProduct, editproduct } from './middleware/crudProduct'
import {  createNewStore,getStoreByUser,deleteStore } from './middleware/crudStore'
import { getTheLastUpdatedStorePerUser} from './middleware/crudUser'
import {getAllAttributes,newAttributes,deleteAttributes,editAttribute} from './middleware/crudAttribute'
import { uploadImage } from './middleware/crud'
import productReducer from './reducers/data_reducer/productReducer';
import categoriesReducer from './reducers/data_reducer/categoryReducer';
import cartReducer from './reducers/cartReducer';
import ordersReduser from './reducers/data_reducer/ordersReducer';
import logoReducer from './reducers/edit_reducer/logoReducer';
import storeHomeReducer from "./reducers/edit_reducer/storeHomePageReducer";
import viewOrEditReducer from "./reducers/edit_reducer/viewOrEditReducer";
import storeReducer from "./reducers/storeReducer";
import userReducer from "./reducers/userReducer";
import coinsReducer from "./reducers/coinsReducer";
import wrapReducer from "./reducers/wrapReducer"
import { actions } from './action';
import attributeReducer from "./reducers/data_reducer/attributeReducer";
import {deleteTerms,newTerm} from './middleware/crudTerm';

const reducers =
    combineReducers({
        //לכאן צריך להביא את כל הרדיוסרים לאחר שנייבא אותם באימפורט openStoreReducer,
        ordersReduser, cartReducer, categoriesReducer, productReducer,
        userReducer, logoReducer ,viewOrEditReducer, storeHomeReducer, coinsReducer,
        userReducer, logoReducer, storeReducer, viewOrEditReducer,
        storeHomeReducer, coinsReducer, wrapReducer,attributeReducer
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
            //crudStore - פונקציות מ 
          
            createNewStore,
            getStoreByUser,
            getCategoriesByStore,
            getOrdersByStore,
            //crudUser - פונקציות מ
            getTheLastUpdatedStorePerUser,
            getStoreByUser,deleteStore,
            deleteAttributes,newAttributes,getAllAttributes,editAttribute,
            deleteTerms,newTerm
        ))
)
window.store = store;

store.dispatch(actions.onAuthStateChanged());

export default store;