import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from "../../../redux/action"

function showPaper(props) {


    return (<> 
 <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }} 
 dangerouslySetInnerHTML={{ __html:props.quote ? props.quote.quillStyle ?props.quote.quillStyle : "" : "" }}></div>      
            </>
        )
}
    export default connect(
            (state) => {
                    return {                    
                        quote:state.quillReducer.quote,
                    }
            },
            (dispatch) => {
                    return {
                    }
            }
    )(showPaper);