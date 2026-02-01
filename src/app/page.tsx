"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/game" className="block">
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#f4e6d6]">
        {/* Paper texture background */}
        <div className="absolute inset-0 opacity-[0.27] pointer-events-none">
          <Image
            src="/paper-texture.png"
            alt=""
            fill
            className="object-cover"
            style={{
              transform: "scale(1.8)",
              transformOrigin: "center center",
            }}
            priority
          />
        </div>

        {/* Cherub illustration - centered */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(400px, 55vw, 900px)",
            aspectRatio: "1031 / 902",
          }}
        >
          <Image
            src="/cherub.svg"
            alt="Cherub"
            fill
            className="object-contain opacity-90"
            priority
          />
        </div>

        {/* Main text - "Will you be my Valentine?" - LEFT positioned with rotation */}
        <div
          className="absolute"
          style={{
            left: "clamp(20px, 5vw, 100px)",
            top: "50%",
            transform: "translateY(-50%) rotate(-16deg)",
            transformOrigin: "left center",
          }}
        >
          <h1
            className="font-[var(--font-alex-brush)] text-[#b63338] leading-[0.9] whitespace-nowrap"
            style={{
              textShadow: "0px 4px 6px rgba(123, 30, 28, 0.25)",
            }}
          >
            <span
              className="block"
              style={{ fontSize: "clamp(60px, 12vw, 200px)" }}
            >
              Will you
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(50px, 10vw, 170px)",
                marginLeft: "clamp(30px, 5vw, 80px)",
              }}
            >
              be my
            </span>
            <span
              className="block"
              style={{ fontSize: "clamp(60px, 12vw, 200px)" }}
            >
              Valentine?
            </span>
          </h1>
        </div>

        {/* Torn paper note - bottom right */}
        <div
          className="absolute"
          style={{
            right: "clamp(10px, 3vw, 60px)",
            bottom: "clamp(10px, 5vh, 80px)",
            transform: "rotate(-21deg)",
            width: "clamp(120px, 20vw, 300px)",
            height: "clamp(120px, 22vw, 320px)",
          }}
        >
          <Image
            src="/torn-paper.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
          {/* From/To text on torn paper */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: "rotate(2deg)",
            }}
          >
            <p
              className="font-[var(--font-alex-brush)] text-[#b63338] text-center leading-relaxed"
              style={{
                fontSize: "clamp(16px, 3vw, 42px)",
                textShadow: "0px 2px 4px rgba(123, 30, 28, 0.2)",
              }}
            >
              from:
              <br />
              dhruv
              <br />
              to:
              <br />
              mani
            </p>
          </div>
        </div>

        {/* Click indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60 animate-pulse">
          <p
            className="font-[var(--font-alex-brush)] text-[#b63338]"
            style={{ 
              fontSize: "clamp(32px, 5vw, 54px)",
              textShadow: "0px 4px 6px rgba(123, 30, 28, 0.25)" 
            }}
          >
            click anywhere to continue...
          </p>
        </div>
      </div>
    </Link>
  );
}
