import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
    //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
    title: "",
    alignment: ""
}

const bullPageEdit = {
    //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
    setTitle(state, action) {
        state.title = action.payload
    },
    setAlignment(state, action) {
        state.alignment = action.payload
    },


}

export default produce((state, action) => createReducer(state, action, bullPageEdit), initialState);
