import React, { useState } from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
import { useHistory } from "react-router-dom";

function OpenStore(props) {

    const history = useHistory();

    const [fileToUpload, setFileToUpload] = useState(null);

    const [storeDetails, setStoreDetails] = useState({
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
            setFileToUpload(event);
        }
    }
    function convertSpacesToUnderlines(event) {
        let str = event.target.value
        let hasSpace = str.indexOf(' ');
        if (hasSpace > -1)
            str = str.replace(/\s/g, '_')
        setAllStoreDetails("urlRoute", str)
    }



    const onSubmitStoreDetails = async (event) => {
        event.preventDefault()
        // props.setSaveAllDetailsStore(detailsStore)
        await props.createNewStore({ "store": storeDetails, "file": fileToUpload })
        history.push("/0/" + storeDetails.urlRoute);
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
                <label>בחר מטבע</label><br></br>
                <select
                    onChange={e => setAllStoreDetails("currency", e.target.value)}>
                    {props.coins.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}:{item.country}</option>
                    ))}
                </select>
                <div>
                    <label htmlFor="logoS">
                        <img className="logoC" alt="הכנס לוגו של החנות"
                            src={storeDetails.logo}
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
    setSaveAllStoreDetails: (e) => dispatch(actions.setSaveAllStoreDetails(e))
})
export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);