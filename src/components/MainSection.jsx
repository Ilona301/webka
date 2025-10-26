import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AboutSection from "./AboutSection.jsx";
import RetroLoader from "./RetroLoader.jsx";

const MainSection = () => {
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    // ✅ Handle viewport height for mobile (fixes iPhone bottom bar issue)
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setVh();
        window.addEventListener("resize", setVh);
        return () => window.removeEventListener("resize", setVh);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play()
                .then(() => {
                    setTimeout(() => {
                        navigate("/getWebka");
                    }, 300);
                })
                .catch(error => {
                    console.error("Audio playback failed:", error);
                    navigate("/getWebka");
                });
        } else {
            navigate("/getWebka");
        }
    };

    return (
        <>
            {isLoading && <RetroLoader />}
            <div className="relative w-full overflow-x-hidden">
                <audio ref={audioRef} src="/audio/link_click.mp3" preload="auto" />

                {/* ✅ Robot positioning adjusted so it's visible on mobile */}
                <img
                    className="absolute left-[-4rem] w-[400px] sm:w-[450px] md:w-[500px] h-auto z-10"
                    style={{
                        top: "calc(var(--vh, 1vh) * 100 - 250px)", // pushes it up slightly
                    }}
                    src="/images/logo/robot.svg"
                    alt="robot"
                    onLoad={() => setIsLoading(false)}
                />

                {/* ✅ MAIN HERO */}
                <div
                    className="w-full flex flex-col justify-center items-center bg-[#52959e] gap-6 sm:gap-8 px-4 py-12 transition-all duration-300"
                    style={{
                        // On mobile -> 50% screen, on larger -> full
                        height: "calc(var(--vh, 1vh) * 100)",
                        minHeight: "50dvh",
                    }}
                >
                    <div className="flex justify-center items-center flex-col max-w-full">
                        <h1 className="font-[Retropix] text-[clamp(2.5rem,12vw,70px)] text-[#f5e7d7] text-center leading-none">
                            WEBKA
                        </h1>
                        <p className="text-center mt-3 sm:mt-4 text-[clamp(1rem,4vw,20px)] font-[Retropix] text-[#f5e7d7] px-4 max-w-full">
                            To create is to live twice.
                        </p>
                    </div>

                    <button
                        onClick={handleClick}
                        className="font-[Retropix] relative px-4 xs:px-6 sm:px-9 py-2.5 sm:py-3 bg-[#f5e7d7] border-3 sm:border-4 border-[#453336] text-[#453336] text-xs xs:text-sm sm:text-base font-bold uppercase tracking-wider
                        before:content-[''] before:absolute before:inset-0 before:translate-x-[3px] before:translate-y-[3px] sm:before:translate-x-[4px] sm:before:translate-y-[4px] before:bg-[#bfa48b] before:-z-10
                        hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                        active:translate-x-[3px] active:translate-y-[3px] sm:active:translate-x-[4px] sm:active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                        transition-all duration-150 ease-out whitespace-nowrap"
                    >
                        Get your Webka
                    </button>
                </div>

                {/* ✅ ABOUT SECTION */}
                <AboutSection />
            </div>
        </>
    );
};

export default MainSection;
