import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const MainSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToNext = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#faf8f5] to-[#e8e4df]">
            {/* Main content - Upper-Middle */}
            <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40">

                {/* Main heading */}
                <div
                    className={`text-center mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <h1
                        className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold font-[Aclonica] text-gray-600 mb-2 sm:mb-3"
                        style={{ fontFamily: 'Aclonica' }}
                    >
                        Make your ideas alive with
                    </h1>
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                        <img
                            className="flex justify-center items-center  w-64 sm:w-64 md:w-64 lg:w-64
                              h-20 object-cover max-w-full "
                            src="/images/logo/logo.png"
                            alt="Webka Logo"
                        />
                    </div>
                </div>

                {/* Abstract Subtext */}
                <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl text-[#b4b4b4] text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-4 mb-8 sm:mb-10 md:mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ fontFamily: 'Aclonica' }}
                >
                   Tell us your idea.
                </p>

                {/* CTA Button */}
                <button
                    className={`px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 border-2  text-[#b4b4b4] text-xs sm:text-sm tracking-widest  transition-all duration-300 hover:scale-105 shadow-md ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ fontFamily: 'serif' }}
                >
                    DISCOVER MORE
                </button>
            </div>

            {/* Scroll indicator - Bottom but visible */}
            <div
                className={`absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group transition-all duration-1000 delay-600 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={scrollToNext}
            >
                <span className="text-[#b4b4b4] text-xs tracking-widest mb-2 group-hover:text-black transition-colors" style={{ fontFamily: 'serif' }}>
                    SCROLL
                </span>
                <div className="animate-bounce">
                    <ChevronDown
                        className="w-5 h-5 text-[#b4b4b4] group-hover:text-black transition-colors"
                        strokeWidth={1.5}
                    />
                </div>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c4a788]/20 to-transparent" />
        </div>
    );
};

export default MainSection;