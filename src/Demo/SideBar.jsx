import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SideBar = () => {
    const [isActive, SetisActive] = useState(false);

    console.log(isActive);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.4, delay: 5.3}} className="">
            <div
                onClick={() => {
                    SetisActive(!isActive);
                }}
                className="absolute top-5 z-30 left-4 w-[50px] h-[50px] cursor-pointer text-white rounded-full flex justify-center items-center"
            >
                {isActive ? "X" : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" className="w-[30px] h-[30px]"></img>}
            </div>
            {isActive ? (
                    <motion.div
                        initial={{ x: -400 }}
                        animate={{ x: 0 }}
                        className="absolute top-0 left-0 w-[400px] z-10 h-screen bg-gray-800 flex flex-col justify-center items-center font-bold text-[35px] gap-10"
                    >
                        <Link className="text-white" to="/">
                            Home
                        </Link>
                        <Link className="text-white" to="/about">
                            About me
                        </Link>
                        <Link className="text-white" to="/skill">
                            Skills
                        </Link>
                        <Link className="text-white" to="/project">
                            Projects
                        </Link>
                    </motion.div>
            ) : (
                ""
            )}
        </motion.div>
    );
};

export default SideBar;
