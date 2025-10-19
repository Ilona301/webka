import React from 'react';
import Header from "./Header.jsx";

const OurWorks = () => {
    return (
        <div id="ourworks" className="bg-[#edebe9] flex justify-center items-center w-full">
            <Header />
            <div className="w-[80%] bg-[#edebe9] justify-center items-center flex">
                <div className="bg-[#edebe9] min-h-[100vh] justify-center flex items-center flex-col gap-12">
                    <h1 className="text-4xl text-[#453336] font-[Retropix] text-left w-full">OUR RECENT WORKS</h1>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col w-[30%] gap-2">
                            <h2 className="text-[#52959e] text-2xl font-[Retropix]">AYB JEWELRY</h2>
                            <p className="font-[Retropix]">Developed using React.js for the frontend, Tailwind CSS for styling, and Node.js with MongoDB for a secure, fast backend.</p>
                            <a
                                href="https://aybjewelry.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-80 transition-opacity"
                            >
                                <img className="w-10 scale-450" src="/images/web-icon.svg" alt=""/>
                                <p className="font-[Retropix] underline">aybjewelry.com</p>
                            </a>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="w-20 scale-400" src="/images/left-arrow-empty.svg" alt=""/>
                            <img className="w-70 h-auto" src="/images/ayb1.png" alt="ayb1"/>
                            <img className="w-20 scale-400"  src="/images/right-arrow-full.svg" alt=""/>
                        </div>
                    </div>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col w-[30%] gap-2">
                            <h2 className="text-2xl font-[Retropix] text-[#52959e]">LUSINE MACHKALIAN</h2>
                            <p className="font-[Retropix]">Developed using Next.js for the frontend, Tailwind CSS for styling, and Node.js with MongoDB for a secure, fast backend.</p>
                            <a
                                href="https://lusinemachkalian.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:opacity-80 transition-opacity"
                            >
                                <img className="w-10 scale-450" src="/images/web-icon.svg" alt=""/>
                                <p className="font-[Retropix] underline">lusinemachkalian.com</p>
                            </a>
                        </div>
                        <div className="flex justify-center items-center">
                            <img className="w-20 scale-400" src="/images/left-arrow-empty.svg" alt=""/>
                            <img className="w-70 h-auto" src="/images/lusine1.jpg" alt="ayb1"/>
                            <img className="w-20 scale-400"  src="/images/right-arrow-full.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;