import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Skill = () => {
    const frontend = [
        {
            id: 1,
            skill: "HTML",
            image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
            delay: 1,
        },
        {
            id: 2,
            skill: "CSS",
            image: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
            delay: 1.5,
        },
        {
            id: 3,
            skill: "Javascript",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            delay: 2,
        },
        {
            id: 4,
            skill: "React Js",
            image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
            delay: 2.5,
        },
    ];
    const backend = [
        {
            id: 1,
            skill: "Node Js",
            image: "https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png",
            delay: 2.5,
        },
        {
            id: 2,
            skill: "Mongo DB",
            image: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png",
            delay: 2,
        },
        {
            id: 3,
            skill: "MySQL",
            image: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
            delay: 1.5,
        },
        {
            id: 4,
            skill: "GIT",
            image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
            delay: 1,
        },
    ];
    return (
        <div
            id="skill"
            className=" relative flex flex-col justify-center items-center w-full h-[100vh] pt-[80px]"
        >
            <SideBar />
            <motion.h1
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute top-[70px] font-bold text-[2rem]"
            >
                My Skills
            </motion.h1>
            <div className="flex gap-20 sm:flex-col w-full justify-between">
                <div className="relative flex justify-around items-center w-full">
                    <marquee
                        className="absolute z-[-3] font-bold text-[7rem] text-gray-200 hidden sm:flex"
                        behavior="Alternate"
                        direction="left"
                    >
                        FRONTEND
                    </marquee>
                    <div className="flex gap-12 flex-col sm:flex-row sm:w-full sm:justify-around">
                        {frontend.map((data, i) => (
                            <div key={i}>
                                <div className="w-[100px] h-[100px] transition-all hover:scale-110 cursor-pointer">
                                    <abbr title={data.skill}>
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 1,
                                                delay: `${data.delay}`,
                                            }}
                                            className=""
                                            src={data.image}
                                            alt=""
                                        />
                                    </abbr>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative flex justify-around items-center w-full">
                    <marquee
                        className="absolute z-[-3] font-bold text-[7rem] text-gray-200 hidden sm:flex"
                        behavior="Alternate"
                        direction="right"
                    >
                        BACKEND
                    </marquee>
                    <div className="flex gap-12 flex-col sm:flex-row sm:w-full sm:justify-around">
                        {backend.map((data, i) => (
                            <div key={i} className="w-[100px] h-[100px]">
                                <div className="w-[100px] transition-all hover:scale-110 h-[100px] cursor-pointer">
                                    <abbr title={data.skill}>
                                        <motion.img
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 1,
                                                delay: `${data.delay}`,
                                            }}
                                            src={data.image}
                                            alt=""
                                        />
                                    </abbr>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <motion.div className="NextPage absolute bottom-[40px] right-[50px] text-black font-bold hover:border-b-2 transition-all ease-in">
                <Link to="/project">Projects</Link>
            </motion.div>
        </div>
    );
};

export default Skill;
