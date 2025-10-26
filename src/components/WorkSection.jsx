import React from 'react';

const WorkSection = () => {
    return (
        <div className="bg-[#52959e] min-h-[calc(100vh-60px)] flex justify-center items-center py-12 px-4 overflow-x-hidden">
            <div className="w-full max-w-[1400px] lg:w-[90%] xl:w-[80%] flex justify-center flex-col gap-6 sm:gap-8 lg:gap-10">
                <h1 className="font-[Retropix] text-[clamp(1.75rem,5vw,40px)] text-[#d7ca75] text-center lg:text-left">
                    HOW WE WORK?
                </h1>

                {/* Desktop Layout - 4 columns */}
                <div className="hidden lg:flex items-start justify-center gap-8 xl:gap-12">
                    <div className="flex flex-col gap-3 w-full">
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] xl:text-[20px]">WE EXPLORE YOUR COMPANY</h2>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-left text-[14px] xl:text-[16px] leading-relaxed">
                                We dive into your story, goals, and what makes your business stand out.
                            </p>
                            <div className="flex justify-end items-end w-full mt-2">
                                <img className="object-contain scale-200 h-[60px] xl:h-[80px] w-auto"
                                     src="/images/loop.svg" alt="rocket"/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-l border-r border-[#453336] px-6 xl:px-8 w-full">
                        <img className="object-contain h-[60px] scale-200 xl:h-[80px] w-auto" src="/images/lamp.svg" alt="lamp"/>
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] xl:text-[20px]">WE SHARE IDEAS</h2>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-right text-[14px] xl:text-[16px] leading-relaxed">
                                Together, we exchange thoughts and find the perfect approach for your website.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-r border-[#453336] pr-6 xl:pr-8 w-full">
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] xl:text-[20px] text-right">WE BUILD IT</h2>
                        <img className="w-auto h-[60px] xl:h-[80px] object-contain ml-auto scale-200"
                             src="/images/play.svg" alt=""/>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-right text-[14px] xl:text-[16px] leading-relaxed">
                                Our team turns the plan into a beautiful, functional website that fits your vision.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 justify-start items-center w-full">
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] xl:text-[20px] text-center">WE PRESENT IT TO YOU</h2>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-center text-[14px] xl:text-[16px] leading-relaxed">
                                You receive a complete, ready-to-use website built around your goals.
                            </p>
                            <img className="object-contain w-auto h-[60px] scale-200 xl:h-[80px] mx-auto mt-2"
                                 src="/images/rocket.svg" alt="rocket"/>
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout - 2x2 Grid */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-3 border-b-2 border-[#453336] p-4 sm:p-5 overflow-hidden">
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] sm:text-[18px] leading-tight">WE EXPLORE YOUR COMPANY</h2>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-left text-[13px] sm:text-[14px] leading-relaxed">
                                We dive into your story, goals, and what makes your business stand out.
                            </p>
                            <div className="flex justify-end items-end w-full overflow-hidden">
                                <div className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden">
                                    <img className="object-contain h-[40px] w-[40px] scale-300"
                                         src="/images/loop.svg" alt="explore"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col gap-3 border-b-2 border-[#453336] p-4 sm:p-5 overflow-hidden">
                        <div className="flex justify-start overflow-hidden">
                            <div className="w-[120px] h-[80px] flex items-center justify-start overflow-hidden">
                                <img className="object-contain h-[40px] w-[80px] scale-300" src="/images/lamp.svg" alt="lamp"/>
                            </div>
                        </div>
                        <h2 className="text-[#453336] font-[Retropix] text-right text-[16px] sm:text-[18px] leading-tight">WE SHARE IDEAS</h2>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-left text-[13px] sm:text-[14px] leading-relaxed">
                                Together, we exchange thoughts and find the perfect approach for your website.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col gap-3 border-b-2 border-[#453336] p-4 sm:p-5 overflow-hidden">
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] sm:text-[18px] leading-tight">WE BUILD IT</h2>
                        <div className="flex justify-end overflow-hidden">
                            <div className="w-[120px] h-[80px] flex items-center justify-end overflow-hidden">
                                <img className="h-[40px] w-[80px] scale-300 object-contain"
                                     src="/images/play.svg" alt="build"/>
                            </div>
                        </div>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-left text-[13px] sm:text-[14px] leading-relaxed">
                                Our team turns the plan into a beautiful, functional website that fits your vision.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col gap-3 p-4 sm:p-5 overflow-hidden">
                        <h2 className="text-[#453336] font-[Retropix] text-[16px] sm:text-[18px] leading-tight text-right">WE PRESENT IT TO YOU</h2>
                        <div>
                            <p className="font-[Retropix] text-[#edebe9] text-right text-[13px] sm:text-[14px] leading-relaxed">
                                You receive a complete, ready-to-use website built around your goals.
                            </p>
                            <div className="flex justify-start mt-3 overflow-hidden">
                                <div className="w-[120px] h-[80px] flex items-center justify-start overflow-hidden">
                                    <img className="object-contain h-[40px] w-[80px] scale-300"
                                         src="/images/rocket.svg" alt="rocket"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSection;