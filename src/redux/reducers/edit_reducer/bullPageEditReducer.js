import produce from 'immer';
import createReducer from "../reducerUtils";

const initialState = {
    collapse: "",
    title: "",//סלידר
    alignment: "center",//סלידר
    ifDisplayTitle: "true",//סלידר
    color: "white",//סלידר
    size: "",//סלידר
    currentIndexFromCarousl: 0,//סלידר
    backgroundMenu: "red",//הידר תפריט ניווט
}

const bullPageEdit = {
    setTitle(state, action) {
        state.title = action.payload
    },
    setAlignment(state, action) {
        state.alignment = action.payload
    },
    setColor(state, action) {
        state.color = action.payload
    },
    setSize(state, action) {
        state.size = action.payload
    },
    setCollapse(state, action) {
        state.collapse = action.payload
    },
    setIfDisplayTitle(state, action) {
        state.ifDisplayTitle = !state.ifDisplayTitle
    },
    setCurrentIndexFromCarousl(state, action) {
        state.currentIndexFromCarousl = action.payload
    },
    setBackgroundMenu(state, action) {//הידר תפריט ניווט
        state.backgroundMenu = action.payload
    },

}

export default produce((state, action) => createReducer(state, action, bullPageEdit), initialState);
