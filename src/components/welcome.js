import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "../redux/action";

import { Col, Container, Row } from 'reactstrap';
import logoFurnitureShop from '../assets/media-gallery/modern-luxury-living-room-interior-black-sofa-with-dark-concrete-wall.png'
import logoAppBullcommerce from '../assets/apple-touch-icon.png'
import "./welcome.css"

function Welcome(props) {
    const history = useHistory();

    const [fileToUpload, setFileToUpload] = useState(null);

    const [storeDetails, setStoreDetails] = useState({
        storeName: "MY STORE",
        urlRoute: "MY_STORE",
        storeDescription: "THE BEST STORE IN THE WORLD",
        address: "JERUSALEM",
        tel: "02:6277134",
        email: "MYSTORE@GMAIL.COM",
        colorDominates: "RED",
        policy: "",
        currency: "",
        logo: logoFurnitureShop,
        checkInventoryManagement: false,
        checkoneProductPurchase: false


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
        skip()
    }

    function skip() {
        props.setTitle(storeDetails.storeName)
        props.setAllOrders([])
        props.setCategories([])
        props.setAttribute([])
        props.setProducts([])
        props.createNewStore({ "store": storeDetails, "file": fileToUpload })
        history.push("/" + storeDetails.urlRoute);
    }

    function next(e) {
        e.preventDefault()
        let f = document.getElementById("fname").value
        if (f != "") {
            let a = document.getElementById("welcomeStep1")
            a.style.display = "none"
            let r = document.getElementById("addDetails");
            r.style.display = "block"
        }
        else
            alert("!זהו שדה חובה")
    }
    return (
        <>
            <Container fluid className="welcome">
                <div className="welcomeDiv">
                    <form onSubmit={onSubmitStoreDetails}>
                        <div id="welcomeStep1" style={{ display: "block" }}>
                            <Row>
                                <img className="welcomeLogoPlace mt-3" src={logoAppBullcommerce} ></img>

                            </Row>
                            <Row md="12">
                                <Col md="10" className="mt-4 welcomeCOl">
                                    <div>
                                        <input className="welcomeInputName"
                                            placeholder="Enter shop name"
                                            required
                                            type="text"
                                            name="storeName"
                                            id="fname"
                                            onBlur={convertSpacesToUnderlines}
                                            onChange={changeStoreDetails}
                                        ></input>
                                    </div>
                                </Col>
                            </Row>
                            <Row md="12">
                                <button className="welcomeButtonNext mt-4" id="welcomeStep1"
                                    onClick={next}>next</button>
                            </Row>
                        </div>

                        <br></br>
                        <div id="addDetails" style={{ display: "none" }}>
                            <input className="welcomeAllInput"
                                required
                                placeholder="Describe your shop"
                                name="storeDescription"
                                onChange={changeStoreDetails}
                            ></input>

                            <br></br>


                            <input className="welcomeAllInput"
                                required
                                placeholder="Enter shop address"
                                name="address"
                                onChange={changeStoreDetails}
                            ></input><br></br>
                            <input className="welcomeAllInput"
                                required
                                type={"tel"}
                                placeholder="Enter mobile phone"
                                name="tel"
                                onChange={changeStoreDetails}
                            ></input><br></br>
                            <input className="welcomeAllInput"
                                type={"email"}
                                placeholder=" Enter email address "
                                required
                                name="email"
                                onChange={changeStoreDetails}
                            ></input><br></br>
                            <input className="welcomeAllInput"
                                required
                                placeholder="Enter authorities "
                                name="policy"
                                onChange={changeStoreDetails}
                            ></input><br></br>
                            <label>Enter shop main color </label><br></br>
                            <input className="welcomeAllInput"
                                type={"color"}
                                placeholder="  Enter shop main color "
                                name="colorDominates"
                                onChange={changeStoreDetails}
                            ></input><br></br>
                            <div className="mb-1">

                                <input id="myCheck"
                                    className="welcomeChecboxInput mr-2"
                                    name="checkInventoryManagement"
                                    type="checkbox"
                                    checked={storeDetails.checkInventoryManagement}
                                    onChange={(e) => setAllStoreDetails("checkInventoryManagement", e.target.checked)}
                                />
                                <label htmlFor="myCheck">ניהול מלאי</label>
                            </div>
                            <div>
                                <input id="myCheck"
                                    className="welcomeChecboxInput mr-2"
                                    name="checkoneProductPurchase"
                                    type="checkbox"
                                    checked={storeDetails.checkoneProductPurchase}
                                    onChange={(e) => setAllStoreDetails("checkoneProductPurchase", e.target.checked)}
                                />
                                <label htmlFor="myCheck">קניה חד מוצרית</label>

                            </div>

                            <label className="welcome-Currency">בחר מטבע</label><br></br>
                            <select className="welcome-CurrencySelect"
                                onChange={e => setAllStoreDetails("currency", e.target.value)}>
                                {props.coins.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}:{item.country}</option>
                                ))}
                            </select>
                            <div>
                                <label htmlFor="logoS">

                                    <img className="logoC" alt="הכנס לוגו של החנות"
                                    // src={storeDetails.logo}
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

                            <input className="welcome-btn mb-2"
                                type="submit" value="עבור לחנות שלך לדוגמא"></input>
                            <br></br>
                            <button className="welcome-btn" onClick={skip}>דלג על הזנת פרטים ועבור לחנות דמו</button>

                        </div>
                    </form>


                </div>

            </Container>
        </>
    )
}
const mapStateToProps = (state) => {
    return {

        coins: state.coinsReducer.coins
    }
}
const mapDispatchToProps = (dispatch) => ({
    createNewStore: (objectFields) => dispatch(actions.createNewStore(objectFields)),
    setSaveAllStoreDetails: (e) => dispatch(actions.setSaveAllStoreDetails(e)),
    setAllOrders: (e) => dispatch(actions.setAllOrders(e)),
    setCategories: (e) => dispatch(actions.setCategories(e)),
    setAttribute: (e) => dispatch(actions.setAttribute(e)),
    setProducts: (e) => dispatch(actions.setProducts(e)),
    setTitle: (e) => dispatch(actions.setTitle(e)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
