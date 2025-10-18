import React from 'react';

const Contact = () => {
    return (
        <div className="w-full min-h-screen bg-[#edebe9] flex items-center justify-center">
            <div className="max-w-2xl w-full flex items-center justify-center flex-col gap-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[Retropix] text-[#453336] text-center mb-4">
                    CONTACT INFORMATION
                </h1>

                <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md ">
                    {/* Phone */}
                    <div className="flex items-center justify-start gap-12 w-full">
                        <img className="w-[100px] h-[65px] -mr-8 flex-shrink-0 object-cover scale-300" src="/images/phone.svg" alt="phone"/>
                        <div className="flex flex-col">
                            <a href="tel:+37495565585" className="text-[#453336] font-[Retropix] text-xl hover:text-[#52959e] transition-colors">
                                +374 95 56 55 85
                            </a>
                            <a href="tel:+37477350450" className="text-[#453336] font-[Retropix] text-xl hover:text-[#52959e] transition-colors">
                                +374 77 35 04 50
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-start gap-12 w-full">
                        <img className="w-[100px] h-[65px] -mr-8 flex-shrink-0 object-cover scale-300 " src="/images/mail.svg" alt="mail"/>
                        <a
                            href="mailto:webka.space@gmail.com"
                            className="text-[#453336] font-[Retropix] text-xl hover:text-[#52959e] transition-colors"
                        >
                            webka.space@gmail.com
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center justify-start gap-12 w-full">
                        <img className="w-[100px] h-[65px] -mr-8 flex-shrink-0 object-cover scale-300" src="/images/instagram.svg" alt="instagram"/>
                        <a
                            href="https://instagram.com/webka.space"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#453336] font-[Retropix] text-xl hover:text-[#52959e] transition-colors"
                        >
                            webka.space
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;