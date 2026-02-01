"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Confetti {
  id: number;
  left: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  shape: string;
}

export default function SuccessPage() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Generate confetti
    const colors = ["#b63338", "#e8a5a8", "#f4e6d6", "#ff6b6b", "#ffd700", "#ff69b4"];
    const shapes = ["♥", "💕", "💝", "💖", "✨", "🌹"];
    
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
        size: Math.random() * 20 + 10,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      });
    }
    setConfetti(newConfetti);

    // Show message after delay
    setTimeout(() => setShowMessage(true), 500);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4e6d6]">
      {/* Paper texture overlay */}
      <div className="paper-texture absolute inset-0 pointer-events-none" />

      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti pointer-events-none"
          style={{
            left: `${piece.left}%`,
            color: piece.color,
            fontSize: `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {piece.shape}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Big heart */}
        <div className="text-8xl sm:text-9xl mb-8 animate-pulse-slow">
          💝
        </div>

        {/* Success message */}
        <div
          className={`transition-all duration-1000 ${
            showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="font-[var(--font-alex-brush)] text-[#b63338] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
            style={{
              textShadow: "0px 4px 6px rgba(123, 30, 28, 0.25)",
            }}
          >
            Yay! 🎉
          </h1>

          <h2
            className="font-[var(--font-alex-brush)] text-[#b63338] text-3xl sm:text-4xl md:text-5xl mb-8"
            style={{
              textShadow: "0px 4px 6px rgba(123, 30, 28, 0.25)",
            }}
          >
            I knew you&apos;d say yes!
          </h2>

          <p
            className="font-[var(--font-alex-brush)] text-[#b63338] text-2xl sm:text-3xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{
              textShadow: "0px 2px 4px rgba(123, 30, 28, 0.2)",
            }}
          >
            You&apos;ve made me the happiest person in the world! 
            <br />
            Can&apos;t wait to spend Valentine&apos;s Day with you! 💕
          </p>

          {/* Love note */}
          <div
            className="bg-[#d4a5a8] px-8 py-6 rounded-lg shadow-xl max-w-md mx-auto mb-8 transform rotate-[-2deg]"
            style={{
              clipPath: "polygon(2% 0%, 100% 3%, 98% 100%, 0% 97%)",
            }}
          >
            <p
              className="font-[var(--font-alex-brush)] text-[#b63338] text-xl sm:text-2xl leading-relaxed"
              style={{ textShadow: "0px 2px 4px rgba(123, 30, 28, 0.2)" }}
            >
              To: Mani 💝
              <br />
              <br />
              You are the most amazing person I know.
              <br />
              Thank you for being my Valentine!
              <br />
              <br />
              With all my love,
              <br />
              Dhruv 💕
            </p>
          </div>

          {/* Hearts decoration */}
          <div className="flex justify-center gap-4 text-4xl">
            <span className="animate-float" style={{ animationDelay: "0s" }}>💕</span>
            <span className="animate-float" style={{ animationDelay: "0.3s" }}>💝</span>
            <span className="animate-float" style={{ animationDelay: "0.6s" }}>💖</span>
            <span className="animate-float" style={{ animationDelay: "0.9s" }}>💕</span>
            <span className="animate-float" style={{ animationDelay: "1.2s" }}>💝</span>
          </div>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="mt-12 px-6 py-3 bg-[#b63338] text-white font-[var(--font-alex-brush)] text-xl rounded-full shadow-lg hover:bg-[#9a2a2e] transition-all duration-300 hover:scale-105"
          style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Back to Card 💌
        </Link>
      </div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#b63338] opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 50 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>
    </div>
  );
}
