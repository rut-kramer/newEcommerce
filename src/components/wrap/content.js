import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'


function Content() {
    // function product() {
    //     // <Link to="/ProductPage"></Link>
    // }
    function Temporary() {
        return <>

            <h3>לשים במקומי קומפוננטה</h3>
            {/* <button onClick={product}>מוצר לדוגמא</button> */}
            {/* <ProductPage></ProductPage> */}

        </>
    }
    function Admin() {
        return <h3>לשים במקומי קומפוננטה אדמין</h3>

    }

    // function ProductPage() {
    //     return <>
    //         <ProductPage></ProductPage>
    //     </>
    // }
    return (
        <div className="Content">
            {/* <Link to="קידס_סטיל/productPage/nameProduct"></Link> */}
            <Switch>
                {/* <Route path="/:storeName/productPage/:name" component={ProductPage} /> */}
                <Route path="/ProductPage" component={ProductPage} />
                <Route path="/:storeName" component={Temporary} />
                <Route path="/:storeName/admin" component={Admin} />
            </Switch>
        </div>
    )
}

export default Content;
