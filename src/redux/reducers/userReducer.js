import produce from 'immer';
import createReducer from './reducerUtils';

const initialState = {
    user: {
        //צריך להגיע מהפירבייס
        //לא לכתוב פה סתם ID זה צריך להיות ID מיוחד שפיירבייס נותן- אחרת זה נופל ולא יכול להכניס חנות חדשה!!!
        //חובה לעבור בדף לוגין משם מתקבל האיידי ואח"כ לנתב לדף שרוצים!!!
        _id: "",
        uid: "",
        username: "",
        email: "",
        tokenFromCookies: "",
        profilePicture: ""
    },
    storesOfUser: [],
    lastUpdatedUserStore: [],
    hasStores: true
}

const user = {

    setUserId(state, action) {
        state.user._id = action.payload
    },

    setUser(state, action) {
        state.user.username = action.payload.username;
        state.user.email = action.payload.email;
        state.user.uid = action.payload.uid;
        state.user.tokenFromCookies = action.payload.tokenFromCookies;
    },
    setUsername(state, action) {
        state.user.username = action.payload;
    },

    setProfilePicture(state, action) {
        state.user.profilePicture = action.payload;
    },
    setStorePerUser(state, action) {
        state.storesOfUser = action.payload;
    },
    setHasStores(state, action) {
        state.hasStores = action.payload
    },
    setLastUpdatedUserStore(state, action) {
         
        if (action.payload === null || action.payload === [] || action.payload.length === 0)
            state.hasStores = false;
        state.lastUpdatedUserStore = action.payload;
    },
    deleteOldStore(state, action) {
         ;
        state.storesOfUser = state.storesOfUser.filter(x => x._id != action.payload);    
},

}

export default produce((state, action) => createReducer(state, action, user), initialState);