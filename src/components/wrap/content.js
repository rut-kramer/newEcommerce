import React from 'react';
import { Switch, Route } from "react-router-dom";

import './wrap-component.css'


function Content() {
    function Temporary() {
        return <h3>לשים במקומי קומפוננטה</h3>
    }
    function Admin() {
        return <h3>לשים במקומי קומפוננטה אדמין</h3>
    }
    return (
        <div className="Content">
                <Switch>
                    <Route path="/:storeName" component={Temporary} />
                    <Route path="/:storeName/admin" component={Admin} />
                </Switch>
            </div>
        )
}

export default Content;
