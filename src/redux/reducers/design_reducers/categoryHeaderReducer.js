import produce from 'immer';
import createReducer from '../reducerUtils';
import aa from "../../../assets/img/bg1.jpg"
// const initialState = {
//     image: "",
//     title: ""
// }
const initialState = {
    image: [
        {
            categoryName: "",
            img: ""
        }
    ],
    title: ""
}

const categoryHeader = {
    setCategoryImage(state, action) {
        state.image = action.payload
        // for (let index = 0; index < image.length; index++) {
        //     if (state.image[index].categoryName == action.payload.categoryName) {
        //         state.image[index].img == action.payload.img
        //     }
        // }     
    },
    setCategoryTitle(state, action) {
        state.title = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, categoryHeader), initialState);