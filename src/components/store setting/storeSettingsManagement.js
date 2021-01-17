// import React from 'react'
// import { connect } from "react-redux";
// import { actions } from '../redux/action'
// //בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
// function StoreSettingsManagement(props) {
//     //פונקציה שטוענת את הלוגו
//     function handlerLogo(event) {
//         if (event) {
//             let reader = new FileReader();
//             reader.onloadend = () => {
//                 props.setLogoStore(reader.result)
//             }
//             reader.readAsDataURL(event)
//         }
//     }
//     // checkbox -  פונקציה ל
//     function checkBoxFunc() {
//         debugger
//         var checkBox = document.getElementById("myCheck");
//         var text = document.getElementById("text");
//         if (checkBox.checked == true) {
//             // console.log("choose!!!!!")
//             // ? true האם אני יוכלה להציב במשתנה בריקס את 
//             //במקום כל האוביקט המוזר שהוא מציב
//             props.setInventoryManagement("true")
//             console.log(props.objectFields.inventoryManagement)
//         }
//         else {
//             // ? false האם אני יוכלה להציב במשתנה בריקס את 
//             //במקום כל האוביקט המוזר שהוא מציב
//             props.setInventoryManagement("false")
//             console.log("not choose!!!!!")
//         }
//     }


//     // checkbox -  פונקציה ל
//     function checkBoxFunc2() {
//         var checkBox = document.getElementById("myCheckBuy");
//         var text = document.getElementById("text");
//         if (checkBox.checked == true) {
//             // console.log("choose!!!!!")
//             props.setOneProductPurchase("true")
//             console.log(props.objectFields.oneProductPurchase)
//         }
//         else {
//             props.setOneProductPurchase("false")
//             console.log("not choose!!!!!")
//         }
//     }


//     // setUrlRoute פונ ששולחת את הערך של האינפוט ל
//     function funcSendValue(event) {
//         props.setUrlRoute(event.target.value)
//     }

//     //פונקציה תקינות קלט לכתובת הניתוב 
//     function funcConvert2(event) {
//         var str = event.target.value
//         //תנאי שרק כאשר יש רווח יכנס להמרה
//         var hasSpace = str.indexOf(' ');
//         if (hasSpace >= 0) {
//             str = str.replace(/\s/g, '_')
//             //הצבת המחרוזת במשתנה ברידקס
//             props.setUrlRoute(str)
//         }
//         else {
//             console.log("has not space!!!")
//         }
//     }
//     //שמירת הטופס צריך לעשות פה ניתוב לאיפה שרותי תגיד
//     function saveForm(event) {
//         alert("save changes!")
//         //פונקציה שתמנע את השרשור לכתובת האתר
//         event.preventDefault()
//     }

//     return (
//         <div>
//             <h1>welcome to setting!!!!!</h1>
//             <div>
//                 {/* תיהיה מתאימה ל2 השדותcheckbox  צריך לעשות שהפונקציה  */}
//                 {/*ניהול מלאי וקניה חד מוצרית - checkbox */}
//                 <form onSubmit={saveForm}>
//                     <label for="a">עדכן שם חנות</label><br></br>
//                     <input required id="a" value={props.objectFields.nameStore ? props.objectFields.nameStore : ""} onChange={props.setNameStore}></input><br></br>

//                     <label for="b">עדכן תאור לחנות</label><br></br>
//                     <input id="b" value={props.objectFields.descriptionStore ? props.objectFields.descriptionStore : ""} onChange={props.setDescriptionStore}></input><br></br>

//                     <label for="c">עדכן כתובת החנות</label><br></br>
//                     <input required id="c" value={props.objectFields.addressStore ? props.objectFields.addressStore : ""} onChange={props.setAddressStore}></input><br></br>

//                     <label for="d">עדכן טלפון החנות</label><br></br>
//                     <input required id="d" value={props.objectFields.phoneStore ? props.objectFields.phoneStore : ""} onChange={props.setPhoneStore}></input><br></br>

//                     <label for="e">עדכן אימיל החנות</label><br></br>
//                     <input required id="e" value={props.objectFields.emailStore ? props.objectFields.emailStore : ""} onChange={props.setEmailStore} type="email"></input><br></br>

