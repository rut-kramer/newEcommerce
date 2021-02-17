import React from 'react';

import './wrap-component.css'
import Content from './content';
import Configurator from './configurator';

function Wrap(props) {
    return (
        <div style={{
            display: "flex",
            position: "relative"
        }}>
            <main className="withRouter(Wrap)-content-13">
                <Content />

            </main>
            <Configurator state={props} />
        </div >
    )
}
export default Wrap;
