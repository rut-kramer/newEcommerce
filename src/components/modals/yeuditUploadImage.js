import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/action'
function Upload(props) {
        const [image, setImage] = useState(null)

        const handlerLogo = (e) => {
                debugger
                props.uploadImage(e);
        }

        return (
                <>
                        <form >
                                <div>
                                        <label htmlFor="logoS">
                                                <img className="logoC" alt="הכנס לוגו של החנות"
                                                        src={props.url}
                                                ></img>
                                        </label>
                                        <input
                                                type={"file"}
                                                id="logoS"
                                                accept="image/*"
                                                name="logo"
                                                style={{
                                                        display: "none"
                                                }}
                                                onChange={(e) => handlerLogo(e.target.files[0])}
                                        />
                                </div><br></br>
                                {/* <input type="submit" value="עבור לחנות שלך לדוגמא"></input> */}
                        </form>
                </>
        );
}
export default connect(
        (state) => {
                return {
                        // products: state.cartReducer.products,
                        url: state.coinsReducer.picture
                        // uId: state.userReducer.user.uid
                }
        },
        (dispatch) => {
                return {
                        setUsername: (e) => dispatch(actions.setUsername(e)),
                        uploadImage: (x) => dispatch(actions.uploadImage(x)),
                        changeProfile: (x) => dispatch(actions.setProfilePicture(x))
                }
        }
)(Upload);