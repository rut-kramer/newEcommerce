import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import './wrap-component.css'
import AdminCurd from '../store setting/admin'
import { connect } from 'react-redux';

function Content(props) {
    function Temporary() {

       
        return<div>
         <h3>לשים במקומי קומפוננטה</h3>
        
    </div>
    
    
    }
    
    return (
        <div className="Content">
          <Link to={"/"+props.objectFields.urlRoute+"/admin"}>admin</Link>
                <Switch>
                    <Route path="/:storeName/admin" component={AdminCurd} />
                    <Route path="/:storeName" component={Temporary} />
                    
                </Switch>
            </div>
        )
}




const mapStateToProps = (state) => {
    return {
        objectFields: state.openStoreReducer.objectFields,
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)
(Content);

