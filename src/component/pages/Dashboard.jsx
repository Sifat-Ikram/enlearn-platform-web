import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredEvent } from "../element/localStorage";
import DashboardItems from "../element/DashboardItems";
import Header from "../element/Header";
import Navbar from "../element/Navbar";


const Dashboard = () => {
    const events = useLoaderData();
    const [addedEvents, setAddedEvents] = useState([]);

    useEffect(() => {
        const storedEventId = getStoredEvent();
        if (events.length) {
            const storedEvent = [];
            for (const id of storedEventId) {
                const event = events.find(event => event.id === id);
                if (event) {
                    storedEvent.push(event);
                }
            }
            setAddedEvents(storedEvent);
        }
    }, [])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl font-semibold text-left mb-10">Added Events</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                    {
                        addedEvents.map(item => <DashboardItems key={item.id} item={item}></DashboardItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;