import React from 'react'
import { connect } from "react-redux";
import { actions } from "../redux/action";


//בתוכ הסוגריים של הפונקציה מקבלים את הפרופס
function TopFooter(props) {
    return (
        <>
            <h3 className="borderTop" >!!!!!כל הזכויות שמורות ללידר</h3>
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
export default connect(mapStateToProps, mapDispatchToProps)(TopFooter);


/////////////////////////////