//                     <label for="f">עדכן כתובת ניתוב החנות</label><br></br>
//                     <input required type="text" id="f"
//                         onBlur={funcConvert2}
//                         value={props.objectFields.urlRoute ? props.objectFields.urlRoute : ""}
//                         onChange={funcSendValue}></input><br></br>

//                     {/* //לבקש מאוהב את הבלוק של הצבעים שהראה לי */}
//                     {/*לבינתיים עשיתי עם אינפוט*/}
//                     <label for="g">עדכן צבע ראשי לחנות</label><br></br>
//                     <input id="g" value={props.objectFields.colorStore ? props.objectFields.colorStore : ""} onChange={props.setColorStore}></input><br></br>

//                     <label for="h">עדכן מדיניות לחנות</label><br></br>
//                     <input id="h" value={props.objectFields.policy ? props.objectFields.policy : ""} onChange={props.setPolicyStore}></input><br></br>

//                     <label for="myCheck">ניהול מלאי</label><br></br>
//                     <input type="checkbox" id="myCheck"
//                         onClick={checkBoxFunc}
//                         onChange={props.setInventoryManagement}
//                     /><br></br>

//                     <label for="myCheckBuy">קניה חד מוצרית</label><br></br>
//                     <input type="checkbox" id="myCheckBuy"
//                         onClick={checkBoxFunc2}
//                         onChange={props.setOneProductPurchase}
//                     /><br></br>


//                     {/*  למטבעות drop down  צריך שיהיה  */}
//                     {/* <input placeholder="בחר מטבע" onChange={props.setCurrencyStore}></input><br></br> */}
//                     <label>בחר מטבע</label><br></br>
//                     <select>
//                         <option>"AED": "United Arab Emirates Dirham"</option>
//                         <option>"AFN": "Afghan Afghani",</option>
//                         <option>"ALL": "Albanian Lek"</option>
//                         <option>"AMD": "Armenian Dram"</option>
//                         <option> "ANG": "Netherlands Antillean Guilder"</option>
//                         <option>"AOA": "Angolan Kwanza"</option>
//                         <option>"ARS": "Argentine Peso"</option>
//                         <option>"AUD": "Australian Dollar"</option>
//                         <option>"AWG": "Aruban Florin",</option>
//                         <option>"AZN": "Azerbaijani Manat",</option>
//                         <option>"BAM": "Bosnia-Herzegovina Convertible Mark",</option>
//                         <option>"BBD": "Barbadian Dollar",</option>
//                         <option>"BDT": "Bangladeshi Taka",</option>
//                         <option>"BGN": "Bulgarian Lev",</option>
//                         <option>"BHD": "Bahraini Dinar",</option>
//                         <option>"BIF": "Burundian Franc",</option>
//                         <option>"BMD": "Bermudan Dollar",</option>
//                         <option>"BND": "Brunei Dollar",</option>
//                         <option>"BOB": "Bolivian Boliviano",</option>
//                         <option>"BRL": "Brazilian Real",</option>
//                         <option>"BSD": "Bahamian Dollar"</option>
//                         <option>"BTC": "Bitcoin",</option>
//                         <option>"BTN": "Bhutanese Ngultrum",</option>
//                         <option>"BWP": "Botswanan Pula",</option>
//                         <option>"BYN": "Belarusian Ruble",</option>
//                         <option>"BZD": "Belize Dollar",</option>
//                         <option>"CAD": "Canadian Dollar",</option>
//                         <option>"CDF": "Congolese Franc",</option>
//                         <option>"CHF": "Swiss Franc",</option>
//                         <option>"CLF": "Chilean Unit of Account (UF)"</option>
//                         <option>"CLP": "Chilean Peso",</option>
//                         <option>"CNH": "Chinese Yuan (Offshore)"</option>
//                         <option>"CNY": "Chinese Yuan",</option>
//                         <option>"COP": "Colombian Peso",</option>
//                         <option>"CRC": "Costa Rican Colón",</option>
//                         <option>"CUC": "Cuban Convertible Peso",</option>
//                         <option>"CUP": "Cuban Peso",</option>
//                         <option>"CVE": "Cape Verdean Escudo",</option>
//                         <option>"CZK": "Czech Republic Koruna",</option>
//                         <option>"DJF": "Djiboutian Franc",</option>
//                         <option>"DKK": "Danish Krone",</option>
//                         <option>"DOP": "Dominican Peso",</option>
//                         <option>"DZD": "Algerian Dinar",</option>
//                         <option>"EGP": "Egyptian Pound",</option>
//                         <option>"ERN": "Eritrean Nakfa",</option>
//                         <option>"ETB": "Ethiopian Birr",</option>
//                         <option>"EUR": "Euro",</option>
//                         <option>"FJD": "Fijian Dollar",</option>
//                         <option>"FKP": "Falkland Islands Pound",</option>
//                         <option>"GBP": "British Pound Sterling",</option>
//                         <option>"GEL": "Georgian Lari",</option>
//                         <option>"GGP": "Guernsey Pound",</option>
//                         <option>"GHS": "Ghanaian Cedi",</option>
//                         <option>"GIP": "Gibraltar Pound",</option>
//                         <option>"GMD": "Gambian Dalasi",</option>
//                         <option>"GNF": "Guinean Franc",</option>
//                         <option>"GTQ": "Guatemalan Quetzal",</option>
//                         <option>"GYD": "Guyanaese Dollar",</option>
//                         <option>"HKD": "Hong Kong Dollar",</option>
//                         <option>"HNL": "Honduran Lempira",</option>
//                         <option>"HRK": "Croatian Kuna",</option>
//                         <option>"HTG": "Haitian Gourde",</option>
//                         <option>"HUF": "Hungarian Forint",</option>
//                         <option>"IDR": "Indonesian Rupiah",</option>
//                         <option>"ILS": "Israeli New Sheqel",</option>
//                         <option>"IMP": "Manx pound",</option>
//                         <option>"INR": "Indian Rupee",</option>
//                         <option>"IQD": "Iraqi Dinar",</option>
//                         <option>"IRR": "Iranian Rial",</option>
//                         <option>"ISK": "Icelandic Króna",</option>
//                         <option>"JEP": "Jersey Pound",</option>
//                         <option>"JMD": "Jamaican Dollar",</option>
//                         <option>"JOD": "Jordanian Dinar",</option>
//                         <option>"JPY": "Japanese Yen",</option>
//                         <option>"KES": "Kenyan Shilling",</option>
//                     </select>

