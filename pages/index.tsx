import { useEffect } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

export default function Home() {
  useEffect(() => {
    loadFull(tsParticles).then(() => {
      tsParticles.load("tsparticles", {
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.6 },
          size: { value: 3 },
          move: { enable: true, speed: 1 }
        },
        background: { color: "#0f0f1b" }
      });
    });
  }, []);
return (
  <div className="relative min-h-screen bg-[#0f0f1b] overflow-hidden">
    <div id="tsparticles" className="absolute inset-0 z-0" />
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
      <svg
        viewBox="0 0 100 100"
        className="w-24 h-24 stroke-cyan-400 stroke-2 fill-none animate-draw"
      >
        <circle cx="50" cy="50" r="40" />
      </svg>
      <h1 className="text-4xl mt-4 font-bold">EchoTrace</h1>
      <p className="text-cyan-400 mt-2 text-lg">Real-Time Insight, Future-Driven</p>
    </div>
  </div>
);
