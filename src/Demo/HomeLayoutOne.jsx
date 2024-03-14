import React from "react";
import "../App.css";
import Typewriter from "./Typewriter";

const HomeLayoutOne = () => {
    return (
        <div>
            <div className="HomeContainer">
            <Typewriter text="Welcome." delay={100} />
            </div>
        </div>
    );
};

export default HomeLayoutOne;
