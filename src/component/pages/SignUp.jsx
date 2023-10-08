import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../element/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../element/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

const SignUp = () => {

    const { createUser, user, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const handleGoogle = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleFacebook =()=>{
        signInWithFacebook()
        .then( res =>{
            console.log(res.user);
        })
        .catch( err =>{
            console.error(err);
        })
    }


    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const username = form.get('username');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, username, photoUrl);

        const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }
        else if (regex.test(password)) {
            setError("You can not use any capital letter or any special character");
            return;
        }

        setError('');
        setSuccess('');
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : "/");
                setSuccess(swal("Congratulations!!!", "You successfully signed up", "success"));
                updateProfile(res.user, {
                    displayName: username,
                    photoURL: photoUrl
                })
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }

    return (
        <div>
            <Header></Header>
            <div className="hero w-full">
                <div className="hero-content flex-col gap-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign up here!</h1>
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" name="username" placeholder="Username" className="input input-bordered" />
                            </div>
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="flex justify-center mt-5 gap-10">
                                <button><FcGoogle onClick={handleGoogle} className="text-4xl"></FcGoogle></button>
                                <button><GrFacebook onClick={handleFacebook} className="text-4xl"></GrFacebook></button>
                            </div>
                            <div className="form-control w-96 mt-6">
                                <button className="btn btn-primary text-lg font-semibold">Sign up</button>
                                
                            </div>
                        </form>
                        {
                            error && <p className="text-red-800 text-base">{error}</p>
                        }
                        <p>Already have an account? <Link to={"/signIn"} className="text-blue-900 font-semibold">Sign in</Link> here</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;