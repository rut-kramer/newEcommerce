import produce from 'immer';
import createReducer from '../reducerUtils';
import interior from "../../../assets/img/xd/interior-with-white-sofa@2x.png";
import img3 from "../../../assets/img/xd/ia_300000045.png";

const initialState = {
        //צריך לוודא במידה והחנות חדשה או עודכנה עכשיו שכל הפרטים מגיעים עם פופולייט אחרת אולי לא יעבוד
        bullcommerceHeaderDesign: {},
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


const bullcommerceHeader = {

        //BHD=bullcommerceHeaderDesign
        setBHD(state, action) {
                debugger
                state.bullcommerceHeaderDesign = action.payload;
        },
        setImagesArr(state, action) {
                debugger
                state.bullcommerceHeaderDesign.sliderImages[state.changeImgInCurrentLocation] = action.payload;
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
        addPictureToSliderImages(state, action) {
                state.bullcommerceHeaderDesign.sliderImages.push(action.payload);
        },
        setBhTitle(state, action) {
                debugger
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