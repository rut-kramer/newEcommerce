import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action"
//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function StoreSettingsManagement(props) {
    //פונקציה שטוענת את הלוגו
    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                props.setLogoStore(reader.result)
            }
            reader.readAsDataURL(event)
        }
    }
    // checkbox -  פונקציה ל
    function checkBoxFunc() {
        let checkBox = document.getElementById("myCheck");
        let text = document.getElementById("text");
        if (checkBox.checked == true) {
            // ? true האם אני יוכלה להציב במשתנה בריקס את 
            //במקום כל האוביקט המוזר שהוא מציב
            props.setInventoryManagement("true")
            console.log(props.objectFields.inventoryManagement)
        }
        else {
            props.setInventoryManagement("false")
        }
    }


    // checkbox -  פונקציה ל
    function checkBoxFunc2() {
        let checkBox = document.getElementById("myCheckBuy");
        let text = document.getElementById("text");
        if (checkBox.checked == true) {
            props.setOneProductPurchase("true")
        }
        else {
            props.setOneProductPurchase("false")
        }
    }


    // setUrlRoute פונ ששולחת את הערך של האינפוט ל
    function funcSendValue(event) {
        props.setUrlRoute(event.target.value)
    }

    //פונקציה תקינות קלט לכתובת הניתוב 
    function convertSpacesToUnderlines(event) {
        let str = event.target.value
        //תנאי שרק כאשר יש רווח יכנס להמרה
        let hasSpace = str.indexOf(' ');
        if (hasSpace >= 0) {
            str = str.replace(/\s/g, '_')
            //הצבת המחרוזת במשתנה ברידקס
            props.setUrlRoute(str)
        }
        else {
            console.log("has not space!!!")
        }
    }
    //שמירת הטופס צריך לעשות פה ניתוב לאיפה שרותי תגיד
    function saveForm(event) {
        alert("save changes!")
        //פונקציה שתמנע את השרשור לכתובת האתר
        event.preventDefault()
    }

    return (
        <div>
            <h1>welcome to setting!!!!!</h1>
            <div>
                {/* תיהיה מתאימה ל2 השדותcheckbox  צריך לעשות שהפונקציה  */}
                <form onSubmit={saveForm}>
                    <label for="a">עדכן שם חנות</label><br></br>
                    <input required id="a" value={props.objectFields.nameStore ? props.objectFields.nameStore : ""} onChange={props.setNameStore}></input><br></br>

                    <label for="b">עדכן תאור לחנות</label><br></br>
                    <input id="b" value={props.objectFields.descriptionStore ? props.objectFields.descriptionStore : ""} onChange={props.setDescriptionStore}></input><br></br>

                    <label for="c">עדכן כתובת החנות</label><br></br>
                    <input required id="c" value={props.objectFields.addressStore ? props.objectFields.addressStore : ""} onChange={props.setAddressStore}></input><br></br>

                    <label for="d">עדכן טלפון החנות</label><br></br>
                    <input required id="d" value={props.objectFields.phoneStore ? props.objectFields.phoneStore : ""} onChange={props.setPhoneStore}></input><br></br>

                    <label for="e">עדכן אימיל החנות</label><br></br>
                    <input required id="e" value={props.objectFields.emailStore ? props.objectFields.emailStore : ""} onChange={props.setEmailStore} type="email"></input><br></br>

                    <label for="f">עדכן כתובת ניתוב החנות</label><br></br>
                    <input required type="text" id="f"
                        onBlur={convertSpacesToUnderlines}
                        value={props.objectFields.urlRoute ? props.objectFields.urlRoute : ""}
                        onChange={funcSendValue}></input><br></br>

                    <label for="g">עדכן צבע ראשי לחנות</label><br></br>
                    <input id="g" value={props.objectFields.colorStore ? props.objectFields.colorStore : ""} onChange={props.setColorStore}></input><br></br>

                    <label for="h">עדכן מדיניות לחנות</label><br></br>
                    <input id="h" value={props.objectFields.policy ? props.objectFields.policy : ""} onChange={props.setPolicyStore}></input><br></br>

                    <label for="myCheck">ניהול מלאי</label><br></br>
                    <input type="checkbox" id="myCheck"
                        onClick={checkBoxFunc}
                        onChange={props.setInventoryManagement}
                    /><br></br>

                    <label for="myCheckBuy">קניה חד מוצרית</label><br></br>
                    <input type="checkbox" id="myCheckBuy"
                        onClick={checkBoxFunc2}
                        onChange={props.setOneProductPurchase}
                    /><br></br>

                    <lable>בחר מטבע</lable>
                    <select onChange={(e) => props.setCurrencyStore(e.target.value)}>
                        {props.coins.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}:{item.country}</option>
                        ))
                        }
                    </select>

                    <div>
                        <label for="j">עדכן לוגו של החנות
                <img className="logoC" alt="" src={props.objectFields.logoStore ? props.objectFields.logoStore : ""}></img>
                        </label>
                        <input
                            type={"file"}
                            id="j"
                            accept="image/*"
                            onChange={(e) => handlerLogo(e.target.files[0])}
                        />
                    </div><br></br>
                    <input type="submit" value="שמור שינויים לחנות שלך"></input>

                </form>
            </div>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        objectFields: state.openStoreReducer.objectFields,
        coins: state.coinsReducer.coins

    }
}
const mapDispatchToProps = (dispatch) => ({
    setNameStore: (e) => dispatch(actions.setNameStore(e.target.value)),
    setDescriptionStore: (e) => dispatch(actions.setDescriptionStore(e.target.value)),
    setAddressStore: (e) => dispatch(actions.setAddressStore(e.target.value)),
    setPhoneStore: (e) => dispatch(actions.setPhoneStore(e.target.value)),
    setPolicyStore: (e) => dispatch(actions.setPolicyStore(e.target.value)),
    setEmailStore: (e) => dispatch(actions.setEmailStore(e.target.value)),
    setUrlRoute: (e) => dispatch(actions.setUrlRoute(e)),
    setCurrencyStore: (e) => dispatch(actions.setCurrencyStore(e)),
    setLogoStore: (e) => dispatch(actions.setLogoStore(e)),
    setColorStore: (e) => dispatch(actions.setColorStore(e.target.value)),
    setInventoryManagement: (e) => dispatch(actions.setInventoryManagement(e)),//ניהול מלאי
    setOneProductPurchase: (e) => dispatch(actions.setOneProductPurchase(e)),//קניה חד מוצרית
})
export default connect(mapStateToProps, mapDispatchToProps)(StoreSettingsManagement);
/////////////////////////////



