import React from 'react';

const AboutSection = () => {
    return (
        <div id="aboutus" className="min-h-screen bg-[#edebe9] flex justify-center items-center relative px-4 py-12 h-[calc(100vh-60px)]">
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
    );
};

export default AboutSection;