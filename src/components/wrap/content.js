import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'


function Content() {
    function Temporary() {
        return <>

            <h3>לשים במקומי קומפוננטה</h3>
        </>
    }
    function Admin() {
        return <h3>לשים במקומי קומפוננטה אדמין</h3>

    }
    function ProductPage() {
        return <>
            <ProductPage></ProductPage>
        </>

    }
    return (
        <div className="Content">
            <Switch>
                <Route path="/:storeName" component={Temporary} />
                <Route path="/:storeName/admin" component={Admin} />
                <Route path="/0/productPage" component={ProductPage} />

            </Switch>
        </div>
    )
}

export default Content;
