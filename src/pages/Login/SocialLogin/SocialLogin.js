import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Loading from "../../Loading/Loading";
import "./SocialLogin.css";
import google from '../../../images/google.png'
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading, error] =
        useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>;
    }

    if (user || token) {
        navigate(from, { replace: true });
    }

    return (
        <div className="text-center">
            <div className="d-flex justify-content-center align-items-center">
                <span className="hr-sign-in d-inline-block"></span>
                <span className="d-inline-block px-2 fw-bold">or</span>
                <span className="hr-sign-in d-inline-block"></span>
            </div>
            <p className="text-danger fw-bold">{error ? error.message : ""}</p>
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-light btn-outline-primary w-75 mt-3"
            ><span><img className="mx-2" width={20} src={google} alt="" /></span>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;