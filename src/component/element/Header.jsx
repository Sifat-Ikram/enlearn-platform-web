import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { IoMdContact } from "react-icons/io";



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () =>{
        logOut()
        .then(res => console.log(res))
        .catch(err => console.error(err.message))
    }

    return (
        <div className="flex justify-between">
            <a href="/"><h1 className="text-5xl font-roboto font-bold text-[#0205B1]">Dreamz Events</h1></a>
            
                {
                    user ?
                        <div className="flex gap-3 items-center">
                            <h1 className="font-bold">{user.displayName}</h1>
                            <img src={user.photoURL} className="h-16 w-16 rounded-full" alt="" />
                            <button onClick={handleSignOut} className="btn btn-primary text-lg font-semibold">Sign out</button>
                        </div>
                        :
                        <Link to={"/signIn"}><button className="btn btn-primary text-lg font-semibold">Sign in</button></Link>

                }
        </div>
    );
};

export default Header;