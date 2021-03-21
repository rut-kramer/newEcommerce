import React, { useState, useEffect } from 'react';

import './wrap-component.css'
import Content from './content';
import Configurator from './configurator';
import TopFrame from './topFrame';
import { connect } from 'react-redux';
import { actions } from '../../redux/action';
import $ from 'jquery';

function Wrap(props) {
    const [flagCon, setFlagCon] = useState(true);
    useEffect(() => {
        let w = $("main").width();
        props.setMainWidth(w);
    }, [])
    return (
        <div style={{
            display: "flex",
            position: "relative"
        }}>
            <TopFrame setFlagCon={() => setFlagCon(!flagCon)}></TopFrame>
            <Configurator state={props} flag={flagCon} />
            <main className="withRouter(Wrap)-content-13" style={{ paddingBottom: "0 !important" }}>
                <Content />

            </main>
        </div >
    )
}
export default connect(
    (state) => {
        return {
        }
    },
    (dispatch) => {
        return {
            setMainWidth: (e) => dispatch(actions.setMainWidth(e))
        }
    }

)(Wrap);
