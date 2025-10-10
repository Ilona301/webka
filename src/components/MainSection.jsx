import React from 'react';

const MainSection = () => {
    return (
        <div>
        <div className="h-[100vh] flex flex-col justify-center items-center bg-[#edebe9] gap-30">
            <div className="flex justify-center items-center flex-col">
                <img className="w-[500px] h-[200px] object-cover" src="/images/logo/logo.svg" alt="logo"/>
                <p className="font-bold">To create is to live twice.</p>
            </div>
            <button className="px-9 py-2 bg-[#edebe9] rounded-full shadow-[0_4px_0_0_#edebe9,0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_0_#edebe9,0_2px_8px_rgba(0,0,0,0.1)] hover:translate-y-[2px] transition-all duration-150 text-[#453336] font-bold">
                Get your Webka
            </button>
        </div>
    <div className="h-[100vh] bg-[#453336] flex justify-center items-center ">
        <img className=" absolute top-[65vh] left-0 w-[500px] h-[500px] inline" src="/images/robot.svg" alt="robot"/>
        <div className="w-[90%] flex justify-center items-center h-[70%] border-b-2 border-b-[#b4b4b4]">
            <div className="w-[30%] h-[200px] ">
                <h1 className="font-[NotoSerifDisplay] text-[35px] text-[#b4b4b4]">About the company</h1>
                <p className="text-[#b4b4b4] text-left">We are the bridge between your vision and its digital reality. When you trust us with your ideas, we don't just build websites—we craft spaces where your story comes alive and your purpose finds its voice. Your growth fuels ours, and our dedication fuels yours.</p>
            </div>
            <div className="w-[20%] h-[200px] border-l-2 border-l-[#b4b4b4] pl-[25px] text-left">
                <h1 className="font-[NotoSerifDisplay] text-[35px] text-[#b4b4b4]">About us</h1>
                <p className="text-[#b4b4b4]">We are the bridge between your vision and its digital reality. When you trust us with your ideas, we don't just build websites—we craft spaces.</p>
            </div>
        </div>
    </div>
        </div>
    );
};

export default MainSection;