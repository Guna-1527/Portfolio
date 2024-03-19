import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import About from "./About";
import SideBar from "./SideBar";

const HomeLayoutTwo = () => {
    return (
        <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="w-full h-screen bg-white absolute top-0"
        >
            <SideBar />
            <div className="flex max-w-[1400px] m-auto items-center justify-center h-screen">
                <motion.div
                    className="flex-1 left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                        className="text-[2rem]"
                    >
                        Hi, there!
                    </motion.h1>
                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 4 }}
                        className="text-[4rem]"
                    >
                        I' m Guna prasanth
                    </motion.h1>
                    <motion.p
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 5 }}
                    >
                        Dedicated Final Year Computer Science Engineering student with a fervent enthusiasm for technology and innovation.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1, delay: 5.5 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.85 }}
                            className="px-[15px] py-[12px] cursor-pointer outline-none mt-[25px] border-none bg-[#313242] text-white font-medium rounded-lg"
                        >
                            Get in touch
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 7 }}
                    className="right"
                >
                    <div className="flex-1">
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1358/1*-ntL3Dsvc-dJ5cLGRtSuEw.gif"
                            alt=""  
                        />
                    </div>
                </motion.div>
                <About />
            </div>
        </motion.div>
    );
};

export default HomeLayoutTwo;
