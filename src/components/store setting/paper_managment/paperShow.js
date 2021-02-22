import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actions } from "../../../redux/action"

function PaperShow(props) {
    return (
        )
    }
    export default connect(
            (state) => {
                    return {
                            // store: state.storeReducer.currentStore
                    }
            },
            (dispatch) => {
                    return {
                            newPaper: (paper) => { dispatch(actions.createNewPaper(paper)) }
                    }
            }
    )(PaperShow);