import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setResult(`Analyzing: ${file.name}...`);
      setTimeout(() => setResult("✅ Analysis complete!"), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0f0f1b] overflow-hidden">
      <div id="tsparticles" className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
        <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-cyan-400 stroke-2 fill-none animate-draw">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <h1 className="text-4xl mt-4 font-bold">EchoTrace</h1>
        <p className="text-cyan-400 mt-2 text-lg">Real-Time Insight, Future-Driven</p>
        <input type="file" accept="audio/*" onChange={handleFileChange} className="mt-4" />
        <button onClick={handleUpload} className="mt-4 bg-cyan-500 px-4 py-2 rounded">Analyze Audio</button>
        {result && <p className="mt-4">{result}</p>}
      </div>
    </div>
  );
}
