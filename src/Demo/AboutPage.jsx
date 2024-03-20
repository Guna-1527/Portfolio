import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const AboutPage = () => {
    return (
        <div className="max-w-[1400px] m-auto h-screen overflow-hidden">
            <SideBar />
            <motion.h1
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-center mt-[40px] mr-[25px] font-bold text-[2rem]"
            >
                About me
            </motion.h1>
            <motion.div className="h-screen w-full flex justify-center items-center flex-col-reverse sm:flex-row-reverse sm:mt-[-100px]">
                <div className="flex-1 sm:ml-[60px]">
                    <motion.h1
                        className="text-center text-3xl font-bold sm:font-bold sm:text-4xl sm:text-left"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.7 }}
                    >
                        Guna Prasanth
                    </motion.h1>
                    <motion.p
                        initial={{ y: -20, opacity: 0 }}
                        style={{ wordSpacing: "12px" }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="w-full px-10 mt-[20px] text-justify mr-[20px] leading-[30px] sm:px-0"
                    >
                        A dynamic individual pursuing a Bachelor's degree in
                        Computer Science and Engineering (B.E. CSE) in V.S.B
                        College Of Engineering Technical Campus and a
                        deep-rooted connection to the spiritual town of
                        Thiruvannamalai. One of Guna Prasanth's standout
                        qualities is his unwavering enthusiasm for learning new
                        technologies.He is very good at web development.
                    </motion.p>
                    <div className="social flex items-center justify-center sm:justify-start">
                        <a target="_blank" href="https://www.linkedin.com/in/guna-prasanth/">
                            <motion.img
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 3 }}
                                className="w-[30px]"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
                                alt=""
                            />
                            
                        </a>
                        <a target="_blank" href="https://twitter.com/guna_2729">
                            <motion.img
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 3 }}
                                className="w-[30px]"
                                src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <motion.img
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 4.5 }}
                        className="w-[400px] h-[400px]"
                        src="https://pngimg.com/uploads/man/small/man_PNG6534.png"
                        alt=""
                    />
                </div>
                <div></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
            >
                <Link
                    className="absolute bottom-[15px] right-[15px] text-black font-bold hover:border-b-2 transition-all ease-in"
                    to="/skill"
                >
                    Skill
                </Link>
            </motion.div>
        </div>
    );
};

export default AboutPage;
