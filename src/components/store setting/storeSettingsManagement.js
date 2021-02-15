import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../redux/action"
function StoreSettingsManagement(props) {

    useEffect(() => {
        setDetailsStore(props.objectFields)
    }, [])

    const [detailsStore, setDetailsStore] = useState({
        storeName: "",
        urlRoute: "",
        storeDescription: "",
        address: "",
        tel: "",
        email: "",
        colorDominates: "",
        policy: "",
        currency: "",
        logo: "",
        inventoryManagement: "",
        oneProductPurchase: "",

    });

    function changeStoreDetails(event) {
        setAllDetailsStore(event.target.name, event.target.value)
    }
    function setAllDetailsStore(name, value) {
        setDetailsStore({
            ...detailsStore,
            [name]: value
        }
        )
    }
    function handlerLogo(event) {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setAllDetailsStore("logo", reader.result)
            }
            reader.readAsDataURL(event)
        }
    }


    function funcSendValue(event) {
        setAllDetailsStore("urlRoute", event.target.value)

    }

    function convertSpacesToUnderlines(event) {
        let str = event.target.value
        let hasSpace = str.indexOf(' ');
        if (hasSpace >= 0)
            str = str.replace(/\s/g, '_')
        setAllDetailsStore("urlRoute", str)
    }
    function saveForm(event) {
        alert("save changes!")
        event.preventDefault()
        props.setSaveAllDetailsStore(detailsStore)

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
                        value={detailsStore.storeName ? detailsStore.storeName : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="b">עדכן תאור לחנות</label><br></br>
                    <input
                        id="b"
                        name="storeDescription"
                        value={detailsStore.storeDescription ? detailsStore.storeDescription : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>
                    <label for="c">עדכן כתובת החנות</label><br></br>
                    <input
                        id="c"
                        name="address"
                        required
                        value={detailsStore.address ? detailsStore.address : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="d">עדכן טלפון החנות</label><br></br>
                    <input
                        required
                        id="d"
                        name="tel"
                        value={detailsStore.tel ? detailsStore.tel : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="e">עדכן אימיל החנות</label><br></br>
                    <input
                        id="e"
                        name="email"
                        required
                        value={detailsStore.email ? detailsStore.email : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="f">עדכן כתובת ניתוב החנות</label><br></br>
                    <input
                        required
                        type="text"
                        id="f"
                        value={detailsStore.urlRoute ? detailsStore.urlRoute : ""}
                        onBlur={convertSpacesToUnderlines}
                        onChange={funcSendValue}

                    ></input><br></br>

                    <label for="g">עדכן צבע ראשי לחנות</label><br></br>
                    <input
                        id="g"
                        value={detailsStore.colorDominates ? detailsStore.colorDominates : ""}
                        onChange={changeStoreDetails}
                    ></input><br></br>

                    <label for="h">עדכן מדיניות לחנות</label><br></br>
                    <input
                        id="h"
                        name="policy"
                        value={detailsStore.policy ? detailsStore.policy : ""}
                        onChange={changeStoreDetails}

                    ></input><br></br>


                    <lable>בחר מטבע</lable>
                    <select
                        onChange={e => setAllDetailsStore("currency", e.target.value)}
                    >
                        {props.coins.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}:{item.country}</option>
                        ))
                        }
                    </select>

                    <div>
                        <label for="j">עדכן לוגו של החנות
                <img className="logoC" alt=""
                                src={detailsStore.logo ? detailsStore.logo : ""}></img>
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
    setSaveAllDetailsStore: (e) => dispatch(actions.setSaveAllDetailsStore(e))

})
export default connect(mapStateToProps, mapDispatchToProps)(StoreSettingsManagement);



