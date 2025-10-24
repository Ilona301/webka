import React, { useEffect, useState } from "react";

const RetroLoader = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            document.body.classList.add("font-loaded");
            setVisible(false);
        }, 1500); // Simulate font loading time
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#52959e] z-50">
            <div className="text-[#f5e7d7] text-[clamp(1.5rem,6vw,40px)] font-[Retropix] animate-pulse">
                LOADING<span className="ml-2 dots"></span>
            </div>
        </div>
    );
};

export default RetroLoader;
