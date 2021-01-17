import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './action';
import { getAllCategories, createNewCategory, deleteCategory, editCategory } from './middleware/crudCategory'
import { checkPermission, onAuthStateChanged, setUserId } from './middleware/crudLogin'
import { newOrder } from './middleware/crudOrder'
import { getAllProducts, newProduct, addNewImageToProduct, deleteProduct, editproduct } from './middleware/crudProduct'
import { newStore, createNewStore } from './middleware/crudStore'
import { userIdByEmail, uploadImage } from './middleware/crud'




const reducers =
    combineReducers({
        //לכאן צריך להביא את כל הרדיוסרים לאחר שנייבא אותם באימפורט
    })

const store = createStore(
    reducers,

    composeWithDevTools(
        applyMiddleware(
            //לכאן נביא את כל הפונקציות מהקרד של ריאקט
            //לאחר שנייבא אותם באימפורט
            //crud - פונקציות מ 
            userIdByEmail,
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
            newStore,
            createNewStore,
        ))
)
window.store = store;

export default store;