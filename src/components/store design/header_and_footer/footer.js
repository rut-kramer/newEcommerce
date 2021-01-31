import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../../../redux/action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoSvg from "../../../assets/logo.svg"
function Footer(props) {

    return (
        <div>
            <footer className="footer">
                <div className="footer__center center">
                    <div className="footer__row">
                        <div className="footer__col">
                            <a className="footer__logo" href="index.html">
                                <img className="footer__pic footer__pic_black-desktop" src={logoSvg} alt=""></img>
                            </a>
                            <div className="footer__copyright">© 2020 - All rights reserved</div>
                            <div className="footer__social social">
                                <a className="social__link" href="https://www.instagram.com/ui8net/"
                                    target="_blank"><svg className="icon icon-instagram">
                                        {/* <use xlink:href="img/sprite.svg#icon-instagram"></use> */}
                                    </svg></a>
                                <a className="social__link" href="https://twitter.com/ui8" target="_blank"><svg
                                    className="icon icon-twitter">
                                    {/* <use xlink:href="img/sprite.svg#icon-twitter"></use> */}
                                </svg></a>
                                <a className="social__link" href="https://www.facebook.com/ui8.net/" target="_blank"><svg
                                    className="icon icon-facebook">
                                    {/* <use xlink:href="img/sprite.svg#icon-facebook"></use> */}
                                </svg></a></div><label className="switch js-switch-bg">
                                <input className="switch__input" type="checkbox">
                                </input>
                                {/* <div>
                                        <h1>לפרטים והזמנות</h1>
                                        <label>Phone:<input placeholder="000000"></input></label><br />
                                        <label>Address<input></input></label><br />
                                        <label>Email</label>
                                        <input placeholder="sjh@gmail.com"></input>
                                    </div> */}
                                {/* <span className="switch__in"><span className="switch__tick">
                                            <img className="switch__pic switch__pic_moon" src={moon} alt=""></img>
                                            <img className="switch__pic switch__pic_sun" src={sun} alt=""></img>
                                        </span> */}
                                {/* </span> */}
                            </label>
                        </div>
                        <div className="footer__col">
                            <div className="footer__category">Categories</div>
                            <div className="footer__menu">
                                <Link className="footer__link" to="/0/category">On Sale</Link>
                                <Link className="footer__link" to="/0/category">Featured</Link>
                                <Link className="footer__link" to="/0/category">Masks</Link>
                                <Link className="footer__link" to="/0/category">Eye Care</Link>
                                <Link className="footer__link" to="/0/category">Moisturizers</Link>
                                <Link className="footer__link" to="/0/category">Treatments</Link>
                                <Link className="footer__link" to="/0/category">Night Care</Link>
                                <Link className="footer__link" to="/0/category">Sun Care</Link>
                            </div>
                        </div>
                        <div><h1>Contact Us</h1><br />
                            <div>
                                <label>Phone Store</label>
                                <p>{props.objectFields.phoneStore}</p>
                            </div><br></br>
                            <div>
                                <label>Address Store</label>
                                <p>{props.objectFields.addressStore}</p>
                            </div><br></br>
                            <div>
                                <label>Email Store</label>
                                <p>{props.objectFields.emailStore}</p>
                            </div><br></br>
                            {/* <button className="btn btn-default">Send</button> */}
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        objectFields: state.currentStoreReducer.objectFields,
    }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
