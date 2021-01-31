import React, { useState } from 'react';
import { connect } from "react-redux";
import { actions } from "../redux/action";
import { useHistory } from "react-router-dom";

function OpenStore(props) {

    const history = useHistory();

    const [fileToUpload, setFileToUpload] = useState(null);

    const handlerLogo = (event) => {
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                props.setLogoStore(reader.result)
            }
            reader.readAsDataURL(event)
            setFileToUpload(event);
        }
    }

    const convertSpacesToUnderlines = (event) => {

        let str = event.target.value;
        let hasSpace = str.indexOf(' ');
        if (hasSpace > -1)
            str = str.replace(/\s/g, '_');

        props.setUrlRoute(str);
    }

    const onSubmitStoreDetails = async (event) => {

        event.preventDefault()
         props.createNewStore({ "store": props.objectFields, "file": fileToUpload })
        history.push("/" + props.objectFields.urlRoute)
    }

    return (
        <>
            <h1>Please, Fill your store details...</h1><br></br>
            <form onSubmit={onSubmitStoreDetails}>
                <input required placeholder="הכנס שם חנות" type="text" id="fname"
                    onBlur={convertSpacesToUnderlines} onChange={props.setNameStore}></input><br></br>
                <input placeholder="הכנס תאור לחנות" onChange={props.setDescriptionStore}></input><br></br>
                <input placeholder="הכנס כתובת החנות" onChange={props.setAddressStore}></input><br></br>
                <input type={"tel"} placeholder="הכנס טלפון" onChange={props.setPhoneStore}></input><br></br>
                <input type={"email"} placeholder="הכנס אימיל" onChange={props.setEmailStore}></input><br></br>
                <label>בחר צבע ראשי לחנות</label><br></br>
                <input type={"color"} placeholder="  בחר צבע ראשי לחנות   " onChange={props.setColorStore}></input><br></br>
                <input placeholder="הכנס מדיניות" onChange={props.setPolicyStore}></input><br></br>
                <label>בחר מטבע</label>
                <select onChange={(e) => props.setCurrencyStore(e.target.value)}>
                    {props.coins.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}:{item.country}</option>
                    ))}
                </select>
                <div>
                    <label htmlFor="logoS">
                <img className="logoC" alt="הכנס לוגו של החנות" src={props.objectFields.logoStore}></img>
                    </label>
                    <input
                        type={"file"}
                        id="logoS"
                        // htmlFor="myInput"
                        accept="image/*"
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

        objectFields: state.openStoreReducer.objectFields,
        storeId: state.openStoreReducer.storeId,
        coins: state.coinsReducer.coins
    }
}
const mapDispatchToProps = (dispatch) => ({
    setNameStore: (e) => dispatch(actions.setNameStore(e.target.value)),
    setUrlRoute: (e) => dispatch(actions.setUrlRoute(e)),
    setDescriptionStore: (e) => dispatch(actions.setDescriptionStore(e.target.value)),
    setAddressStore: (e) => dispatch(actions.setAddressStore(e.target.value)),
    setPhoneStore: (e) => dispatch(actions.setPhoneStore(e.target.value)),
    setPolicyStore: (e) => dispatch(actions.setPolicyStore(e.target.value)),
    setEmailStore: (e) => dispatch(actions.setEmailStore(e.target.value)),
    setCurrencyStore: (e) => dispatch(actions.setCurrencyStore(e)),
    setLogoStore: (e) => dispatch(actions.setLogoStore(e)),
    setColorStore: (e) => dispatch(actions.setColorStore(e.target.value)),
    createNewStore: (objectFields) => dispatch(actions.createNewStore(objectFields)),
    uploadImage: (x) => dispatch(actions.uploadImage(x)),
})
export default connect(mapStateToProps, mapDispatchToProps)(OpenStore);