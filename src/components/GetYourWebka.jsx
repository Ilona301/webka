import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const GetYourWebka = () => {
    const audioRef = useRef(null);
    const navigate = useNavigate();

    const playSound = (e) => {
        e.preventDefault(); // prevent form refresh
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleGoBack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play()
                .then(() => {
                    setTimeout(() => {
                        navigate("/");
                    }, 300);
                })
                .catch(error => {
                    console.error("Audio playback failed:", error);
                    navigate("/");
                });
        } else {
            navigate("/");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center w-full min-h-[100vh] bg-[#52959e] pt-[100px]">
                <form className="w-[30%] bg-[#edebe9] h-[80vh] p-5 flex flex-col gap-5 items-center justify-center rounded-xl shadow-lg">
                    <div className="flex justify-center items-center flex-col gap-4">
                        <h1 className="text-4xl font-[Retropix] text-[#453336]">Get your Webka</h1>
                        <p className="text-2xl font-[Retropix] text-[#453336]">Let's get in touch</p>
                    </div>

                    <input
                        placeholder="Name"
                        type="text"
                        className="text-[#453336] h-9 w-full border-b-2 p-1 bg-transparent outline-none"
                    />
                    <input
                        placeholder="Email"
                        type="email"
                        className="text-[#453336] h-9 w-full border-b-2 p-1 bg-transparent outline-none"
                    />
                    <input
                        placeholder="Company"
                        type="text"
                        className="text-[#453336] h-9 w-full border-b-2 p-1 bg-transparent outline-none"
                    />

                    <textarea
                        placeholder="What do you expect?"
                        className="text-[#453336] min-h-[6rem] w-full p-2 border-2 bg-transparent outline-none resize-none overflow-hidden"
                    ></textarea>

                    <div className="flex gap-4 w-full">
                        <button
                            type="button"
                            onClick={handleGoBack}
                            className="font-[Retropix] relative px-6 py-3 bg-[#f5e7d7] border-4 border-[#453336] text-[#453336] text-sm font-bold uppercase tracking-wider flex-1
                    before:content-[''] before:absolute before:inset-0 before:translate-x-[4px] before:translate-y-[4px] before:bg-[#bfa48b] before:-z-10
                    hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                    active:translate-x-[4px] active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                    transition-all duration-150 ease-out">
                            Go Back
                        </button>

                        <button
                            type="submit"
                            onClick={playSound}
                            className="font-[Retropix] relative px-6 py-3 bg-[#52959e] border-4 border-[#453336] text-[#f5e7d7] text-sm font-bold uppercase tracking-wider flex-1
                    before:content-[''] before:absolute before:inset-0 before:translate-x-[4px] before:translate-y-[4px] before:bg-[#3a6b73] before:-z-10
                    hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                    active:translate-x-[4px] active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                    transition-all duration-150 ease-out"
                           >
                            Send
                        </button>
                    </div>

                    <audio ref={audioRef} src="/audio/retro_button_audio.mp3" preload="auto"></audio>
                </form>
            </div>
        </>
    );
};

export default GetYourWebka;