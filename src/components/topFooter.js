import React from 'react'
import { connect } from "react-redux";


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
    }
}
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(TopFooter);




