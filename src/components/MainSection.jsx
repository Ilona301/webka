import React, { useRef } from 'react';
import {useNavigate} from "react-router-dom";
import AboutSection from "./AboutSection.jsx";

const MainSection = () => {
    const audioRef = useRef(null);
    const navigate = useNavigate();

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };
    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play()
                .then(() => {
                    // Wait for audio to finish or set a shorter timeout
                    setTimeout(() => {
                        navigate("/getWebka");
                    }, 300); // Adjust based on audio duration
                })
                .catch(error => {
                    console.error("Audio playback failed:", error);
                    navigate("/getWebka"); // Navigate anyway if audio fails
                });
        } else {
            navigate("/getWebka");
        }
    };
    return (
        <div className="relative">
            <audio ref={audioRef} src="/audio/retro_button_audio.mp3" preload="auto" />

            <img
                className="absolute top-[80vh] lg:top-[60vh] lg:left-0 w-60 sm:w-56 md:w-64 lg:w-80 xl:w-[500px] h-auto z-10"
                src="/images/logo/robot.svg"
                alt="robot"
            />

            {/* MAIN HERO */}
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#52959e] gap-8 px-4 py-12 overflow-hidden h-[calc(100vh-60px)]">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-[Retropix] text-[70px] text-[#f5e7d7] retro-minimal">
                        WEBKA
                    </h1>
                    <p className="text-center mt-4 text-[20px] font-[Retropix] text-[#f5e7d7]">
                        To create is to live twice.
                    </p>
                </div>

                <button
                     onClick={handleClick}
                className="font-[Retropix] relative px-6 sm:px-9 py-3 bg-[#f5e7d7] border-4 border-[#453336] text-[#453336] text-sm sm:text-base font-bold uppercase tracking-wider
                before:content-[''] before:absolute before:inset-0 before:translate-x-[4px] before:translate-y-[4px] before:bg-[#bfa48b] before:-z-10
                hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                active:translate-x-[4px] active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                transition-all duration-150 ease-out">

                Get your Webka
            </button>


            </div>

            {/* ABOUT SECTION */}
            <AboutSection/>
        </div>
    );
};

export default MainSection;
