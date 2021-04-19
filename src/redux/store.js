import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllCategories, createNewCategory, deleteCategory, editCategory, getCategoriesByStore } from './middleware/crudCategory'
import { checkPermission, onAuthStateChanged, setUserId } from './middleware/crudLogin'
import { newOrder, getOrdersByStore } from './middleware/crudOrder'
import { getAllProducts, newProduct, addNewImageToProduct, deleteProduct, editproduct } from './middleware/crudProduct'
import { createNewStore, getStoreByUser, deleteStore } from './middleware/crudStore'
import { getTheLastUpdatedStorePerUser } from './middleware/crudUser'
import { createNewPaper, getAllPaper, deletePaper, editPaper } from './middleware/crudPaper'
import { getAllAttributes, newAttributes, deleteAttributes, editAttribute } from './middleware/crudAttribute'
import { uploadImage } from './middleware/crud';
import { newBullcommerceHeader, editBullcommerceHeader, getBullcommerceHeaderByStoreId } from './middleware/crudDesign';
import productReducer from './reducers/data_reducer/productReducer';
import categoriesReducer from './reducers/data_reducer/categoryReducer';
import cartReducer from './reducers/cartReducer';
import ordersReducer from './reducers/data_reducer/ordersReducer';
import logoReducer from './reducers/edit_reducer/logoReducer';
import storeHomeReducer from "./reducers/edit_reducer/old.storeHomePageReducer";
import viewOrEditReducer from "./reducers/edit_reducer/viewOrEditReducer";
import storeReducer from "./reducers/storeReducer";
import userReducer from "./reducers/userReducer";
import coinsReducer from "./reducers/coinsReducer";
import filterReducer from "./reducers/filterReducer";
import wrapReducer from "./reducers/wrapReducer";
import bullPageEditReducer from "./reducers/edit_reducer/bullPageEditReducer";
import carouselImgReducer from "./reducers/data_reducer/carouselPictureReducer"
import { addToCart, changeProductAmount } from "./middleware/crudCart"
import { actions } from './action';
import attributeReducer from "./reducers/data_reducer/attributeReducer";
import { deleteTerms, newTerm } from './middleware/crudTerm';
import quillReducer from './reducers/data_reducer/quillReducer';
import mediaGalleryReducer from './reducers/mediaGalleryReducer'
import uploadImageReducer from './reducers/uploadImageReducer'
import { newUploadImage } from './middleware/crudUploadImg';

import BHD from './reducers/design_reducers/bullcommerceHeaderReducer';
import categoryHeaderReducer from './reducers/design_reducers/categoryHeaderReducer';
const reducers =
    combineReducers({
        //לכאן צריך להביא את כל הרדיוסרים לאחר שנייבא אותם באימפורט openStoreReducer,
        ordersReducer, cartReducer, categoriesReducer, productReducer,
        userReducer, logoReducer, viewOrEditReducer, storeHomeReducer,
        coinsReducer, storeReducer, wrapReducer, filterReducer, quillReducer,
        attributeReducer, bullPageEditReducer, carouselImgReducer, mediaGalleryReducer, uploadImageReducer, BHD, categoryHeaderReducer


    })

const rootReducer = (state, action) => {
    if (action.payload === 'USER_LOGOUT') {
        state = undefined
    }
    return reducers(state, action)
}
const store = createStore(
    rootReducer,

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
            deleteStore,
            createNewPaper, getAllPaper, deletePaper, editPaper,
            addToCart,
            changeProductAmount,
            deleteAttributes, newAttributes, getAllAttributes, editAttribute,
            deleteTerms, newTerm,
            newUploadImage,
            newBullcommerceHeader,
            editBullcommerceHeader,
            getBullcommerceHeaderByStoreId
        ))
)
window.store = store;

store.dispatch(actions.onAuthStateChanged());

export default store;