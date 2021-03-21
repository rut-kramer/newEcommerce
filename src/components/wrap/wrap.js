import React, { useState } from 'react';

import './wrap-component.css'
import Content from './content';
import Configurator from './configurator';
import TopFrame from './topFrame';

function Wrap(props) {
    const [flagCon, setFlagCon] = useState(true)
    return (
        <div style={{
            display: "flex",
            position: "relative"
        }}>
            <TopFrame setFlagCon={() => setFlagCon(!flagCon)}></TopFrame>
            <Configurator state={props} flag={flagCon} />
            <main className="withRouter(Wrap)-content-13">
                <Content />

            </main>
        </div >
    )
}
export default Wrap;
