import { useState } from "react";
import { Link } from "react-router-dom";

const Services = ({ events }) => {

    return (
        <div className=" my-16 gap-20">
            <h1 className="text-6xl text-center font-medium">Our Services</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10">
                {
                    events.map(event => <Link key={event.id} to={`/${event.id}`}>
                        <div className="flex flex-col rounded-xl justify-center   border-2 border-solid rounded-t-xl shadow-xl">
                            <figure>
                                <img src={event.background_image} alt={event.title} className="rounded-xl h-60" />
                            </figure>
                            <div>
                            <div className="items-center text-left gap-3 p-4">
                                <h2 className="text-2xl text-black font-bold  mb-5">{event.title}</h2>
                                <p><span className="text-lg">About:</span> {event.short_description}</p>
                                <div className="flex justify-between text  items-center ">
                                    <p className="text-lg font-bold">Price: {event.price}</p>
                                    <button className="btn hover:bg-[#3c3ff2] hover:text-white font-bold text-base text-[#3c3ff2] bg-base-100">View Details</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default Services;