"use client"
import { useState, useRef } from "react";
import { MenuButton } from "@/components/menuButton"

export default function Home() {
  const [showLoop, setShowLoop] = useState(false);
  const loopRef = useRef(null);

  const handleIntroEnd = () => {
    const loop = loopRef.current;
    if (!loop) return;

    loop.currentTime = 0;
    const playPromise = loop.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setShowLoop(true))
        .catch(() => setShowLoop(true));
    } else {
      setShowLoop(true);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      <video
        className={`absolute inset-0 h-full w-full object-cover ${showLoop ? "opacity-0" : "opacity-100"}`}
        src="/p3rvids/startanim.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleIntroEnd}
      />
      <video
        ref={loopRef}
        className={`absolute inset-0 h-full w-full object-cover ${showLoop ? "opacity-100" : "opacity-0"}`}
        src="/p3rvids/animloop.mp4"
        muted
        playsInline
        loop
        preload="auto"
      />


      <MenuButton label="SKILL" className="fixed z-10 top-1/2 left-1/2 text-5xl text-white" />


    </div>

  );
}
