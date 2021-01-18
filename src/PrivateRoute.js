import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "./Auth";
import { connect } from 'react-redux';

const PrivateRoute = ({ component: RouteComponent, rest, user }) => {
    const currentUser = user;
    return (
        !!currentUser.email ? (
            <Route
                {...rest}
                {...console.log(currentUser.email, "email privateRoute")}
                render={routeProps =>
                    <RouteComponent {...routeProps} />
                }
            />) : (
                <Redirect to={"/login"} />
            )
    );
};
export default connect((state) => {
    return {
        user: state.userReducer.user
    }
},
    (dispatch) => {
        return {
            // addNewImageFromDbP: (f, t) => dispatch(actions.addNewImageFromDb(f, t)),
        }
    }
)(PrivateRoute)


