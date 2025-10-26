import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const GetYourWebka = () => {
    const submitAudioRef = useRef(null);
    const backAudioRef = useRef(null);
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Fix viewport height for mobile
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);

    const playSubmitSound = () => {
        if (submitAudioRef.current) {
            submitAudioRef.current.currentTime = 0;
            submitAudioRef.current.play();
        }
    };

    const handleGoBack = () => {
        if (backAudioRef.current) {
            backAudioRef.current.currentTime = 0;
            backAudioRef.current.play()
                .then(() => {
                    setTimeout(() => {
                        navigate("/");
                    }, 300);
                })
                .catch(() => navigate("/"));
        } else {
            navigate("/");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        playSubmitSound();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result.text);
            setSubmitStatus('success');
            formRef.current.reset();
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            console.error('Email sending failed:', error.text || error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="flex justify-center items-center w-full bg-[#52959e] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8"
            style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
        >
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="
                    w-full max-w-[500px] lg:max-w-[550px]
                    bg-[#edebe9] p-5 sm:p-7 lg:p-8
                    flex flex-col gap-3 sm:gap-4 lg:gap-5 items-center justify-center
                    rounded-xl shadow-lg
                "
            >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[Retropix] text-[#453336] text-center">
                        Get your Webka
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-[Retropix] text-[#453336] text-center">
                        Let's get in touch
                    </p>
                </div>

                <input
                    name="user_name"
                    placeholder="Name"
                    type="text"
                    required
                    className="text-[#453336] h-9 w-full sm:h-10 lg:h-11 border-b-2 p-2 sm:p-2.5 bg-transparent outline-none text-sm sm:text-base"
                />
                <input
                    name="user_email"
                    placeholder="Email"
                    type="email"
                    required
                    className="text-[#453336] h-9 w-full sm:h-10 lg:h-11 border-b-2 p-2 sm:p-2.5 bg-transparent outline-none text-sm sm:text-base"
                />
                <input
                    name="company"
                    placeholder="Company"
                    type="text"
                    className="text-[#453336] h-9 w-full sm:h-10 lg:h-11 border-b-2 p-2 sm:p-2.5 bg-transparent outline-none text-sm sm:text-base"
                />

                <textarea
                    name="message"
                    placeholder="What do you expect?"
                    required
                    className="text-[#453336] w-full min-h-[5rem] sm:min-h-[6rem] lg:min-h-[7rem] p-2 sm:p-2.5 border-2 bg-transparent outline-none resize-none overflow-hidden text-sm sm:text-base"
                ></textarea>

                {submitStatus === 'success' && (
                    <div className="w-full p-2.5 bg-green-100 border-2 border-green-500 text-green-700 font-[Retropix] text-xs sm:text-sm text-center rounded">
                        Message sent successfully! ✓
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="w-full p-2.5 bg-red-100 border-2 border-red-500 text-red-700 font-[Retropix] text-xs sm:text-sm text-center rounded">
                        Failed to send. Please try again.
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
                    <button
                        type="button"
                        onClick={handleGoBack}
                        disabled={isSubmitting}
                        className="font-[Retropix] relative flex-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#f5e7d7] border-3 sm:border-4 border-[#453336] text-[#453336] text-xs sm:text-sm font-bold uppercase tracking-wider
                        before:content-[''] before:absolute before:inset-0 before:translate-x-[3px] before:translate-y-[3px] sm:before:translate-x-[4px] sm:before:translate-y-[4px] before:bg-[#bfa48b] before:-z-10
                        hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                        active:translate-x-[3px] active:translate-y-[3px] sm:active:translate-x-[4px] sm:active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-150 ease-out"
                    >
                        Go Back
                    </button>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="font-[Retropix] relative flex-1 px-4 py-2.5 sm:px-5 sm:py-3 bg-[#52959e] border-3 sm:border-4 border-[#453336] text-[#f5e7d7] text-xs sm:text-sm font-bold uppercase tracking-wider
                        before:content-[''] before:absolute before:inset-0 before:translate-x-[3px] before:translate-y-[3px] sm:before:translate-x-[4px] sm:before:translate-y-[4px] before:bg-[#3a6b73] before:-z-10
                        hover:before:bg-[#f9d56e] hover:bg-[#fff2c2] hover:text-[#2c1a1d]
                        active:translate-x-[3px] active:translate-y-[3px] sm:active:translate-x-[4px] sm:active:translate-y-[4px] active:before:translate-x-0 active:before:translate-y-0
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-150 ease-out"
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </div>

                <audio ref={submitAudioRef} src="/audio/button_success.mp3" preload="auto"></audio>
                <audio ref={backAudioRef} src="/audio/link_click.mp3" preload="auto"></audio>
            </form>
        </div>
    );
};

export default GetYourWebka;