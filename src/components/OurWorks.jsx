import React, {useState, useRef, useEffect} from 'react';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div id="ourworks" className="bg-[#edebe9] pt-[60px] flex justify-center items-center w-full overflow-x-hidden">
            <Header />

            {/* Hidden audio element */}
            <audio ref={audioRef} src="/audio/link_click.mp3" preload="auto" />

            <div className="w-full px-4 sm:px-6 lg:w-[80%] bg-[#edebe9] justify-center items-center flex">
                <div className="bg-[#edebe9] min-h-screen py-12 sm:py-16 lg:py-20 justify-center flex items-center flex-col gap-8 sm:gap-10 lg:gap-12 w-full">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#453336] font-[Retropix] text-left w-full">
                        OUR RECENT WORKS
                    </h1>

                    {/* AYB JEWELRY SECTION */}
                    <div className="flex flex-col w-full gap-4 sm:gap-6">
                        {/* Text Section */}
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

                    {/* Slider Section */}
                    <div className="flex justify-center items-center sm:gap-2 lg:gap-1 w-full">
                        <button onClick={prevAyb} disabled={aybIndex === 0} className="flex-shrink-0">
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
                        <button
                            onClick={nextAyb}
                            disabled={aybIndex === aybImages.length - 1}
                            className="flex-shrink-0"
                        >
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
                    {/* Text Section */}
                    <div className="flex flex-col w-full gap-2">
                        <h2 className="text-[#52959e] text-xl sm:text-2xl font-[Retropix]">LUSINE MACHKALIAN</h2>
                        <p className="font-[Retropix] text-sm sm:text-base">
                            Developed using React.js for the frontend, Tailwind CSS for styling,
                            and Node.js with MongoDB for a secure, fast backend.
                        </p>


                      <a  href="https://lusinemachkalian.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:opacity-80 transition-opacity mt-2"
                        >
                        <img className="w-8 sm:w-10 scale-400" src="/images/web-icon.svg" alt="" />
                        <p className="font-[Retropix] underline text-sm sm:text-base ml-1">lusinemachkalian.com</p>
                    </a>
                </div>

                {/* Slider Section */}
                <div className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-1 w-full">
                    <button onClick={prevLusine} disabled={lusineIndex === 0} className="flex-shrink-0">
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
                    <button
                        onClick={nextLusine}
                        disabled={lusineIndex === lusineImages.length - 1}
                        className="flex-shrink-0"
                    >
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
</div>
);
};

export default OurWorks;