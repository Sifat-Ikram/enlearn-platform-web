import Banner from "../element/Banner";
import Education from "../element/Events";
import Header from "../element/Header";
import Navbar from "../element/Navbar";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Services from "../element/Services";
import Events from "../element/Events";
import Footer from "../element/Footer";
import QuickLinks from "../element/QuickLinks";


const Home = () => {
    const [events, setEvent] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [])



    return (
        <div>
            <div className=" w-11/12 mx-auto">
                <Header></Header>
                <Navbar></Navbar>
                <Marquee speed={100} className="py-5 w-full my-10 bg-[#5a52fa] text-white font-semibold text-xl">
                    Hurry up!!! If you enroll any one of the courses or training programs you will get 50% discount!
                </Marquee>
                <Banner></Banner>
                <Services events={events}></Services>
                <QuickLinks></QuickLinks>
                <Events></Events>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;