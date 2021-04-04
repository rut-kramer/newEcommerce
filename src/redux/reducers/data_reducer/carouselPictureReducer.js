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
    ifDisplaySlider: true
}
const carouselImages = {
    setImagesArr(state, action) {
        if (state.ImagesArr[0].src == "url(" + interior + ")")
            state.ImagesArr = []
        state.ImagesArr.push({
            src: "url(" + action.payload + ")",
        })
    },
    setifDisplaySlider(state, action) {
        state.ifDisplaySlider = !state.ifDisplaySlider
    },


}

export default produce((state, action) => createReducer(state, action, carouselImages), initialState);
