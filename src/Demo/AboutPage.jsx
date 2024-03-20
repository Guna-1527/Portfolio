import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const AboutPage = () => {
    return (
        <div className="aboutPageContainer">
            <SideBar />
            <div className="aboutHeaderContainer">
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About me
                </motion.h1>
            </div>
            <div className="aboutWrapper">
                <div className="aboutImageContainer">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        src="https://pngimg.com/uploads/man/small/man_PNG6534.png"
                        alt=""
                    />
                </div>
                <div className="aboutDescriptionContainer">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.9 }}
                        className="aboutName"
                    >
                        Guna Prasanth
                    </motion.h1>
                    <motion.p
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="aboutDesc"
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
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/guna-prasanth/"
                        >
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
                                transition={{ duration: 1, delay: 3.3 }}
                                className="w-[30px]"
                                src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                >
                    <Link className="NextPage" to="/skill">
                        Skill
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
