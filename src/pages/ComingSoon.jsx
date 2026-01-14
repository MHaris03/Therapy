import React from "react";
import bgvideo from '/therpy.mp4';
import Header from "../components/Header";

function ComingSoon() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Header />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      >

      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 particle-bg" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 neon-text mb-4 animate-fadeDown">
          COMING SOON
        </h1>

        <p className="text-lg md:text-2xl text-white mb-2 animate-fadeUp delay-200">
          Smart Physiotherapy Software Is Coming Soon
        </p>

        <p className="text-sm md:text-base text-white/70 italic mb-8 animate-fadeUp delay-300">
          Powering Better Care Through Technology
        </p>

        <button className="px-10 py-3 rounded-full text-white font-semibold text-lg neon-button transition-all duration-300 hover:scale-105">
          Notify Me
        </button>
      </div>

      <style>{`
        .neon-text {
          text-shadow:
            0 0 10px rgba(34,211,238,0.8),
            0 0 30px rgba(34,211,238,0.6);
        }

        .neon-button {
          background: linear-gradient(180deg, #22d3ee, #0284c7);
          box-shadow:
            0 0 15px rgba(34,211,238,0.7),
            inset 0 0 10px rgba(255,255,255,0.2);
        }

        .neon-button:hover {
          box-shadow:
            0 0 30px rgba(34,211,238,1),
            inset 0 0 15px rgba(255,255,255,0.3);
        }

        .particle-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            rgba(34,211,238,0.3) 1px,
            transparent 1px
          );
          background-size: 40px 40px;
          animation: moveParticles 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes moveParticles {
          from { transform: translateY(0); }
          to { transform: translateY(-200px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease forwards;
        }

        .animate-fadeDown {
          animation: fadeDown 1.2s ease forwards;
        }

        .delay-200 { animation-delay: .2s; }
        .delay-300 { animation-delay: .3s; }
      `}</style>
    </div>
  );
}

export default ComingSoon;
