
import React from 'react';

const WorkSection = () => {
    return (
        <div className="bg-[#52959e] h-[calc(100vh-60px)] flex justify-center items-center">
           <div className="w-[70%] flex justify-center  flex-col gap-6">
                <h1 className="font-[Retropix] text-[40px] text-[#d7ca75]">HOW WE WORK?</h1>
               <div className="flex items-center justify-center gap-20 ">
                   <div className="flex flex-col gap-3 w-full">
                       <h2 className="text-[#453336] font-[Retropix] text-[20px]">WE EXPLORE YOUR COMPANY</h2>
                       <div >
                           <p className="font-[Retropix] text-[#edebe9] text-left">
                               We dive into your story, goals, and what makes your business stand out.
                           </p>
                           <div className="flex justify-end items-end w-full">
                               <img className="object-cover  h-[80px] w-[200px]"
                                    src="/images/loop.svg" alt="rocket"/>
                           </div>
                       </div>

                   </div>

                   <div className="flex flex-col gap-3 border-l border-r border-[#453336] pl-8 pr-8 w-full">
                       <img className="object-cover h-[80px]" src="/images/lamp.svg" alt="lamp"/>
                       <h2 className="text-[#453336] font-[Retropix] text-[20px]">WE SHARE IDEAS</h2>
                       <div>
                           <p className="font-[Retropix] text-[#edebe9] text-right">
                               Together, we exchange thoughts and find the perfect approach for your website.
                           </p>
                       </div>
                   </div>
                   <div className="flex flex-col gap-3  border-r border-[#453336] pr-8 w-full">
                       <h2 className="text-[#453336] font-[Retropix] text-[20px] text-right">WE BUILD IT</h2>
                       <img className="w-[200px] h-[80px] object-cover"
                           src="/images/play.svg" alt=""/>
                       <div >
                           <p className="font-[Retropix] text-[#edebe9] text-right">
                               Our team turns the plan into a beautiful, functional website that fits your vision.
                           </p>
                       </div>
                   </div>
                   <div className="flex flex-col gap-3 justify-center items-center w-full ">
                       <h2 className="text-[#453336] font-[Retropix] text-[20px] text-center">WE PRESENT IT TO YOU</h2>
                       <div>
                           <p className="font-[Retropix] text-[#edebe9] text-center">
                               You receive a complete, ready-to-use website built around your goals.
                           </p>
                           <img className="object-cover w-[200px] h-[80px]"
                                src="/images/rocket.svg" alt="rocket"/>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default WorkSection;