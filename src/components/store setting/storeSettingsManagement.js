import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../redux/action"
function StoreSettingsManagement(props) {

    useEffect(() => {
        setStoreDetails(props.objectFields)
    }, [])

    const [storeDetails, setStoreDetails] = useState({
        storeName: "",
        urlRoute: "",
        storeDescription: "",
        logo: "",
        address: "",
        tel: "",
        email: "",
        colorDominates: "",
        policy: "",
        currency: "",
        inventoryManagement: "",
        oneProductPurchase: "",

    });

    function changeStoreDetails(event) {
        setAllStoreDetails(event.target.name, event.target.value)
    }
    function setAllStoreDetails(name, value) {
        setStoreDetails({
            ...storeDetails,
            [name]: value
        }
        )
    }
    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setAllStoreDetails("logo", reader.result)
            }
            reader.readAsDataURL(event)
        }
    }


    function funcSendValue(event) {
        setAllStoreDetails("urlRoute", event.target.value)

    }

    function convertSpacesToUnderlines(event) {
        let str = event.target.value
        let hasSpace = str.indexOf(' ');
        if (hasSpace >= 0)
            str = str.replace(/\s/g, '_')
        setAllStoreDetails("urlRoute", str)
    }
    function saveForm(event) {
        alert("save changes!")
        event.preventDefault()
        props.setSaveAllStoreDetails(storeDetails)

    }

    return (
        <div>
            <h1>welcome to setting!!!!!</h1>
            <div>
                <form onSubmit={saveForm}>
                    <label for="a">עדכן שם חנות</label><br></br>
                    <input id="a"
                        required
                        name="storeName"
                        value={storeDetails.storeName ? storeDetails.storeName : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="b">עדכן תאור לחנות</label><br></br>
                    <input
                        id="b"
                        name="storeDescription"
                        value={storeDetails.storeDescription ? storeDetails.storeDescription : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="c">עדכן כתובת החנות</label><br></br>
                    <input
                        id="c"
                        name="address"
                        required
                        value={storeDetails.address ? storeDetails.address : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="d">עדכן טלפון החנות</label><br></br>
                    <input
                        required
                        id="d"
                        name="tel"
                        value={storeDetails.tel ? storeDetails.tel : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="e">עדכן אימיל החנות</label><br></br>
                    <input
                        id="e"
                        name="email"
                        required
                        value={storeDetails.email ? storeDetails.email : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="f">עדכן כתובת ניתוב החנות</label><br></br>
                    <input
                        required
                        type="text"
                        id="f"
                        value={storeDetails.urlRoute ? storeDetails.urlRoute : ""}
                        onBlur={convertSpacesToUnderlines}
                        onChange={funcSendValue}

                    ></input><br></br>

                    <label for="g">עדכן צבע ראשי לחנות</label><br></br>
                    <input
                        id="g"
                        value={storeDetails.colorDominates ? storeDetails.colorDominates : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="h">עדכן מדיניות לחנות</label><br></br>
                    <input
                        id="h"
                        name="policy"
                        value={storeDetails.policy ? storeDetails.policy : ""}
                        onChange={changeStoreDetails}

                    ></input><br></br>


                    <lable>בחר מטבע</lable>
                    <select
                        onChange={e => setAllStoreDetails("currency", e.target.value)}
                    >
                        {props.coins.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}:{item.country}</option>
                        ))
                        }
                    </select>

                    <div>
                        <label for="j">עדכן לוגו של החנות
                <img className="logoC" alt=""
                                src={storeDetails.logo ? storeDetails.logo : ""}></img>
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
        objectFields: state.storeReducer.objectFields,
        coins: state.coinsReducer.coins

    }
}
const mapDispatchToProps = (dispatch) => ({
    setSaveAllStoreDetails: (e) => dispatch(actions.setSaveAllStoreDetails(e))

})
export default connect(mapStateToProps, mapDispatchToProps)(StoreSettingsManagement);



