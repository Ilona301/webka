import React from 'react';

const AboutSection = () => {
    return (
        <div id="aboutus" className="bg-[#edebe9] flex justify-center items-center relative px-4 py-12 h-[100vh]">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12 border-b-2 border-b-[#b4b4b4] pb-12">

                {/* About the Company */}
                <div className="w-full lg:w-[60%]">
                    <h1 className="font-[Retropix] text-2xl sm:text-3xl lg:text-4xl text-[#453336] mb-4">
                        About the company
                    </h1>
                    <p className="text-[#52959e] text-sm sm:text-base leading-relaxed font-[Retropix]">
                        At Webka, we turn your ideas into digital experiences that truly connect.
                        Every project we create blends creativity, strategy, and technology to
                        help your brand stand out and grow online. We believe that great results
                        come from collaboration — your vision inspires our design, and together
                        we bring it to life.
                    </p>
                </div>

                {/* About Us */}
                <div className="w-full lg:w-[40%] lg:border-l-2 lg:border-l-[#b4b4b4] lg:pl-8 pt-8 lg:pt-0 border-t-2 lg:border-t-0 border-t-[#b4b4b4]">
                    <h1 className="font-[Retropix] text-2xl sm:text-3xl lg:text-4xl text-[#453336] mb-4">
                        About us
                    </h1>
                    <p className="text-[#52959e] font-[Retropix] text-sm sm:text-base leading-relaxed">
                        We’re a small, passionate team of creators who love bringing ideas to life.
                        From web design to full-stack development, we focus on building modern,
                        thoughtful, and user-friendly digital products. We care about every detail
                        and every client — because your success is what drives us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
