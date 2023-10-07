import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../element/Header";
import Navbar from "../element/Navbar";
import { savedEvent } from "../element/localStorage";


const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt)
    const { title, image, price, description } = event;

    const handleAdd = () =>{
        savedEvent(idInt);
    }
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <h1 className="text-4xl font-semibold text-left mb-10">Program Details</h1>
                <div>
                    <div className="flex justify-center items-center">
                        <img src={image} alt="" className=" w-9/12 mb-10" />
                    </div>
                    <div className="text-left">
                        <div className="flex justify-between">
                            <h1 className="text-lg font-medium">Price: ${price}</h1>
                            <Link><button className="btn btn-primary" onClick={handleAdd}>Add to the Dashboard</button></Link>
                        </div>
                        <h1 className="text-lg font-medium">Program name: {title}</h1>
                        <p><span className="text-lg font-medium">Description:</span> {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;