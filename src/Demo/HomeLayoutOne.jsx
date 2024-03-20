import React from "react";
import "../App.css";
import Typewriter from "./Typewriter";

const HomeLayoutOne = () => {
    return (
        <div>
            <div className="w-full h-screen bg-black font-bold text-white flex items-center justify-center sm:text-[8rem] text-[3rem]">
            <Typewriter text="Welcome." delay={100} />
            </div>
        </div>
    );
};

export default HomeLayoutOne;
