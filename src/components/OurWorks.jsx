import React, { useState, useRef } from 'react';
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

    // Separate state for both sliders
    const [aybIndex, setAybIndex] = useState(0);
    const [lusineIndex, setLusineIndex] = useState(0);

    // Audio ref
    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    // AYB Slider Controls
    const prevAyb = () => {
        if (aybIndex > 0) {
            playSound();
            setAybIndex(aybIndex - 1);
        }
    };

    const nextAyb = () => {
        if (aybIndex < aybImages.length - 1) {
            playSound();
            setAybIndex(aybIndex + 1);
        }
    };

    // Lusine Slider Controls
    const prevLusine = () => {
        if (lusineIndex > 0) {
            playSound();
            setLusineIndex(lusineIndex - 1);
        }
    };

    const nextLusine = () => {
        if (lusineIndex < lusineImages.length - 1) {
            playSound();
            setLusineIndex(lusineIndex + 1);
        }
    };

    // Arrow states for both
    const leftArrowFull = '/images/left-arrow-full.svg';
    const leftArrowEmpty = '/images/left-arrow-empty.svg';
    const rightArrowFull = '/images/right-arrow-full.svg';
    const rightArrowEmpty = '/images/right-arrow-empty.svg';

    return (
        <div id="ourworks" className="bg-[#edebe9] pt-[60px] flex justify-center items-center w-full">
            <Header />

            {/* Hidden audio element (same as in Header) */}
            <audio ref={audioRef} src="/audio/link_click.mp3" preload="auto" />

            <div className="w-[80%] bg-[#edebe9] justify-center items-center flex">
                <div className="bg-[#edebe9] min-h-[100vh] justify-center flex items-center flex-col gap-12">
                    <h1 className="text-4xl text-[#453336] font-[Retropix] text-left w-full">
                        OUR RECENT WORKS
                    </h1>

                    {/* AYB JEWELRY SECTION */}
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col w-[30%] gap-2">
                            <h2 className="text-[#52959e] text-2xl font-[Retropix]">AYB JEWELRY</h2>
                            <p className="font-[Retropix]">
                                Developed using React.js for the frontend, Tailwind CSS for styling,
                                and Node.js with MongoDB for a secure, fast backend.
                            </p>
                            <a
                                href="https://aybjewelry.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-80 transition-opacity"
                            >
                                <img className="w-10 scale-450" src="/images/web-icon.svg" alt="" />
                                <p className="font-[Retropix] underline">aybjewelry.com</p>
                            </a>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <button onClick={prevAyb} disabled={aybIndex === 0}>
                                <img
                                    className="w-20 scale-400"
                                    src={aybIndex === 0 ? leftArrowEmpty : leftArrowFull}
                                    alt="Previous"
                                />
                            </button>
                            <img
                                className="w-70 h-50 object-contain"
                                src={aybImages[aybIndex]}
                                alt={`AYB Jewelry ${aybIndex + 1}`}
                            />
                            <button
                                onClick={nextAyb}
                                disabled={aybIndex === aybImages.length - 1}
                            >
                                <img
                                    className="w-20 scale-400"
                                    src={aybIndex === aybImages.length - 1 ? rightArrowEmpty : rightArrowFull}
                                    alt="Next"
                                />
                            </button>
                        </div>
                    </div>

                    {/* LUSINE MACHKALIAN SECTION */}
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col w-[30%] gap-2">
                            <h2 className="text-[#52959e] text-2xl font-[Retropix]">LUSINE MACHKALIAN</h2>
                            <p className="font-[Retropix]">
                                Developed using React.js for the frontend, Tailwind CSS for styling,
                                and Node.js with MongoDB for a secure, fast backend.
                            </p>
                            <a
                                href="https://lusinemachkalian.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-80 transition-opacity"
                            >
                                <img className="w-10 scale-450" src="/images/web-icon.svg" alt="" />
                                <p className="font-[Retropix] underline">lusinemachkalian.com</p>
                            </a>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <button onClick={prevLusine} disabled={lusineIndex === 0}>
                                <img
                                    className="w-20 scale-400"
                                    src={lusineIndex === 0 ? leftArrowEmpty : leftArrowFull}
                                    alt="Previous"
                                />
                            </button>
                            <img
                                className="w-70 h-50 object-contain"
                                src={lusineImages[lusineIndex]}
                                alt={`Lusine Machkalian ${lusineIndex + 1}`}
                            />
                            <button
                                onClick={nextLusine}
                                disabled={lusineIndex === lusineImages.length - 1}
                            >
                                <img
                                    className="w-20 scale-400"
                                    src={lusineIndex === lusineImages.length - 1 ? rightArrowEmpty : rightArrowFull}
                                    alt="Next"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
