import produce from 'immer';
import createReducer from "./reducerUtils";

const initialState = {

    objectFields: {
        nameStore: "",
        urlRoute: "",
        descriptionStore: "",
        addressStore: "",
        phoneStore: "",
        emailStore: "",
        colorStore: "",
        policy: "",//מדיניות
        currency: "",
        inventoryManagement: "",//ניהול מלאי
        oneProductPurchase: "",//קניה חד מוצרית
        logoStore: "",

        //רותי אמרה שצריך להוסיף סוג חנות
    },
    stores: [],
    currentStore: {}
}

const FuncOpenStore = {
    //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
    setNameStore(state, action) {
        state.objectFields.nameStore = action.payload
    },
    setUrlRoute(state, action) {
        state.objectFields.urlRoute = action.payload
    },
    setDescriptionStore(state, action) {
        state.objectFields.descriptionStore = action.payload
    },
    setLogoStore(state, action) {
        state.objectFields.logoStore = action.payload
    },
    setAddressStore(state, action) {
        state.objectFields.addressStore = action.payload
    },
    setPhoneStore(state, action) {
        state.objectFields.phoneStore = action.payload
    },
    setEmailStore(state, action) {
        state.objectFields.emailStore = action.payload
    },
    setColorStore(state, action) {
        state.objectFields.colorStore = action.payload
    },
    setPolicyStore(state, action) {
        state.objectFields.policy = action.payload
    },
    setCurrencyStore(state, action) {//מטבע
        state.objectFields.currency = action.payload
    },
    setInventoryManagement(state, action) {//ניהול מלאי
        state.objectFields.inventoryManagement = action.payload
    },
    setOneProductPurchase(state, action) {//קניה חד מוצרית
        state.objectFields.oneProductPurchase = action.payload
    },
    setStorePerUser(state, action) {
        state.stores = action.payload;
    },
    setCurrentStore(state, action) {
        state.currentStore = action.payload;
    },


}

export default produce((state, action) => createReducer(state, action, FuncOpenStore), initialState);
