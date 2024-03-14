import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import About from "./About";

const HomeLayoutTwo = () => {
    return (
        <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="w-full h-screen bg-white absolute top-0"
        >
            <div className="flex max-w-[1400px] m-auto items-center justify-center h-screen">
                <motion.div
                    className="left"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Temporibus fugit officia molestiae? Exercitationem
                        obcaecati facere sed ut ipsam animi illum?
                    </motion.p>
                    <motion.div initial={{opacity: 0, x: -50}} transition={{ duration: 1, delay: 5.5 }} animate={{opacity:1, x: 0}}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.85 }}
                            className="px-[15px] py-[12px] cursor-pointer outline-none mt-[25px] border-none bg-black text-white font-medium rounded-lg"
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
                    <About />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomeLayoutTwo;
