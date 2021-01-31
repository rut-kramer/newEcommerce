// import produce from 'immer';
// import createReducer from "../reducerUtils";
// import tempLogo from '../../../assets/leader_logo.png';
// const initialState = {
//     //כל הנתונים שצריכים להשתמש בהם בכל הקומפוננטות
//     logoDesign: {
//         logo: tempLogo,
//         LogoYOrN: true,
//         logoCNYOrN: false,
//         logoCompanyName: "",
//         logoBorderRadiusLogo: "",
//         logoWidth: "",
//         logoHeight: "",
//         logoBackgroundOnlyPng: "",
//         logoSelectRadiuseView: "",
//         logoSelect: false,
//         currentComponent: "",
//         //לתוכו נכניס את שם הקומפוננטה שאותה נטעין בקונפיגורטור לדוג לוגו
//     }
// }

// const logoDesignFunc = {
//     //כל הפונקציות שישנו נתונים שהכנסתי לסטייט
//     setCurrentComponent(state, action) {
//         state.logoDesign.currentComponent = action.payload
//     },
//     setLogo(state, action) {
//         state.logoDesign.logo = action.payload;
//     },
//     setLogoYOrN(state, action) {
//         state.logoDesign.LogoYOrN = !state.logoDesign.LogoYOrN;
//     },
//     setLogoCompanyName(state, action) {
//         state.logoDesign.logoCompanyName = action.payload;
//     },
//     setLogoBorderRadiusLogo(state, action) {
//         state.logoDesign.logoBorderRadiusLogo = action.payload;
//     },
//     setLogoWidth(state, action) {
//         state.logoDesign.logoWidth = action.payload;
//     },
//     setLogoHeight(state, action) {
//         state.logoDesign.logoHeight = action.payload;
//     },

// }

// export default produce((state, action) => createReducer(state, action, logoDesignFunc), initialState);
