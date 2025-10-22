import './index.css';
import MainSection from "./components/MainSection.jsx";
import Header from "./components/Header.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import WhyChooseSection from "./components/WhyChooseSection.jsx";
import GetYourWebka from "./components/GetYourWebka.jsx";
import Contact from "./components/Contact.jsx";
import OurWorks from "./components/OurWorks.jsx";
import { Routes, Route } from "react-router-dom";
import React, { useRef } from "react";

function App() {
    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {}); // prevent browser autoplay errors
        }
    };

    return (
        <>
            <audio ref={audioRef} src="/sounds/click.mp3" preload="auto" />

            <Routes>
                <Route path="/" element={
                    <>
                        <Header playSound={playSound} />
                        <MainSection />
                        <WorkSection />
                        <WhyChooseSection />
                    </>
                } />

                <Route path="/getWebka" element={
                    <>
                        <Header playSound={playSound} />
                        <GetYourWebka />
                    </>
                } />

                <Route path="/contact" element={
                    <>
                        <Header playSound={playSound} />
                        <Contact />
                    </>
                } />

                <Route path="/about" element={
                    <>
                        <Header playSound={playSound} />
                        <AboutSection />
                    </>
                } />

                <Route path="/our-works" element={
                    <>
                        <Header playSound={playSound} />
                        <OurWorks />
                    </>
                } />
            </Routes>
        </>
    );
}

export default App;
