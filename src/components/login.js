import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useCookies } from "react-cookie";

import { signInWithGoogle, signInWithEmailAndPassword } from '../services/firebase';
import { actions } from '../redux/action';

function Login(props) {

    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const [, setCookie] = useCookies(["jwt"]);

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeUsername(e) {
        props.setUsername(e.target.value)
    }


    function onSubmitForm(e) {
        e.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    function AfterLogin() {
        setCookie("jwt", props.user.tokenFromCookies, {
            path: "/"
        })
        return <Redirect to={"/openStore"} />
    }

    return (
        !!props.user._id ? (<AfterLogin></AfterLogin>) :
            (
                <>
                    <form className="signUp form" onSubmit={(e) => onSubmitForm(e)}>
                        <label htmlFor="email">email:</label>
                        <input type="email" name="email" onChange={(e) => onChangeEmail(e)} /><br />
                        <label htmlFor="password">password:</label>
                        <input type="password" name="password" onChange={(e) => onChangePassword(e)} /><br />
                        <label htmlFor="username">username:</label>
                        <input type="text" name="username" onChange={(e) => onChangeUsername(e)} /><br />
                        <input type="submit" value="OK" />
                    </form>
                    <div className="login-buttons">
                        <button className="login-provider-button" onClick={signInWithGoogle}>
                            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
                            <span>Continue with Google</span>
                        </button>
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

)(Login);