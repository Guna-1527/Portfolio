import React from "react";
import { motion } from "framer-motion";

const AnimationPage = () => {
    return (
        <div
            initial={{ y: -2000, opacity: 0 }}
            animate={{ y: 2000, opacity: 0 }}
            transition={{ duration: 3}}
            className="w-full h-screen bg-red absolute"
        ></div>
    );
};

export default AnimationPage;
