import React from 'react';

const WhyChooseSection = () => {
    return (
        <div className="flex justify-center items-center w-full h-[calc(100vh-60px)] bg-[#601d33] relative">
            <img className="absolute left-[-12rem] top-0" src="/images/globe.svg" alt="globe"/>
            <div className="w-[75%] flex flex-col gap-35 justify-between relative">
                <h1 className="font-[Retropix] text-4xl text-[#fffeb3] text-right">WHY CHOOSE US?</h1>
                <div className="w-[50%]">
                    <h2 className="text-2xl text-[#fffeb3] text-left font-[Retropix]">
                    WE GROW WITH YOU
                    </h2>
                    <p className="text-left font-[Retropix] text-[#edebe9] text-xl">
                        Need to add features later? Want to expand? We're here to help your website evolve as your business grows.
                    </p>
                </div>
                <div className="w-[50%] absolute right-0 top-65">
                    <h2 className="text-2xl text-[#fffeb3] text-right font-[Retropix]">
                        WE STICK AROUND AFTER LAUNCH
                    </h2>
                    <p className="text-right font-[Retropix] text-[#edebe9] text-xl">
                        Your website goes live, but we don't disappear. If something breaks or you need help, we're just a message away.
                    </p>
                </div>
                <div className="w-[50%]">
                    <h2 className="text-2xl text-[#fffeb3] text-left font-[Retropix]">
                        WE CARE ABOUT YOUR SUCCESS
                    </h2>
                    <p className="text-left font-[Retropix] text-[#edebe9] text-xl">
                        When your website helps your business thrive, that's a win for us too. Your growth is our motivation.
                    </p>
                </div>
            </div>

            
        </div>
    );
};

export default WhyChooseSection;