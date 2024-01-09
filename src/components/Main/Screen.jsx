import "./screen.css";
import { motion } from "framer-motion";
import { Roll } from "react-swift-reveal";

const Screen = () => {
    return (
        <div id="Screen" className="Screen__Container">
            <div className="Screen__Content__Container">
                <div className="Screen__Content">
                    <motion.h1
                        initial={{ x: -70, opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            duration: 0.5,
                            mass: 0.75,
                            stiffness: 100,
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        className="Screen__Content__Title"
                    >
                        Hi, I&apos;m
                    </motion.h1>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            damping: 10,
                            mass: 0.75,
                            stiffness: 100,
                            duration: 0.8,
                        }}
                        className="Screen__Content__Name"
                    >
                        Guna <br /> <span className="Addtional">Prasanth</span>
                    </motion.p>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "tween",
                            damping: 10,
                            mass: 0.75,
                            stiffness: 100,
                            duration: 0.8,
                        }}
                        className="Screen__Content__Text"
                    >
                        I&apos;m a Full Stack Web Developer
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "tween",
                            damping: 10,
                            mass: 0.75,
                            stiffness: 100,
                            duration: 0.8,
                        }}
                        className="Screen__Content__Font"
                    >
                        I am a young passionate developer, ready to build
                        enterprise-level applications that help businesses
                        achieve their goals. I am eager to learn and grow, and I
                        am confident that I can make a significant contribution
                        to the assigned projects
                    </motion.p>
                </div>
                <div className="Screen__Image__Container">
                    <img
                        className="Screen__Image"
                        src="https://ucarecdn.com/d01bd116-2e18-41fc-9aa1-4a590c9cc8f1/"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Screen;

