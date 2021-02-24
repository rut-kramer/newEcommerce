import produce from 'immer';
import createReducer from '../reducerUtils';


const initialState = {
    quote:
    {
     name:"",
     description: "",
     quillStyle:"",
    },
    papers:[]
    }


const quill = {

setQuillStyle(state, action) {
    state.quote.quillStyle = action.payload;
},
setQuillStyleFromInput(state, action) {
    state.quote.quillStyle = action.payload.target.value;
},
setQuillName(state, action) {
    state.quote.name = action.payload.target.value;
},
setQuillDescription(state, action) {
    state.quote.description = action.payload.target.value;
},
setPapers(state, action) {
    state.papers = action.payload;
},
setQuote(state, action) {
    state.quote = action.payload;
},
deleteOldPaper(state, action) {
    debugger;
    state.papers = state.papers.filter(x => x._id !== action.payload);
},
editOldPaper(state, action) {
    state.papers = state.papers.filter(x => x._id !== action.payload._id);
    state.papers.push(action.payload);
}
}
export default produce((state, action) => createReducer(state, action, quill), initialState);