import React from 'react';

const WhyCooseSection = () => {
    return (
        <>
           <section className="w-full h-[93.333vh] bg-[#601d33] relative">
               <img className="left-[-210px] absolute"
                   src="/images/logo/gund.svg" alt="gund"/>

               <div className="absolute z-3">
                   <h1 className="absolute right-[-1200px] font-[Retropix] text-[60px] text-[#fffeb3] top-[60px]">WHY CHOOSE US?</h1>

               </div>
               <div className="absolute z-3 flex flex-col items-start justify-start top-[200px] right-[700px]">
               <p className='text-[33px] font-[Retropix]  text-[#fffeb3]'>WE GROW WITH YOU</p>
               <span className='text-[29px] font-[Retropix]  text-[#edebe9]'>Need to add features later? Want to expand? We're here to </span>
                   <span className='text-[29px] font-[Retropix]  text-[#edebe9]'>help your website evolve as your business grows.</span>
           </div>
               <div className="absolute z-3 flex flex-col items-end justify-end top-[330px] right-[100px]">
                   <p className='text-[33px] font-[Retropix]  text-[#fffeb3]'>WE STICK AROUND AFTER LAUNCH</p>
                   <span className='text-[29px] font-[Retropix]  text-[#edebe9]'>Your website goes live, but we don't disappear. If something </span>
                   <span className='text-[29px] font-[Retropix]  text-[#edebe9]'>breaks or you need help, we're just a message away.</span>
               </div>
               <div className="absolute z-3 flex flex-col items-start justify-start top-[500px] right-[660px]">
                   <p className='text-[33px] font-[Retropix]  text-[#fffeb3]'>WE CARE ABOUT YOUR SUCCESS</p>
                   <span className='text-[29px] font-[Retropix]  text-[#edebe9]'>When your website helps your business thrive, that's a win </span>
                   <span className='text-[29px] font-[Retropix]  text-[#edebe9]'>for us too. Your growth is our motivation.</span>
               </div>
           </section>
        </>
    );
};

export default WhyCooseSection;