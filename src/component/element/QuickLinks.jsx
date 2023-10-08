import { useEffect } from "react";
import { BiSolidCalendarEvent, BiSolidContact, BiSolidDashboard } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const QuickLinks = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])
    return (
        <div>
            <div className="flex flex-col justify-center items-center mx-auto">
                <h1 className="text-3xl font-bold mb-5">Featured Quick Links</h1>
                <div className=" flex" data-aos="fade-right">
                    <Link to={"/dashboard"}>
                        <div className="w-40 h-40 px-5 border-2 border-solid flex flex-col justify-center items-center">
                            <BiSolidDashboard className="text-7xl text-[#3c3ff2]"></BiSolidDashboard>
                            <h1 className="text-lg font-medium">Dashboard</h1>
                        </div>
                    </Link>
                    <Link to={"/programs"}>
                        <div className="w-40 h-40 px-5 border-2 border-solid flex flex-col justify-center items-center">
                            <BiSolidCalendarEvent className="text-7xl text-[#3c3ff2]"></BiSolidCalendarEvent>
                            <h1 className="text-lg font-medium">Events</h1>
                        </div>
                    </Link>
                    <Link>
                        <div className="w-40 h-40 px-5 border-2 border-solid flex flex-col justify-center items-center">
                            <BiSolidContact className="text-7xl text-[#3c3ff2]"></BiSolidContact>
                            <h1 className="text-lg font-medium">Contact Us</h1>
                        </div>
                    </Link>
                    <Link to={"/signUp"}>
                        <div className="w-40 h-40 px-5 border-2 border-solid flex flex-col justify-center items-center">
                            <FaSignInAlt className="text-7xl text-[#3c3ff2]"></FaSignInAlt>
                            <h1 className="text-lg font-medium">Sign up</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;