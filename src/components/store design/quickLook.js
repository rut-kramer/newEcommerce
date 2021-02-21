import React, { useState } from 'react'
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import  from 'react';


import ia006 from "../../assets/img/xd/ia_300000006.png";

//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function QuickLook(props) {
    const [value, setValue] = useState(0)

    function decrease() {
        setValue(value - 1)
    }

    function increase() {
        setValue(value + 1)
    }


    return (
        <>
            <div className="sideBar">
                <img alt="...." className="imageProduct mt-4"
                    src={ia006}>
                </img>
                <div className="detailsProduct mt-2">
                    <div>name</div>
                    <div>price</div>
                    <div className="qu mt-4">Quantity:</div>
                    <div className="def-number-input number-input">
                        <button onClick={decrease} className="minus"></button>
                        <input className="quantity" name="quantity"
                            value={value}
                            onChange={() => console.log('change')}
                            type="number" />
                        <button onClick={increase} className="plus"></button>
                    </div>
                    <button className="btnCart">
                        <FontAwesomeIcon className="mr-2" icon={['fas', 'shopping-cart']}></FontAwesomeIcon>ADD TO CART
                        </button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        //אפשר לקרוא שם אחר לאוביקט
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(QuickLook);


/////////////////////////////


