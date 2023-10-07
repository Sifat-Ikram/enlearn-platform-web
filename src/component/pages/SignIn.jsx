import { Link } from "react-router-dom";
import Header from "../element/Header";

const SignIn = () => {
    return (
        <div>
            <Header></Header>
            <div className="hero w-full">
                <div className="hero-content flex-col gap-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign in here!</h1>    
                    </div>
                    <div className="card shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control w-96 mt-6">
                                <button className="btn btn-primary text-lg font-semibold">Sign In</button>
                            </div>
                        </form>
                        <p>Don't have an account? <Link to={"/signUp"} className="text-blue-900 font-semibold">Sign up</Link> here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;