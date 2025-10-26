import React, { useState, useRef, useEffect } from 'react';
import Header from './Header.jsx';

const OurWorks = () => {
    const aybImages = [
        '/images/ayb1.png',
        '/images/ayb2.png',
        '/images/ayb3.png',
        '/images/ayb4.png',
    ];

    const lusineImages = [
        '/images/lusine1.jpg',
        '/images/lusine2.jpg',
        '/images/lusine3.jpg',
        '/images/lusine4.jpg',
    ];

    const [aybIndex, setAybIndex] = useState(0);
    const [lusineIndex, setLusineIndex] = useState(0);

    const audioRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(err => {
                // Catch AbortError or other playback errors
                console.warn('Audio playback failed:', err);
            });
        }
    };

    const prevAyb = () => { if (aybIndex > 0) { playSound(); setAybIndex(aybIndex - 1); } };
    const nextAyb = () => { if (aybIndex < aybImages.length - 1) { playSound(); setAybIndex(aybIndex + 1); } };
    const prevLusine = () => { if (lusineIndex > 0) { playSound(); setLusineIndex(lusineIndex - 1); } };
    const nextLusine = () => { if (lusineIndex < lusineImages.length - 1) { playSound(); setLusineIndex(lusineIndex + 1); } };

    const leftArrowFull = '/images/left-arrow-full.svg';
    const leftArrowEmpty = '/images/left-arrow-empty.svg';
    const rightArrowFull = '/images/right-arrow-full.svg';
    const rightArrowEmpty = '/images/right-arrow-empty.svg';

    return (
        <div id="ourworks" className="bg-[#edebe9] pt-[100px] flex justify-center items-center w-full overflow-x-hidden">
            <Header />

            {/* Hidden audio element */}
            <audio ref={audioRef} src="/audio/link_click.mp3" preload="auto" />

            <div className="w-full px-4 sm:px-6 lg:w-[80%] flex flex-col gap-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#453336] font-[Retropix] text-left w-full"> OUR RECENT WORKS </h1>
                {/* AYB JEWELRY SECTION */}
                <div className="flex flex-col w-full gap-4 sm:gap-6">
                    <div className="flex flex-col w-full gap-2">
                        <h2 className="text-[#52959e] text-xl sm:text-2xl font-[Retropix]">AYB JEWELRY</h2>
                        <p className="font-[Retropix] text-sm sm:text-base">
                            Developed using React.js for the frontend, Tailwind CSS for styling,
                            and Node.js with MongoDB for a secure, fast backend.
                        </p>
                        <a
                            href="https://aybjewelry.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:opacity-80 transition-opacity mt-2"
                        >
                            <img className="w-8 sm:w-10 scale-400" src="/images/web-icon.svg" alt="" />
                            <p className="font-[Retropix] underline text-sm sm:text-base ml-1">aybjewelry.com</p>
                        </a>
                    </div>
                    <div className="flex justify-center items-center sm:gap-2 lg:gap-1 w-full">
                        <button onClick={prevAyb} disabled={aybIndex === 0}>
                            <img
                                className="w-12 sm:w-16 lg:w-20 scale-400"
                                src={aybIndex === 0 ? leftArrowEmpty : leftArrowFull}
                                alt="Previous"
                            />
                        </button>
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                className="w-full max-w-[600px] h-[200px] sm:h-[300px] lg:h-[400px] object-contain"
                                src={aybImages[aybIndex]}
                                alt={`AYB Jewelry ${aybIndex + 1}`}
                            />
                        </div>
                        <button onClick={nextAyb} disabled={aybIndex === aybImages.length - 1}>
                            <img
                                className="w-12 sm:w-16 lg:w-20 scale-400"
                                src={aybIndex === aybImages.length - 1 ? rightArrowEmpty : rightArrowFull}
                                alt="Next"
                            />
                        </button>
                    </div>
                </div>

                {/* LUSINE MACHKALIAN SECTION */}
                <div className="flex flex-col w-full gap-4 sm:gap-6">
                    <div className="flex flex-col w-full gap-2">
                        <h2 className="text-[#52959e] text-xl sm:text-2xl font-[Retropix]">LUSINE MACHKALIAN</h2>
                        <p className="font-[Retropix] text-sm sm:text-base">
                            Developed using React.js for the frontend, Tailwind CSS for styling,
                            and Node.js with MongoDB for a secure, fast backend.
                        </p>
                        <a
                            href="https://lusinemachkalian.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:opacity-80 transition-opacity mt-2"
                        >
                            <img className="w-8 sm:w-10 scale-400" src="/images/web-icon.svg" alt="" />
                            <p className="font-[Retropix] underline text-sm sm:text-base ml-1">lusinemachkalian.com</p>
                        </a>
                    </div>
                    <div className="flex justify-center items-center sm:gap-2 lg:gap-1 w-full">
                        <button onClick={prevLusine} disabled={lusineIndex === 0}>
                            <img
                                className="w-12 sm:w-16 lg:w-20 scale-400"
                                src={lusineIndex === 0 ? leftArrowEmpty : leftArrowFull}
                                alt="Previous"
                            />
                        </button>
                        <div className="flex-1 flex justify-center items-center">
                            <img
                                className="w-full max-w-[600px] h-[200px] sm:h-[300px] lg:h-[400px] object-contain"
                                src={lusineImages[lusineIndex]}
                                alt={`Lusine Machkalian ${lusineIndex + 1}`}
                            />
                        </div>
                        <button onClick={nextLusine} disabled={lusineIndex === lusineImages.length - 1}>
                            <img
                                className="w-12 sm:w-16 lg:w-20 scale-400"
                                src={lusineIndex === lusineImages.length - 1 ? rightArrowEmpty : rightArrowFull}
                                alt="Next"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
