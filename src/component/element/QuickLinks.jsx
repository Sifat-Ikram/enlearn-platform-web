import { BiSolidCalendarEvent, BiSolidDashboard } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";

const QuickLinks = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Featured Links</h1>
            <div className="mx-40  flex justify-around">
                <div className="w-36 h-36 border-2 border-solid flex flex-col justify-center items-center">
                    <BiSolidDashboard className="text-7xl text-[#3c3ff2]"></BiSolidDashboard>
                    <h1 className="text-lg font-medium">Dashboard</h1>
                </div>
                <div className="w-36 h-36 border-2 border-solid flex flex-col justify-center items-center">
                    <BiSolidCalendarEvent className="text-7xl text-[#3c3ff2]"></BiSolidCalendarEvent>
                    <h1 className="text-lg font-medium">Events</h1>
                </div>
                <div className="w-36 h-36 border-2 border-solid flex flex-col justify-center items-center">
                    <FaSignInAlt className="text-7xl text-[#3c3ff2]"></FaSignInAlt>
                    <h1 className="text-lg font-medium">Sign up</h1>
                </div>
            </div>
        </div>
    );
};

export default QuickLinks;