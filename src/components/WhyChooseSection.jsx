import React from 'react';

const WhyChooseSection = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-[calc(100vh-60px)] bg-[#601d33] relative overflow-hidden py-12 px-4">
            <img
                className="absolute left-[-6rem] sm:left-[-10rem] md:left-[-8rem] lg:left-[-12rem] top-[-6rem] lg:top-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-auto opacity-50 lg:opacity-50"
                src="/images/globe.svg"
                alt="globe"
            />

            <div className="w-full max-w-[1400px] lg:w-[85%] xl:w-[75%] flex flex-col gap-12 sm:gap-12 lg:gap-16 xl:gap-20 justify-center relative z-10">
                <h1 className="font-[Retropix] text-[clamp(1.75rem,5vw,2.25rem)] text-[#fffeb3] text-right lg:text-right">
                    WHY CHOOSE US?
                </h1>

                {/* Mobile/Tablet Layout - Vertical Stack */}
                <div className="flex lg:hidden flex-col gap-16 sm:gap-10">
                    <div className="w-full">
                        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] text-[#fffeb3] text-left font-[Retropix] mb-2 sm:mb-3">
                            WE GROW WITH YOU
                        </h2>
                        <p className="text-left font-[Retropix] text-[#edebe9] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                            Need to add features later? Want to expand? We're here to help your website evolve as your business grows.
                        </p>
                    </div>

                    <div className="w-full">
                        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] text-[#fffeb3] text-left font-[Retropix] mb-2 sm:mb-3">
                            WE STICK AROUND AFTER LAUNCH
                        </h2>
                        <p className="text-left font-[Retropix] text-[#edebe9] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                            Your website goes live, but we don't disappear. If something breaks or you need help, we're just a message away.
                        </p>
                    </div>

                    <div className="w-full">
                        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] text-[#fffeb3] text-left font-[Retropix] mb-2 sm:mb-3">
                            WE CARE ABOUT YOUR SUCCESS
                        </h2>
                        <p className="text-left font-[Retropix] text-[#edebe9] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                            When your website helps your business thrive, that's a win for us too. Your growth is our motivation.
                        </p>
                    </div>
                </div>

                {/* Desktop Layout - Original Staggered Design */}
                <div className="hidden lg:flex flex-col gap-16 xl:gap-20 relative">
                    <div className="w-[50%]">
                        <h2 className="text-xl xl:text-2xl text-[#fffeb3] text-left font-[Retropix] mb-3">
                            WE GROW WITH YOU
                        </h2>
                        <p className="text-left font-[Retropix] text-[#edebe9] text-lg xl:text-xl leading-relaxed">
                            Need to add features later? Want to expand? We're here to help your website evolve as your business grows.
                        </p>
                    </div>

                    <div className="w-[50%] self-end">
                        <h2 className="text-xl xl:text-2xl text-[#fffeb3] text-right font-[Retropix] mb-3">
                            WE STICK AROUND AFTER LAUNCH
                        </h2>
                        <p className="text-right font-[Retropix] text-[#edebe9] text-lg xl:text-xl leading-relaxed">
                            Your website goes live, but we don't disappear. If something breaks or you need help, we're just a message away.
                        </p>
                    </div>

                    <div className="w-[50%]">
                        <h2 className="text-xl xl:text-2xl text-[#fffeb3] text-left font-[Retropix] mb-3">
                            WE CARE ABOUT YOUR SUCCESS
                        </h2>
                        <p className="text-left font-[Retropix] text-[#edebe9] text-lg xl:text-xl leading-relaxed">
                            When your website helps your business thrive, that's a win for us too. Your growth is our motivation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;