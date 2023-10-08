import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../element/Header";
import { useContext, useRef, useState } from "react";
import { AuthContext, auth } from "../element/AuthProvider";
import swal from "sweetalert";
import { sendPasswordResetEmail } from "firebase/auth";

const SignIn = () => {
    const { logIn, resetPassword } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const emailRef = useRef(null);

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setError('');
        setSuccess('');

        logIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : "/");
                setSuccess(swal("Congratulations!!!", "You successfully signed in", "success"));
            })
            .catch(err => {
                setError(err.message);
            })
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError("Please provide an email");
        }
        else if (!/^([a-zA-z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,})$/.test(email)) {
            console.log("Please provide a validated email");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError("Please check your email")
            })
            .catch(() => {
                setError("There must be some problem with email. Check your email and try again");
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="hero w-full">
                <div className="hero-content flex-col gap-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign in here!</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control w-96 mt-6">
                                <button className="btn btn-primary text-lg font-semibold">Sign In</button>
                            </div>
                        </form>
                        {
                            error && <p className="text-red-800 text-base">{error}</p>
                        }
                        <p>Don't have an account? <Link to={"/signUp"} className="text-blue-900 font-semibold">Sign up</Link> here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;