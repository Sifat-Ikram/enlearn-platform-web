import { Link, useLoaderData } from "react-router-dom";
import Header from "../element/Header";
import Navbar from "../element/Navbar";


const AllPrograms = () => {
    const programs = useLoaderData();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <h1 className="text-3xl font-semibold text-left mb-10">All Programs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        programs.map(cards => <Link key={cards.id} to={`/${cards.id}`}>
                            <div className="flex flex-col justify-center gap-8 pb-3  border-2 border-solid rounded-xl">
                                <figure>
                                    <img src={cards.image} alt={cards.title} className="rounded-xl h-52 w-full" />
                                </figure>
                                <div className="items-center text-center space-y-2">
                                    <h2 className="text-lg text-black font-medium">{cards.title}</h2>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPrograms;