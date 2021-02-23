import produce from 'immer';
import createReducer from '../reducerUtils';


const initialState = {
    quote:{
     name:"",
     description: "",
     quillText: "",
     quillStyle:"",
     file2:""
}
    }


const quill = {

    setFile2(state, action) {
        state.quote.file2 = action.payload;
},
setQuillText(state, action) {
    state.quote.quillText = action.payload;
},
setQuillStyle(state, action) {
    state.quote.quillStyle = action.payload.target.value;
},
setQuillName(state, action) {
    state.quote.name = action.payload.target.value;
},
setQuillDescription(state, action) {
    state.quote.name = action.payload.target.value;
}
}
export default produce((state, action) => createReducer(state, action, quill), initialState);