import React from 'react';
import bgvideo from '/therpy.mp4';

function ComingSoon() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bgvideo}
                autoPlay
                loop
                muted
                playsInline
            ></video>

            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-center px-4">

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide drop-shadow-lg animate-gradientText">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-green-400 to-yellow-300">
                        Coming Soon!
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-white/90 mb-10 animate-fadeUp">
                    Our Physiotherapy website is on its way!
                </p>

                <button className="relative inline-block bg-gradient-to-r from-teal-500 via-green-500 to-yellow-400 text-white font-bold py-3 px-8 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                    <span className="absolute inset-0 bg-white/20 rounded-xl opacity-0 hover:opacity-100 transition duration-300"></span>
                    Notify Me
                </button>

            </div>

            <style>
                {`
                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradientText {
                    background-size: 200% 200%;
                    animation: gradientMove 3s ease infinite;
                }
                @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeUp {
                    animation: fadeUp 1.5s ease forwards;
                }
                `}
            </style>
        </div>
    );
}

export default ComingSoon;
