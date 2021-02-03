import React from 'react';
import { Switch, Route } from "react-router-dom";
import Ecommerce from '../store design/Ecommerce';
import CategoryByFilter from '../store design/category_page/categoryByFilter'

import './wrap-component.css'


function Content() {
    function Temporary() {
        return <Ecommerce></Ecommerce>
        // <h3>לשים במקומי קומפוננטה</h3>
    }
    function Admin() {
        return <h3>לשים במקומי קומפוננטה אדמין</h3>
    }
    return (
        <div className="Content">
            <Switch>
                <Route path="/filter-category" component={CategoryByFilter} />
                <Route path="/:storeName" component={Temporary} />
                <Route path="/:storeName/admin" component={Admin} />
            </Switch>
        </div>
    )
}

export default Content;
