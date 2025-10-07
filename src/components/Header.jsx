import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#B4B4B4] border-b border-[#F4F4F4] fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img className="md:w-[200px] w-[200px]" src="/1.png" alt="logo"/>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#services" className="text-sm font-medium text-[#F4F4F4] hover:text-gray-900 transition-colors">
                            Services
                        </a>
                        <a href="#about" className="text-sm font-medium text-[#F4F4F4] hover:text-gray-900 transition-colors">
                            About
                        </a>
                        <a href="#work" className="text-sm font-medium text-[#F4F4F4] hover:text-gray-900 transition-colors">
                            Work
                        </a>
                        <a href="#contact" className="text-sm font-medium text-[#F4F4F4] hover:text-gray-900 transition-colors">
                            Contact
                        </a>
                        <a href="#contact" className="px-6 py-2 bg-[#B4B4B4] text-white text-sm font-medium hover:bg-gray-900 transition-colors">
                            Get Started
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#B4B4B4] hover:text-gray-900 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[#F4F4F4]">
                        <div className="flex flex-col space-y-4">
                            <a
                                href="#services"
                                className="text-sm font-medium text-[#B4B4B4] hover:text-gray-900 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="text-sm font-medium text-[#B4B4B4] hover:text-gray-900 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#work"
                                className="text-sm font-medium text-[#B4B4B4] hover:text-gray-900 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Work
                            </a>
                            <a
                                href="#contact"
                                className="text-sm font-medium text-[#B4B4B4] hover:text-gray-900 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-2 bg-[#B4B4B4] text-white text-sm font-medium text-center hover:bg-gray-900 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                            </a>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;