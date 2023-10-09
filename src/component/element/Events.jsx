import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Events = () => {
    const [eventLength, setEventsLength] = useState(3)
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    const getFilteredEvent = () => {
        if (events) {
            return events.filter(item => item.category.includes("home"));
        }
    }

    const filteredEvent = getFilteredEvent();
    return (
        <div className="my-10 space-y-4">
            <h1 className="text-3xl font-bold mb-5">Our Events</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    filteredEvent.slice(0, eventLength).map(event => <Link key={event.id}>
                        <div className="flex flex-col justify-center pb-5 gap-3 border-2 border-solid rounded-t-xl">

                            <div className="items-center text-center pt-3">
                                <h2 className="text-lg text-black font-medium mb-5">{event.title}</h2>
                            </div>
                            <figure>
                                <img src={event.image} alt={event.title} className="rounded-xl h-52 w-full" />
                            </figure>
                        </div>
                    </Link>)
                }
            </div>
            <div className="item-center">
                <div className={eventLength === events.length ? 'hidden' : ''}>
                    <button onClick={() => { setEventsLength(events.length) }} className="btn btn-primary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Events;