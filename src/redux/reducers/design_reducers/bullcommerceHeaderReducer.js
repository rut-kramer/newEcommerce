import produce from 'immer';
import createReducer from '../reducerUtils';
import interior from "../../../assets/img/xd/interior-with-white-sofa@2x.png";
import img3 from "../../../assets/img/xd/ia_300000045.png";

const initialState = {
        bullcommerceHeaderDesign: {},
        ImagesArr: [{
                src: interior
        },
        {
                src: img3
        }
        ],
        ifDisplaySlider: true,
        changeImgInCurrentLocation: -1
}


const bullcommerceHeader = {

        //BHD=bullcommerceHeaderDesign
        setBHD(state, action) {
                state.bullcommerceHeaderDesign = action.payload;
        },
        setImagesArr(state, action) {
                state.bullcommerceHeaderDesign.sliderImages.push(action.payload);
                // if (state.changeImgInCurrentLocation == -1) {
                //         if (state.ImagesArr[0].src == "url(" + interior + ")")
                //                 state.ImagesArr = []
                //         state.ImagesArr.push({
                //                 src: "url(" + action.payload + ")",
                //         })
                // }
                // else {
                //         state.ImagesArr[state.changeImgInCurrentLocation].src = "url(" + action.payload + ")"

                // }
        },
        setBhTitle(state, action) {
                state.bullcommerceHeaderDesign.title.textContent = action.payload
        },
        setifDisplaySlider(state, action) {
                state.ifDisplaySlider = !state.ifDisplaySlider
        },
        setChangeImgInCurrentLocation(state, action) {
                state.changeImgInCurrentLocation = action.payload;
        }




}

export default produce((state, action) => createReducer(state, action, bullcommerceHeader), initialState);