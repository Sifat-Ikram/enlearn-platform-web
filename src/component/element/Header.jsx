import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between">
           <a href="/"><h1 className="text-5xl font-roboto font-bold text-[#0205B1]">Enlearn</h1></a>
            <Link to={"/signIn"}><button className="btn btn-primary text-lg font-semibold">Sign in</button></Link>
        </div>
    );
};

export default Header;