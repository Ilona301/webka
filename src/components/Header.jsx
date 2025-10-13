import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 w-full z-50 bg-[#52959e] border-b-4 border-[#453336] shadow-[0_4px_0_#453336]">
            <div className="h-[60px] w-[92%] mx-auto flex justify-between items-center">
                {/* Logo/Brand */}
                <div className="text-[#f5e7d7] text-lg sm:text-base font-[Retropix] tracking-widest drop-shadow-[0_2px_0_#453336] select-none">
                    GET YOUR WEBKA
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-8 text-sm font-[Retropix]">
                    {['Home', 'About us', 'Our works', 'Contact'].map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="relative text-[#f5e7d7] transition-all duration-150 hover:text-[#453336] after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[#453336] hover:after:w-full after:transition-all after:duration-150"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-7 h-7 justify-center items-center border-2 border-[#453336] bg-[#ffe7b1] shadow-[2px_2px_0_#453336] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
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
                <div className="bg-[#ffe7b1] border-t-4 border-[#453336] shadow-[0_4px_0_#453336] flex flex-col items-center py-5 gap-4 font-[Retropix] text-[#453336] text-base">
                    {['Home', 'About us', 'Our works', 'Contact'].map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="relative hover:text-[#65a88c] transition-all hover:brightness-125 after:content-['▸'] after:ml-1 after:text-[#65a88c]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
