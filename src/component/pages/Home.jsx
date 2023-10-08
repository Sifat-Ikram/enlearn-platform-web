import Banner from "../element/Banner";
import Education from "../element/Education";
import Header from "../element/Header";
import Navbar from "../element/Navbar";
import { useEffect, useState } from "react";
import Training from "../element/Training";
import QuickLinks from "../element/QuickLinks";
import Marquee from "react-fast-marquee";


const Home = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])

    

    return (
        <div className=" w-11/12 mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Marquee speed={100} className="py-5 w-full my-10 bg-[#5271fa] text-white font-semibold text-xl">
                Hurry up!!! If you enroll any one of the courses or training programs you will get 50% discount!
            </Marquee>
            <Banner></Banner>
            <Education events={events}></Education>
            <QuickLinks></QuickLinks>
            <Training events={events}></Training>
        </div>
    );
};

export default Home;