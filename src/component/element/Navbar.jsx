import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink style={({isActive}) =>({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={"/"}>Home</NavLink></li>
                <li><NavLink style={({isActive}) =>({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={"/programs"}>Events</NavLink></li>
        {
            user && <>
            <li><NavLink style={({isActive}) =>({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={"/dashboard"}>Dashboard</NavLink></li>
                <li><NavLink style={({isActive}) =>({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={"/about"}>About Us</NavLink></li>
            </>
        }
        
        <li><NavLink style={({isActive}) =>({ background: isActive ? "#3c3ff2" : "" })} className="hover:bg-[#3c3ff2] hover:text-white font-bold text-[#3c3ff2] rounded-md" to={"/signUp"}>Sing up</NavLink></li>
    </>



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-5 menu-horizontal text-lg font-medium px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;