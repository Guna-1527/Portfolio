import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
const Projects = () => {
    return (
        <div className="ProjectContainer">
            <marquee className="marqueeTitle">Projects</marquee>
            <motion.div
                initial={{ x: -2000, rotate: "0deg" }}
                animate={{ x: 0, rotate: "360deg" }}
                transition={{ duration: 2 }}
                className="reactImage"
            >
                <img
                    src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
                    alt=""
                />
            </motion.div>

            <div className="MainProjectContainer">
                <div className="ProjectWrapper">
                    <motion.img
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        src="https://cdn.alza.cz/Foto/ImgGalery/Image/netflix-title_1.jpg"
                        alt=""
                    />
                    <motion.img
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        src="https://internationaljournalofresearch.files.wordpress.com/2020/07/5d07c76a696bfc4b3cb88294_cryptocurrency.jpg"
                        alt=""
                    />
                    <motion.img
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        src="	https://static.startuptalky.com/2023/09/opening-online-bank-account-guide-Startuptalky.jpg"
                        alt=""
                    />
                    <motion.img
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        src="https://static.vecteezy.com/system/resources/thumbnails/004/379/352/small/delivery-van-driver-with-parcels-flat-character-courier-postman-deliveryman-holding-cardboard-boxes-and-order-receipt-isolated-cartoon-illustration-on-white-background-shipping-service-transport-vector.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <Link className="text-black absolute bottom-[20px] right-[14px] font-bold" to="/">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
