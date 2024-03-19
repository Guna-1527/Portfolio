import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const AboutPage = () => {
    return (
        <div className="about-max-width">
            <SideBar />
            <motion.h1
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-center mt-[40px] mr-[25px] font-bold text-[2rem]"
            >
                About <span className="text-[2rem] text-white">Me...</span>
            </motion.h1>
            <motion.div className="a">
                <div className="flex-1">
                    <motion.h1
                        className="font-bold text-4xl"
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
                        className="w-[600px] mt-[20px] text-justify mr-[20px] leading-[30px]"
                    >
                        A dynamic individual pursuing a Bachelor's degree in
                        Computer Science and Engineering (B.E. CSE) in V.S.B
                        College Of Engineering Technical Campus and a
                        deep-rooted connection to the spiritual town of
                        Thiruvannamalai. One of Guna Prasanth's standout
                        qualities is his unwavering enthusiasm for learning new
                        technologies.He is very good at web development.
                    </motion.p>
                    <div className="social">
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
                <motion.div
                    initial={{ x: -2000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute h-screen w-[50%] bg-black top-0 right-0 z-[-1]"
                ></motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
            >
                <Link
                    className="absolute bottom-[40px] right-[50px] text-white font-bold hover:border-b-2 transition-all ease-in"
                    to="/skill"
                >
                    Skill
                </Link>
            </motion.div>
        </div>
    );
};

export default AboutPage;
