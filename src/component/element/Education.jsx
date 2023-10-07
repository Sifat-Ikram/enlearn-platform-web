import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Education = ({events}) => {
    const [eventLength, setEventsLength] = useState(4)

    const getFilteredEvent = () => {
        if (events) {
            return events.filter(item => item.category.includes("education"));
        }
    }

    const filteredEvent = getFilteredEvent();
    return (
        <div className="my-10 space-y-4">
            <h1 className="text-3xl font-bold mb-5">Upcoming Educational Events</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
                {
                    filteredEvent.slice(0, eventLength).map(event => <Link key={event.id}>
                        <div className="flex flex-col justify-center w-64  border-2 border-solid rounded-t-xl">
                            <figure>
                                <img src={event.image} alt={event.title} className="rounded-xl h-40 w-64" />
                            </figure>
                            <div className="items-center text-center">
                                <h2 className="text-lg text-black font-medium">{event.title}</h2>
                                <div className="">
                                    <button className="btn bg-base-100 text-[#3c3ff2]">View Details</button>
                                </div>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
            <div className="item-center">
                <div className={eventLength === events.length ?  'hidden' : ''}>
                    <button onClick={() => {setEventsLength(events.length)}} className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Education;