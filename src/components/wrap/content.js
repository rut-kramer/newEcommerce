import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

import ProductPage from "../store design/product_page/productPage"
import './wrap-component.css'


function Content(props) {
    function Temporary() {
        return <>

            <h3>לשים במקומי קומפוננטה</h3>
        </>
    }
    function Admin() {
        return <h3>לשים במקומי קומפוננטה אדמין</h3>

    }

    return (
        <div className="Content">
            {/* //זה אמור להיות שם מוצר דינאמי Saint_Laurent */}
            <Link to={"/" + props.objectFields.urlRoute + "/productPage/Saint_Laurent"}>product page</Link>
            <Switch>
                <Route path="/:storeName/productPage/Saint_Laurent" component={ProductPage} />
                <Route path="/:storeName" component={Temporary} />
                <Route path="/:storeName/admin" component={Admin} />
            </Switch>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        objectFields: state.storeReducer.objectFields,
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)
    (Content);
