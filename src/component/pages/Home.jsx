import Banner from "../element/Banner";
import Education from "../element/Education";
import Header from "../element/Header";
import Navbar from "../element/Navbar";
import { useEffect, useState } from "react";
import Training from "../element/Training";


const Home = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])
    return (
        <div className="lg:px-20 md:px-16 px-5">
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <Education events={events}></Education>
            <Training events={events}></Training>
        </div>
    );
};

export default Home;