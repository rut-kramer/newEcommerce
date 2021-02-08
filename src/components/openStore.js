import React, { useState } from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
import { useHistory } from "react-router-dom";

function OpenStore(props) {

    const history = useHistory();

    const [fileToUpload, setFileToUpload] = useState(null);

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
        checkInventoryManagement: false,
        checkoneProductPurchase: false


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
            setFileToUpload(event);
        }
    }
    function convertSpacesToUnderlines(event) {
        let str = event.target.value
        let hasSpace = str.indexOf(' ');
        if (hasSpace > -1)
            str = str.replace(/\s/g, '_')
        setAllDetailsStore("urlRoute", str)
    }



    const onSubmitStoreDetails = async (event) => {
        event.preventDefault()
        // props.setSaveAllDetailsStore(detailsStore)
        await props.createNewStore({ "store": detailsStore, "file": fileToUpload })
        history.push("/0/" + detailsStore.urlRoute);
    }

    return (
        <>
            <h1>Please, Fill your store details...</h1><br></br>
            <form onSubmit={onSubmitStoreDetails}>
                <input
                    required
                    placeholder="הכנס שם חנות"
                    type="text"
                    name="storeName"
                    id="fname"
                    onBlur={convertSpacesToUnderlines}
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input
                    placeholder="הכנס תאור לחנות"
                    name="storeDescription"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input
                    placeholder="הכנס כתובת החנות"
                    name="address"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input
                    type={"tel"}
                    placeholder="הכנס טלפון"
                    name="tel"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input
                    type={"email"}
                    placeholder="הכנס אימיל"
                    name="email"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <label>בחר צבע ראשי לחנות</label><br></br>
                <input
                    type={"color"}
                    placeholder="  בחר צבע ראשי לחנות   "
                    name="colorDominates"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <input
                    placeholder="הכנס מדיניות"
                    name="policy"
                    onChange={changeStoreDetails}
                ></input><br></br>
                <label for="myCheck">ניהול מלאי</label><br></br>
                <input id="myCheck"
                    name="checkInventoryManagement"
                    type="checkbox"
                    checked={detailsStore.checkInventoryManagement}
                    onChange={(e) => setAllDetailsStore("checkInventoryManagement", e.target.checked)}
                />
                <br></br>
                <label for="myCheck">קניה חד מוצרית</label><br></br>
                <input id="myCheck"
                    name="checkoneProductPurchase"
                    type="checkbox"
                    checked={detailsStore.checkoneProductPurchase}
                    onChange={(e) => setAllDetailsStore("checkoneProductPurchase", e.target.checked)}
                />
                <br></br>
                <br></br>
                <label>בחר מטבע</label><br></br>
                <select
                    onChange={e => setAllDetailsStore("currency", e.target.value)}>
                    {props.coins.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}:{item.country}</option>
                    ))}
                </select>
                <div>
                    <label htmlFor="logoS">
                        <img className="logoC" alt="הכנס לוגו של החנות"
                            src={detailsStore.logo}
                        ></img>
                    </label>
                    <input
                        type={"file"}
                        id="logoS"
                        accept="image/*"
                        name="logo"
                        style={{
                            display: "none"
                        }}
                        onChange={(e) => handlerLogo(e.target.files[0])}
                    />
                </div><br></br>

                <input type="submit" value="עבור לחנות שלך לדוגמא"></input>

            </form>
        </>
    )

}

const mapStateToProps = (state) => {
    return {

        objectFields: state.storeReducer.objectFields,
        coins: state.coinsReducer.coins
    }
}
const mapDispatchToProps = (dispatch) => ({
    createNewStore: (objectFields) => dispatch(actions.createNewStore(objectFields)),
    setSaveAllDetailsStore: (e) => dispatch(actions.setSaveAllDetailsStore(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);