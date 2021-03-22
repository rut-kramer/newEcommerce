import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
    //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
    title: "",
    alignment: "center"
}

const bullPageEdit = {
    setTitle(state, action) {
        debugger
        state.title = action.payload
    },
    setAlignment(state, action) {
        debugger
        state.alignment = action.payload
    },


}

export default produce((state, action) => createReducer(state, action, bullPageEdit), initialState);
