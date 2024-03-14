import React from "react";
import "./App.css";
import Home from "./Demo/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./Demo/AboutPage";
import Skill from "./Demo/Skill";
import Projects from "./Demo/Projects";
import "./index.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/project" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
