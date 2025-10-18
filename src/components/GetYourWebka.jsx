import React, {useRef} from 'react';

const GetYourWebka = () => {
   const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };
    return (
        <>

            <div className="flex justify-center items-center w-full h-[100vh] bg-[#52959e]  ">
                <form className="w-[30%] h-[75vh]  bg-[#edebe9] p-5 flex flex-col gap-9 items-center justify-center" >
                    <p className="flex justify-center items-center flex-col gap-4">
                        <span className="text-5xl font-[Retropix] text-[#453336]" >Get Your Webka</span>
                        <span className="text-2xl font-[Retropix] text-[#453336]">Let's get in touch</span>
                    </p>
                    <input placeholder="Name" type="text" className="h-9 w-100 border-b-2 p-1"/>
                    <input placeholder="Email" type="email" className="h-9 w-100 border-b-2 p-1"/>
                    <input placeholder="Company" type="text" className="h-9 w-100 border-b-2 p-1"/>
                    <textarea placeholder="What do you expect?" className="h-20 w-100 p-1 border-2 "></textarea>

                    <button onClick={playSound}
                        type="submit" className="font-[Retropix] relative px-4 sm:px-9 py-3 bg-[#601d33] border-4 border-[#fff2c2]  text-[#fff2c2] text-sm sm:text-base font-bold uppercase tracking-wider
                before:content-[''] before:absolute before:inset-0 before:translate-x-[4px] before:translate-y-[4px] before:bg-[#bfa48b] before:-z-10
                hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#601d33] hover:border-[#601d33]
                active:translate-x-[4px] active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                transition-all duration-150 ease-out">Send</button>

                </form>
            </div>
        </>
    );
};

export default GetYourWebka;