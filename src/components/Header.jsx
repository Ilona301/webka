import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const audioRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((error) => {
                console.error('Audio playback failed:', error);
            });
        } else {
            console.error('Audio ref is not initialized');
        }
    };

    const handleLogoClick = () => {
        playSound();
        setTimeout(() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
    };

    const handleLinkClick = (item) => {
        playSound();
        setIsMenuOpen(false);

        setTimeout(() => {
            if (item === 'Home') {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (item === 'Contact') {
                navigate('/contact');
            } else if (item === 'Our works') {
                navigate('/our-works');
            } else if (item === 'About us') {
                if (location.pathname === '/') {
                    const element = document.getElementById('aboutus');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    navigate('/about');
                }
            } else {
                const element = document.getElementById(item.toLowerCase().replace(' ', ''));
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 150);
    };

    return (
        <div className="fixed top-0 left-0 right-0 w-full z-50 bg-[#52959e] border-b-4 border-[#453336] shadow-[0_4px_0_#453336]">
            {/* Hidden audio element */}
            <audio ref={audioRef} src="/audio/link_click.mp3" preload="auto" />

            <div className="h-[60px] w-[92%] mx-auto flex justify-between items-center">
                {/* Logo/Brand */}
                <div
                    className="text-[#f5e7d7] text-lg sm:text-base font-[Retropix] tracking-widest drop-shadow-[0_2px_0_#453336] select-none cursor-pointer"
                    onClick={handleLogoClick}
                >
                    GET YOUR WEBKA
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 text-xl font-[Retropix]">
                    {['Home', 'About us', 'Our works', 'Contact'].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => handleLinkClick(item)}
                            className="relative text-[#f5e7d7] transition-all duration-150 hover:text-[#453336] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#453336] hover:after:w-full after:transition-all after:duration-150"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-center border-2 border-[#453336] bg-[#f5e7d7] shadow-[2px_2px_0_#453336] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-4/5 h-0.5 bg-[#453336] transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-4/5 h-0.5 bg-[#453336] transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}
                    ></span>
                    <span
                        className={`w-4/5 h-0.5 bg-[#453336] transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                        }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                    isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-[#f5e7d7] border-t-4 border-[#453336] shadow-[0_4px_0_#453336] flex flex-col items-center py-5 gap-4 font-[Retropix] text-[#453336] text-base">
                    {['Home', 'About us', 'Our works', 'Contact'].map((item, i) => (
                        <button
                            key={i}
                            className="relative hover:text-[#52959e] transition-all hover:brightness-125 after:content-['▸'] after:ml-1 after:text-[#65a88c]"
                            onClick={() => handleLinkClick(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;