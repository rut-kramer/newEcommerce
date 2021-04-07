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
    ifDisplaySlider: true,
    changeImgInCurrentLocation: -1
}
const carouselImages = {
    setImagesArr(state, action) {
        if (state.changeImgInCurrentLocation == -1) {
            if (state.ImagesArr[0].src == "url(" + interior + ")")
                state.ImagesArr = []
            state.ImagesArr.push({
                src: "url(" + action.payload + ")",
            })
        }
        else {
            state.ImagesArr[state.changeImgInCurrentLocation].src = "url(" + action.payload + ")"

        }
    },
    setifDisplaySlider(state, action) {
        state.ifDisplaySlider = !state.ifDisplaySlider
    },
    setChangeImgInCurrentLocation(state, action) {
        state.changeImgInCurrentLocation = action.payload;
    }

}

export default produce((state, action) => createReducer(state, action, carouselImages), initialState);
