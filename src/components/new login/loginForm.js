import "./loginForm.css"
import SignInWithGoogle from "./signInWithGoogle";
import ByEmailAndPassword from "./ByEmailAndPassword"
export default function LoginForm() {

    return (
        <div>
            <div className="loginForm">
                <SignInWithGoogle />
                <hr className="hr"></hr>
                <ByEmailAndPassword />
                {/* <Password /> */}
            </div>
        </div>
    );

}