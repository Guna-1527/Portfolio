import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [Click, SetClick] = useState(false);

    const handleClick = () => {
        SetClick(!Click);
    };

    return (
        <div className="Navbar__Container">
            <motion.div
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                transition={{
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                }}
                className="Navbar-Logo__Container"
            >
                <a href="/">
                    <p className="Navbar-Text-Content">
                        Portfo<span>lio.</span>
                    </p>
                </a>
            </motion.div>
            <div
                className={
                    Click
                        ? "LeftNavbar__Slide LeftNavbar__Slide__Design"
                        : "Navbar-Link__Container Anime__Deactive"
                }
            >
                <motion.li
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                >
                    <a href="#Screen" className="active">
                        Home
                    </a>
                </motion.li>
                <motion.li
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                >
                    <a href="#About">About</a>
                </motion.li>
                <motion.li
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                >
                    <a href="#Skill">Skill</a>
                </motion.li>
                <motion.li
                    initial={{
                        opacity: 0,
                        x: 100,
                    }}
                    transition={{
                        duration: 1.1,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                >
                    <a href="#Project">Projects</a>
                </motion.li>
            </div>
            <div onClick={handleClick} className="Navbar-HandBurger">
                {Click ? (
                    <FontAwesomeIcon className="HandBurger__Icon" icon={faX} />
                ) : (
                    <FontAwesomeIcon
                        className="HandBurger__Icon"
                        icon={faBars}
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
