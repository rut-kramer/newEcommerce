import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
    //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
    collapse: "",
    title: "",
    alignment: "center"
}

const bullPageEdit = {
    setTitle(state, action) {
        state.title = action.payload
    },
    setAlignment(state, action) {
        state.alignment = action.payload
    },
    setCollapse(state, action) {
        state.collapse = action.payload
    },


}

export default produce((state, action) => createReducer(state, action, bullPageEdit), initialState);
