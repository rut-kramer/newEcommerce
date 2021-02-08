import React from 'react'
import { connect } from "react-redux";
import { actions } from "../../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import ia006 from "../../assets/img/xd/ia_300000006.png";

//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function quickLook(props) {
    return (
        <>
            <div>
                <img alt="...."
                    src={ia006}>

                </img>
                <div>name</div>
                <div>price</div>
                <div>quentity
                <div>
                        <FontAwesomeIcon icon={['fas', 'minus']}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={['fas', 'plus']}></FontAwesomeIcon>
                    </div>
                </div>
                <button>add to cart<FontAwesomeIcon icon={['fas', 'shopping-cart']}></FontAwesomeIcon>
                </button>

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
export default connect(mapStateToProps, mapDispatchToProps)(quickLook);


/////////////////////////////


