import { useEffect } from 'react';
import LoginForm from './loginForm';
// import Header from './Header';
import appleIcon from '../../assets/apple-touch-icon.png'
import { Redirect } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { connect } from 'react-redux';
import { actions } from "../../redux/action"

import './loginHome.css';

function LoginHome(props) {
    function AfterLogin({ props }) {
        const [, setCookie] = useCookies(["jwt"]);
        // const [toLoad, setToLoad] = useState(false);
        useEffect(() => {
            setCookie("jwt", props.user.tokenFromCookies, {
                path: "/"
            })
            props.getLastUpdatedStore(props.user._id);
        }, []);
        // useEffect(() => {
        //         setToLoad(true);
        //     }, [props.lastUpdatedUserStore]);
        function funcReset() {
            let item = props.lastUpdatedUserStore[0];
            props.setCurrentStore(item);
            props.getOrdersByStore(item._id)
            props.getCategoriesByStore(item._id)
            props.getAllPaper(item._id)
            props.getAllAttributes(item._id)
            props.getBhdByStoreId(item._id)
            props.setTitle("")
            props.setAlignment("")
            props.setColor("")
            props.setSize("")
        }
        useEffect(() => {
            props.lastUpdatedUserStore[0] && funcReset(props.lastUpdatedUserStore[0])
        }, [props.lastUpdatedUserStore])
        return props.isUpdate ? props.hasStores ? <Redirect to={"/" + props.lastUpdatedUserStore[0].urlRoute} /> : <Redirect to="/openstore" /> :
            <div className="page-header header-filter" filter-color="grey">
                <div className="content" style={{ margin: "30vh" }}>
                    <h1><strong> ...loading</strong></h1>
                </div>
            </div>

    }

    return (
        <>
            <div className="homePage">
                {!!props.user._id ? (<AfterLogin props={props}></AfterLogin>) :
                    <>
                        <div className="col-3">
                        </div>
                        <img src={appleIcon} ></img>
                        <div className="col-6 offset-2">
                            <LoginForm />
                        </div>
                    </>}
            </div>
        </>

    );

}
export default connect(
    (state) => {
        return {
            user: state.userReducer.user,
            lastUpdatedUserStore: state.userReducer.lastUpdatedUserStore,
            hasStores: state.userReducer.hasStores,
            isUpdate: state.userReducer.isUpdate
        }
    },
    (dispatch) => {
        return {
            setCurrentStore: (i) => { dispatch(actions.setSaveAllStoreDetails(i)) },
            getOrdersByStore: (i) => { dispatch(actions.getOrdersByStore(i)) },
            getCategoriesByStore: (i) => { dispatch(actions.getCategoriesByStore(i)) },
            getAllPaper: (i) => { dispatch(actions.getAllPaper(i)) },
            getAllAttributes: (i) => { dispatch(actions.getAllAttributes(i)) },
            setTitle: (e) => dispatch(actions.setTitle(e)),
            setAlignment: (e) => dispatch(actions.setAlignment(e)),
            setColor: (e) => dispatch(actions.setColor(e)),
            setSize: (e) => dispatch(actions.setSize(e)),
            setUsername: (e) => dispatch(actions.setUsername(e)),
            getLastUpdatedStore: (e) => dispatch(actions.lastUpdatedStore(e)),
            getBhdByStoreId: (e) => dispatch(actions.getBhdByStoreId(e))

        }
    }

)(LoginHome);

