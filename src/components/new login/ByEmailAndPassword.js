import { useRef, useState } from 'react'
import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import { actions } from '../../redux/actions';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../services/firebase"

import './loginForm.css'

const mapStateToProps = (state) => {

    return {

    };
}

const mapDispatchToProps = (dispatch) => ({
});

const ByEmailAndPassword = (props) => {

    const [messageText, setMessageText] = useState('');
    // const emailRef = useRef();
    // const passwordRef = useRef();
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);

    // const loginSchema = yup.object().shape({
    //     email: yup.string().required('This field is required!').email('Invalid email!'),
    //     password: yup.string().required('This field is required!')

    // });





    const disapearLoginMessage = () => {
        setMessageText('');
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="">
            <Formik
            /* initialValues={{ email: '', password: '' }} */


            /* // validationSchema={loginSchema} */
            >
                <Form>
                    <div className="form-group">
                        <Field
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="emailInput"
                            onFocus={disapearLoginMessage}
                            onChange={(e) => onChangeEmail(e)}

                        />
                        <i class="glyphicon glyphicon-eye-open"></i>
                    </div>

                    <div className="form-group passwordInputDiv">
                        <Field
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="passwordInput"
                            onFocus={disapearLoginMessage}
                            onChange={(e) => onChangePassword(e)}

                        />
                    </div>
                </Form>

            </Formik >
            <div className="forgtPasswordDiv">
                {/* <Link id="forgotPasswordLink" onClick={resetUserPassword} style={{ fontSize: "15px" }}>Forgot password?</Link> */}
            </div>
            {/* <AlertForgotPassword show={showAlertForgotPassword} setShow={setShowAlertForgotPassword} /> */}
            {/* <div className="mt-4 signUpSignIn"> */}
            {/* <Link onClick={signInWithEmailAndPassword} style={{ fontSize: "18px" }} className="signInLink">Sign in</Link>

                <Link onClick={createUserWithEmailAndPassword} style={{ fontSize: "18px" }} className="signUpLink">Sign up</Link> */}
            {/* </div> */}
            {/* {messageText !== '' ? <AlertMessage message={messageText} /> : ""} */}
        </div>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ByEmailAndPassword));