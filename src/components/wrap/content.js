import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'


function Content() {
    function Temporary() {
        return <>
            <ProductPage></ProductPage>

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
            {/* <Link to="pasiflora/productPage/nameProduct"></Link> */}
            <Switch>
                {/* <Route path="/:storeName/productPage/:name" component={ProductPage} /> */}
                <Route path="/:storeName" component={Temporary} />
                <Route path="/:storeName/admin" component={Admin} />
            </Switch>
        </div>
    )
}

export default Content;
