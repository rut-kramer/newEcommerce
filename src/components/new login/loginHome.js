import LoginForm from './loginForm';
// import Header from './Header';
import appleIcon from '../../assets/apple-touch-icon.png'
import { Redirect } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { connect } from 'react-redux';
import { actions } from "../../redux/action"

import './loginHome.css';

function LoginHome(props) {
    function AfterLogin() {
        const [, setCookie] = useCookies(["jwt"]);
        setCookie("jwt", props.user.tokenFromCookies, {
            path: "/"
        })
        return <Redirect to={"/home"} />
    }

    return (!!props.user._id ? (<AfterLogin></AfterLogin>) :
        (
            <>
                <div className="homePage">
                    <div className="col-3">
                    </div>
                    <img src={appleIcon} ></img>
                    <div className="col-6 offset-2">
                        <LoginForm />
                    </div>
                </div>
            </>
        )
    );

}
export default connect(
    (state) => {
        return {
            user: state.userReducer.user
        }
    },
    (dispatch) => {
        return {
            setUsername: (e) => dispatch(actions.setUsername(e))
        }
    }

)(LoginHome);

