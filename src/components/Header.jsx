import React from 'react';

const Header = () => {
    return (
        <div className="bg-[#edebe9] fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-center">
            <div className="h-[60px] w-[90%] bg-[#edebe9] flex justify-between items-center">
                <div className="left text-[#453336] font-bold">GET YOUR WEBKA</div>
                <div className="right font-bold text-[#b4b4b4] flex gap-12">
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Our works</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;