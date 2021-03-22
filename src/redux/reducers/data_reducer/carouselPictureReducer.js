import produce from 'immer';
import createReducer from "../reducerUtils";

import interior from "../../../assets/img/xd/interior-with-white-sofa@2x.png";
import img3 from "../../../assets/img/xd/ia_300000045.png"


const initialState = {
    ImagesArr: [{
        src: "url(" + interior + ")",
    },
    {
        src: "url(" + img3 + ")",
    }
    ],

}

const carouselImages = {
    setTitle(state, action) {
        debugger
        state.title = action.payload
    },


}

export default produce((state, action) => createReducer(state, action, carouselImages), initialState);
