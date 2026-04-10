"use client"

import { useState } from "react";

export default function Home() {
  const [showLoop, setShowLoop] = useState(false);



  return (
    <>
      <div
        className="fixed inset-0 overflow-hidden bg-black">

      {!showLoop ? (
          <video
            key="intro"
            className="h-full w-full object-cover"
            src="/p3rvids/startanim.mp4"
            autoPlay
            muted
            playsInline
            loop={false}
            onEnded={() => setShowLoop(true)}
          />

        ) : (

          <video
            key="loop"
            className="h-full w-full object-cover"
            src="/p3rvids/animloop.mp4"
            autoPlay
            muted
            playsInline
            loop={true}
          />

        )
      }


      </div>
    </>
  );
}
