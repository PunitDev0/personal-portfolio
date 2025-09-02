"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart } from "lucide-react";
import Image from "next/image";

function Page() {
  const isRef = useRef(null);
  const notRef = useRef(null);
  const loadingRef = useRef(null);

  const butRef = useRef(null);
  const heartRef = useRef(null);
  const likeRef = useRef(null);
  const itRef = useRef(null);
  const ImageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Phase 1: Show IS → NOT → LOADING
    tl.set(isRef.current, { opacity: 1 }, "+=0.5")
      .set(notRef.current, { opacity: 1 }, "+=0.5")
      .set(loadingRef.current, { opacity: 1 }, "+=0.5");

    // Hide them after short delay
    tl.set(
      [isRef.current, notRef.current, loadingRef.current],
      {
        opacity: 0,
      },
      "+=0.5"
    );

    // Phase 2: Show BUT → HEART → LIKE → IT
    tl.set(butRef.current, { opacity: 1 }, "+=0.5")
      .set(heartRef.current, { opacity: 1 }, "+=0.5")
      .set(likeRef.current, { opacity: 1 }, "+=0.5")
      .set(itRef.current, { opacity: 1 }, "+=0.5");

    tl.set(
      [butRef.current, heartRef.current, likeRef.current, itRef.current],
      {
        opacity: 0,
      },
      "+=0.5"
    );

    // Phase 3: Animate Image → move smoothly to bottom-left
    tl.to(ImageRef.current, {
      position: "absolute",
      left: 0,
      bottom: 0,
      duration: 1.2,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white font-formula overflow-hidden">
      <Image
        ref={ImageRef}
        src={"/SAVE_20250825_163924.jpg"}
        width={500}
        height={1000}
        className="h-[30vw] absolute"
        alt="Animated Image"
      />
      {/* Phase 1 */}
      <div>
        <p
          ref={isRef}
          className="absolute top-5 left-5 text-[300px] font-bold leading-none opacity-0"
        >
          IS
        </p>

        <p
          ref={notRef}
          className="absolute top-5 right-5 text-[300px] font-bold leading-none opacity-0"
        >
          NOT
        </p>

        <p
          ref={loadingRef}
          className="absolute bottom-5 left-5 text-[300px] font-bold leading-none opacity-0"
        >
          LOADING......
        </p>

        {/* Phase 2 */}
        <p
          ref={butRef}
          className="absolute top-0 left-2 text-[300px] font-bold leading-none opacity-0"
        >
          BUT
        </p>

        <p ref={heartRef} className="absolute top-5 right-5 opacity-0">
          <Heart size={120} className="text-red-500" />
        </p>

        <p
          ref={likeRef}
          className="absolute bottom-5 left-5 text-[300px] font-bold leading-none opacity-0"
        >
          LIKE
        </p>

        <p
          ref={itRef}
          className="absolute bottom-5 right-5 text-[300px] font-bold leading-none opacity-0"
        >
          IT
        </p>
      </div>

      <div className="text-white w-full flex flex-col items-end justify-center">
        {/* Image Section (center ke liye space) */}
        <div className="flex items-center w-full h-full justify-center"></div>

        {/* Welcome Text Section */}
        <div className="flex items-center gap-6 justify-center flex-wrap">
          <p className="text-[100px] md:text-[150px] lg:text-[180px] font-bold">
            HI,
          </p>
          <p className="text-[100px] md:text-[150px] lg:text-[180px] font-bold">
            WELCOME
          </p>

          <Image
            src={"/1724923071703.jpeg"}
            width={150}
            height={150}
            alt="Animated Image"
            className="rounded-full border-4 border-white shadow-lg"
          />

          <p className="text-[100px] md:text-[150px] lg:text-[180px] font-bold">
            HOME
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-[100px] md:text-[150px] lg:text-[180px] font-bold">IT'S</p>
          <p className="text-[100px] md:text-[150px] lg:text-[180px] font-bold">ME - </p>
          <p className="text-[100px] md:text-[150px] lg:text-[180px] font-bold">PUNIT</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
