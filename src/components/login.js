import React, { useState } from "react";
import logo from "../assets/img/now-logo.png";
import background from "../assets/img/login.jpg";
import googleIcon from "../assets/img/google.png";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../redux/action';
import { useCookies } from "react-cookie";
import { signInWithGoogle, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../services/firebase';


// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
    Row,
} from "reactstrap";

// core components

function LoginPage(props) {

    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);

    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeUsername = (e) => {
        props.setUsername(e.target.value)
    }


    const onSubmitForm = (e, sign) => {
        e.preventDefault()
        if (sign === "signIn")
            signInWithEmailAndPassword(email, password);
        else
            createUserWithEmailAndPassword(email, password);
    }

    function AfterLogin() {
        const [, setCookie] = useCookies(["jwt"]);
        setCookie("jwt", props.user.tokenFromCookies, {
            path: "/"
        })
        return <Redirect to={"/home"} />
    }

    return (
        !!props.user._id ? (<AfterLogin></AfterLogin>) :
            (
                <>
                    <div className="page-header header-filter" filter-color="blue">
                        <div
                            className="page-header-image"
                            style={{
                                backgroundImage: "url(" + background + ")",
                            }}
                        ></div>
                        <div className="content" style={{ margin: 0 }}>

                            <Container>
                                <Row>
                                    <Col className="ml-auto mr-auto" md="5">
                                        <Card className="card-login card-plain">
                                            <Form action="" className="form" method="" style={{ alignItems: "center" }}>
                                                <CardHeader className="text-center">
                                                    <div className="logo-container">
                                                        <img
                                                            alt="..."
                                                            src={logo}
                                                        ></img>
                                                    </div>
                                                </CardHeader>
                                                <CardBody style={{ maxWidth: 320 + "px", marginRight: 8 + "%", marginLeft: 8 + "%" }}>
                                                    <InputGroup
                                                        className={
                                                            "no-border input-lg" +
                                                            (firstFocus ? " input-group-focus" : "")
                                                        }
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="now-ui-icons users_circle-08"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Email..."
                                                            type="text"
                                                            onFocus={() => setFirstFocus(true)}
                                                            onBlur={() => setFirstFocus(false)}
                                                            onChange={(e) => onChangeEmail(e)}
                                                        ></Input>
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={
                                                            "no-border input-lg" +
                                                            (lastFocus ? " input-group-focus" : "")
                                                        }
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="now-ui-icons text_caps-small"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Password..."
                                                            type="text"
                                                            onFocus={() => setLastFocus(true)}
                                                            onBlur={() => setLastFocus(false)}
                                                            onChange={(e) => onChangePassword(e)}
                                                        ></Input>
                                                    </InputGroup>
                                                    <InputGroup
                                                        className={
                                                            "no-border input-lg" +
                                                            (lastFocus ? " input-group-focus" : "")
                                                        }
                                                    >
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i className="now-ui-icons text_caps-small"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            placeholder="Username..."
                                                            type="text"
                                                            onFocus={() => setLastFocus(true)}
                                                            onBlur={() => setLastFocus(false)}
                                                            onChange={(e) => onChangeUsername(e)}
                                                        ></Input>
                                                    </InputGroup>
                                                </CardBody>
                                                <CardFooter className="text-center">
                                                    <Row>
                                                        <Col md="6">
                                                            <Button
                                                                block
                                                                className="btn-round"
                                                                color="info"
                                                                href="#"
                                                                onClick={(e) => onSubmitForm(e, "signIn")}
                                                                size="lg"
                                                            >
                                                                Get Started
            </Button>
                                                        </Col>
                                                        <Col md="6">
                                                            <Button
                                                                block
                                                                className="btn-round"
                                                                color="info"
                                                                // href="#"
                                                                size="lg"
                                                                onClick={signInWithGoogle}
                                                            >
                                                                <img src={googleIcon} style={{ width: 20 + "px", height: 20 + "px" }} alt="Google Icon" />

            Sign In With Google
            </Button>
                                                        </Col>
                                                    </Row>
                                                </CardFooter>
                                                <div className="pull-left">
                                                    <h6>
                                                        <p
                                                            className="link footer-link"
                                                            onClick={(e) => onSubmitForm(e, "signUp")}
                                                        >
                                                            Create Account
                                                        </p>
                                                    </h6>
                                                </div>
                                                <div className="pull-right">
                                                    <h6>
                                                        <p
                                                            className="link footer-link"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Need Help?
            </p>
                                                    </h6>
                                                </div>
                                            </Form>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div >
                    </div >
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

)(LoginPage);
