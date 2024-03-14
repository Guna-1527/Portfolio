import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{  opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 7.5 }}
        >
            <Link
                className="absolute bottom-[40px] right-[50px] text-black font-bold hover:border-b-2 transition-all"
                to="/about"
            >
                About me
            </Link>
        </motion.div>
    );
};

export default About;
