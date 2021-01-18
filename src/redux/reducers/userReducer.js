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
    }

}

export default produce((state, action) => createReducer(state, action, user), initialState);