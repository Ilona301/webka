import React, { useRef } from 'react';

const MainSection = () => {
    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
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
            <div className="min-h-screen flex flex-col justify-center items-center bg-[#52959e] gap-8 px-4 py-12 overflow-hidden">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-[Retropix] text-[70px] text-[#f5e7d7] retro-minimal">
                        WEBKA
                    </h1>
                    <p className="text-center mt-4 text-[20px] font-[Retropix] text-[#f5e7d7]">
                        To create is to live twice.
                    </p>
                </div>

                <button
                    onClick={playSound}
                    className="font-[Retropix] relative px-6 sm:px-9 py-3 bg-[#f5e7d7] border-4 border-[#453336] text-[#453336] text-sm sm:text-base font-bold uppercase tracking-wider
                    before:content-[''] before:absolute before:inset-0 before:translate-x-[4px] before:translate-y-[4px] before:bg-[#bfa48b] before:-z-10
                    hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                    active:translate-x-[4px] active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                    transition-all duration-150 ease-out">
                    Get your Webka
                </button>
            </div>

            {/* ABOUT SECTION */}
            <div className="min-h-screen bg-[#edebe9] flex justify-center items-center relative px-4 py-12">
                <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12 border-b-2 border-b-[#b4b4b4] pb-12">
                    <div className="w-full lg:w-[60%]">
                        <h1 className="font-[Retropix] text-2xl sm:text-3xl lg:text-4xl text-[#453336] mb-4">
                            About the company
                        </h1>
                        <p className="text-[#52959e] text-sm sm:text-base leading-relaxed font-[Retropix]">
                            We are the bridge between your vision and its digital reality. When you trust us with your ideas, we don't just build websites—we craft spaces where your story comes alive and your purpose finds its voice. Your growth fuels ours, and our dedication fuels yours.
                        </p>
                    </div>

                    <div className="w-full lg:w-[40%] lg:border-l-2 lg:border-l-[#b4b4b4] lg:pl-8 pt-8 lg:pt-0 border-t-2 lg:border-t-0 border-t-[#b4b4b4]">
                        <h1 className="font-[Retropix] text-2xl sm:text-3xl lg:text-4xl text-[#453336] mb-4">
                            About us
                        </h1>
                        <p className="text-[#52959e] font-[Retropix] text-sm sm:text-base leading-relaxed">
                            We are the bridge between your vision and its digital reality. When you trust us with your ideas, we don't just build websites—we craft spaces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;
