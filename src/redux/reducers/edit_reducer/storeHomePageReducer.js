// import createReducer from './reducerUtils'
// import produce from 'immer';
// import tempImage from "../../assets/main-pic.png"


// const initialState = {
//         //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
//         homeStoreDesign: {
//                 //לתוכו נכניס את שם הקומפוננטה שאותה נטעין בקונפיגורטור לדוג לוגו
//                 imageImage: tempImage,
//                 imageYOrN: true,
//                 imageHeight: "",
//                 ImageCompanyName: "",
//                 ImageBorderRadiusImage: "0",
//                 ImageWidth: "50",
//                 ImageHeight: "",
//                 // currentComponent: "",

//                 // titleTextTitle: "",
//                 // titleFont: "",
//                 // titleTextWeight: "700",
//                 // titleTextSize: "40",
//                 // titleLineHeight: "1.4",
//                 // titleColorText: "",
//                 // titleAlignment: "",
//                 // font-size: 40px;
//                 // line-height: 1.4;
//                 // font-weight: 700;

//                 //   לכל משתנה כדי לא להכפיל את כל הרדוסרJSON  יצרתי אוביקט
//                 titleText:
//                 {
//                         onThePicture: "",
//                         titleCategory: "",
//                         titleProduct: "",
//                 },
//                 titleFont: {
//                         onThePicture: "",
//                         titleCategory: "",
//                         titleProduct: "",
//                         textIntoCategory: "",


//                 },
//                 // titleTextWeight: "",
//                 //לברר מה בדיוק מבצע
//                 titleTextWeight: {
//                         onThePicture: "",
//                         titleCategory: "",
//                         titleProduct: "",
//                         textIntoCategory: "",



//                 },

//                 titleTextSize: {
//                         onThePicture: "24",
//                         titleCategory: "20",
//                         titleProduct: "20",
//                         textIntoCategory: "16",


//                 },
//                 // titleAlignment: "",
//                 titleAlignment: {
//                         onThePicture: "",
//                         titleCategory: "",
//                         titleProduct: "",
//                         textIntoCategory: "",


//                 },
//                 // titleWidthText: "",
//                 // titleWidthText: {
//                 //         onThePicture: "",
//                 //         titleCategory: "",
//                 // },
//                 // titleLineHeight: "",
//                 titleLineHeight: {
//                         onThePicture: "1.2",
//                         titleCategory: "1.2",
//                         titleProduct: "1.2",
//                         textIntoCategory: "1.2",
//                 },
//                 // titleColorText: "",
//                 titleColorText: {
//                         onThePicture: "",
//                         titleCategory: "",
//                         titleProduct: "",
//                         textIntoCategory: "",
//                 },
//                 // aboutUsTitleYOrN: true,
//                 // aboutUsTitleYOrN: {
//                 //         onThePicture:true,
//                 //         titleCategory: true,
//                 // },
//                 BorderRadius: {
//                         category: "24",
//                         pictureFrame: "64",
//                         producFrametOnPageCategory: "24"
//                 },
//                 iconColor: "",
//                 iconSize: "16"
//         }
// }



// //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
// const homeDesign = {
//         //פונקציה זו מבצעת החלפה של הקומפוננטות בתוך הקונפיגורטור
//         setCurrentComponent(state, action) {
//                 state.homeStoreDesign.currentComponent = action.payload
//         },
//         //מכאן והלאה כל הפונקציות של עריכת תמונת החנות
//         setImageYOrN(state, action) {
//                 state.homeStoreDesign.imageYOrN = !state.homeStoreDesign.imageYOrN;
//         },
//         setImage(state, action) {
//                 state.homeStoreDesign.imageImage = action.payload;
//         },
//         setImageCompanyName(state, action) {
//                 state.homeStoreDesign.ImageCompanyName = action.payload;
//         },
//         setImageBorderRadius(state, action) {
//                 state.homeStoreDesign.ImageBorderRadiusImage = action.payload;
//         },
//         setImageWidth(state, action) {
//                 state.homeStoreDesign.ImageWidth = action.payload;
//         },
//         setImageHeight(state, action) {
//                 state.homeStoreDesign.ImageHeight = action.payload;
//         },
//         ///////////////////////////////////////////////////
//         setBorderRadius(state, action) {
//                 state.homeStoreDesign.BorderRadius[action.payload.key] = action.payload.frame;
//         },
//         //////////////////////////////////////////////////////


//         // title פונקציות לשינוי כיתוב העתקתי אותן מקומפוננטת  
//         // מכאן והלאה פונקציות לעריכת טקסט. משמש לכותרות הקטגוריה,המוצרים 
//         // ולכיתוב שמעל התמונה בדף הבית

//         // setTitleFont(state, action) {
//         //         state.homeStoreDesign.titleFont = action.payload;
//         // },
//         //הפונקציות כתובות בצורה של מערך מכיוון שאותה פונקציה משמשת להרבה קומפוננטות אז כל פעם אני שולחת את שם הקומפוננטה הרצויה 
//         setTitleText(state, action) {
//                 state.homeStoreDesign.titleText[action.payload.k] = action.payload.e;
//         },
//         setTitleFont(state, action) {
//                 state.homeStoreDesign.titleFont[action.payload.k] = action.payload.e;
//         },
//         setTitleTextWeight(state, action) {
//                 state.homeStoreDesign.titleTextWeight[action.payload.k] = action.payload.e;
//         },
//         setTitleTextSize(state, action) {
//                 state.homeStoreDesign.titleTextSize[action.payload.k] = action.payload.e;
//         },
//         setTitleAlignment(state, action) {
//                 state.homeStoreDesign.titleAlignment[action.payload.k] = action.payload.e;
//         },
//         // setTitleWidthText(state, action) {
//         //         state.homeStoreDesign.titleWidthText[action.payload.k] = action.payload.e;
//         // },
//         setTitleLineHeight(state, action) {
//                 state.homeStoreDesign.titleLineHeight[action.payload.k] = action.payload.e;
//         },
//         setTitleColorText(state, action) {
//                 state.homeStoreDesign.titleColorText[action.payload.k] = action.payload.e;
//         },

//         // setAboutUsTitleYOrN(state, action) {
//         //         state.homeStoreDesign.aboutUsTitleYOrN = !state.homeStoreDesign.aboutUsTitleYOrN;
//         // },
//         /////מכאן עריכה לאיקונים
//         setColorIcon(state, action) {
//                 state.homeStoreDesign.iconColor = action.payload;
//         },
//         setIconSize(state, action) {
//                 state.homeStoreDesign.iconSize = action.payload;
//         },



// }
// export default produce((state, action) => createReducer(state, action, homeDesign), initialState);