//                     <div>
//                         <label for="j">עדכן לוגו של החנות
//                 <img className="logoC" alt="" src={props.objectFields.logoStore ? props.objectFields.logoStore : ""}></img>
//                         </label>
//                         <input
//                             type={"file"}
//                             id="j"
//                             accept="image/*"
//                             onChange={(e) => handlerLogo(e.target.files[0])}
//                         />
//                     </div><br></br>
//                     <input type="submit" value="שמור שינויים לחנות שלך"></input>

//                 </form>
//             </div>
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return {
//         objectFields: state.openStoreReducer.objectFields
//     }
// }
// const mapDispatchToProps = (dispatch) => ({
//     setNameStore: (e) => dispatch(actions.setNameStore(e.target.value)),
//     setDescriptionStore: (e) => dispatch(actions.setDescriptionStore(e.target.value)),
//     setAddressStore: (e) => dispatch(actions.setAddressStore(e.target.value)),
//     setPhoneStore: (e) => dispatch(actions.setPhoneStore(e.target.value)),
//     setPolicyStore: (e) => dispatch(actions.setPolicyStore(e.target.value)),
//     setEmailStore: (e) => dispatch(actions.setEmailStore(e.target.value)),
//     setUrlRoute: (e) => dispatch(actions.setUrlRoute(e)),
//     // setUrlRoute: (e) => { debugger; dispatch(actions.setUrlRoute(e)) },

//     setCurrencyStore: (e) => dispatch(actions.setCurrencyStore(e.target.value)),
//     setLogoStore: (e) => dispatch(actions.setLogoStore(e)),
//     setColorStore: (e) => dispatch(actions.setColorStore(e.target.value)),
//     setInventoryManagement: (e) => dispatch(actions.setInventoryManagement(e)),//ניהול מלאי
//     setOneProductPurchase: (e) => dispatch(actions.setOneProductPurchase(e)),//קניה חד מוצרית
// })
// export default connect(mapStateToProps, mapDispatchToProps)(StoreSettingsManagement);
// /////////////////////////////



