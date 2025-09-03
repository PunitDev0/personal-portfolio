"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  const containerRef = useRef(null); // container for bg/text color

  const isRef = useRef(null);
  const notRef = useRef(null);
  const loadingRef = useRef(null);

  const butRef = useRef(null);
  const heartRef = useRef(null);
  const likeRef = useRef(null);
  const itRef = useRef(null);
  const ImageRef = useRef(null);
  const Image2WrapperRef = useRef(null);

  const hiRef = useRef(null);
  const welcomeRef = useRef(null);
  const homerRef = useRef(null);

  const itsRef = useRef(null);
  const meRef = useRef(null);
  const punitRef = useRef(null);

  const passionateRef = useRef(null);
  const softwareRef = useRef(null);
  const developerRef = useRef(null);

  const phase7 = useRef(null);

  // Phase 7
  const punit7Ref = useRef(null);
  const ageRef = useRef(null);

  // Refs for boxes (scroll animation)
  const boxesRef = useRef([]);

  useEffect(() => {
    // Lock scroll initially
    document.body.style.overflow = "hidden";

    let lenisInstance = null;

    // Listen for Lenis initialization
    const handleLenisInitialized = (event) => {
      lenisInstance = event.detail;
    };
    window.addEventListener("lenis:initialized", handleLenisInitialized);

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll after phase 7
        document.body.style.overflow = "auto";
        if (lenisInstance) {
          lenisInstance.start(); // Enable Lenis scrolling
        }
      },
    });

    // Phase 1: IS → NOT → LOADING
    tl.set(isRef.current, { opacity: 1 }, "+=0.5")
      .set(notRef.current, { opacity: 1 }, "+=0.5")
      .set(loadingRef.current, { opacity: 1 }, "+=0.5");

    tl.set([isRef.current, notRef.current, loadingRef.current], { opacity: 0 }, "+=0.5");

    // Phase 2 start: flip bg & text colors
    tl.to(containerRef.current, { backgroundColor: "#fff", color: "#000", duration: 0.5 }, "-=0.2");

    // Phase 2: BUT → HEART → LIKE → IT
    tl.set(butRef.current, { opacity: 1 }, "+=0.3")
      .set(heartRef.current, { opacity: 1 }, "+=0.5")
      .set(likeRef.current, { opacity: 1 }, "+=0.5")
      .set(itRef.current, { opacity: 1 }, "+=0.5");

    tl.set([butRef.current, heartRef.current, likeRef.current, itRef.current], { opacity: 0 }, "+=0.5");

    // Phase 2 end: reset bg & text colors
    tl.to(containerRef.current, {
      backgroundColor: "#FE3C01",
      duration: 0.4
    });
    // Phase 3: Image move to bottom-left
    tl.fromTo(
      ImageRef.current,
      {
        opacity: 1,
        x: "-50%",
        y: "-50%",
        top: "50%",
        left: "50%",
        position: "absolute",
      },
      {
        x: "0%",
        y: "-19%",
        left: "0",
        bottom: "100px",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "<"
    );

    // Phase 4: HI, WELCOME, IMAGE2, HOME
    tl.fromTo(
      hiRef.current,
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" }
    );
    tl.fromTo(welcomeRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.2, ease: "elastic.out(1, 0.5)" });
    tl.fromTo(Image2WrapperRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 0.2, ease: "elastic.out(1, 0.5)" });
    tl.fromTo(homerRef.current, { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 0.2, ease: "elastic.out(1, 0.5)" });

    // Phase 5: IT'S → ME → PUNIT
    tl.fromTo(itsRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });
    tl.fromTo(meRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });
    tl.fromTo(punitRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.3, ease: "elastic.out(1, 0.5)" });

    // Phase 6: PASSIONATE → SOFTWARE → DEVELOPER
    tl.fromTo(passionateRef.current, { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" }, "+=0.3");
    tl.fromTo(softwareRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
    tl.fromTo(developerRef.current, { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });

    // Phase 7: PUNIT → AGE
    tl.fromTo(punit7Ref.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" }, "+=0.4");
    tl.fromTo(ageRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    // Scroll animations for boxes (randomized continuous animation as you scroll)
    const gridConfigs = [
      { startIndex: 0, count: 4, cols: () => window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1 },
      { startIndex: 4, count: 1, cols: () => 1 },
      { startIndex: 5, count: 2, cols: () => window.innerWidth >= 640 ? 2 : 1 },
      { startIndex: 7, count: 3, cols: () => window.innerWidth >= 640 ? 3 : 1 },
      { startIndex: 10, count: 4, cols: () => window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1 },
    ];

    let startIndex = 0;
    gridConfigs.forEach(({ startIndex: groupStart, count, cols }) => {
      const elements = boxesRef.current.slice(groupStart, groupStart + count);
      elements.forEach((element, i) => {
        const randomOffset = (Math.random() - 0.5) * 0.6; // -0.3 to 0.3
        gsap.fromTo(
          element,
          { opacity: 0, y: 100, scale: 0 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: element,
              start: `top bottom${randomOffset > 0 ? "+=" : "-="}${Math.abs(randomOffset) * 100}%`,
              end: `bottom top${randomOffset > 0 ? "-=" : "+="}${Math.abs(randomOffset) * 100}%`,
              scrub: true,
              markers: false,
            },
            ease: "power3.out",
          }
        );
      });
      startIndex += count;
    });

    gsap.fromTo(
      [passionateRef.current, softwareRef.current, developerRef.current],
      { scale: 1, y: 0 },
      {
        scale: 0.6,
        y: -100,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
          toggleActions: "play reverse play reverse",
        },
        ease: "elastic.out(1, 0.5)",
      }
    );

    gsap.fromTo(
      phase7.current,
      { scale: 1 },
      {
        scale: 1.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
        ease: "power4.out",
        duration: 0.8,
      }
    );

    gsap.to(containerRef.current, {
      backgroundColor: "#ffffff",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top+=1",
        toggleActions: "play reverse play reverse",
        markers: false,
      },
      duration: 0.3,
      ease: "power1.out",
    });

    // Cleanup
    return () => {
      window.removeEventListener("lenis:initialized", handleLenisInitialized);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(boxesRef.current);
      gsap.killTweensOf([passionateRef.current, softwareRef.current, developerRef.current]);
      gsap.killTweensOf([punit7Ref.current, ageRef.current]);
    };
  }, []);

  return (
    <div className="w-full bg-[#FE3C01] text-black font-formula overflow-hidden">
      {/* INTRO SECTION */}
      <div ref={containerRef} className="relative w-full h-screen text-black">
        {/* Center Image */}
        <Image
          ref={ImageRef}
          src="/SAVE_20250825_163924.jpg"
          width={1000}
          height={1000}
          className="absolute h-[32vw] w-fit"
          alt="Animated Image"
        />

        {/* Phase 1 & 2 */}
        <div>
          <p ref={isRef} className="absolute top-5 left-5 text-[300px] font-bold leading-none opacity-0">IS</p>
          <p ref={notRef} className="absolute top-5 right-5 text-[300px] font-bold leading-none opacity-0">NOT</p>
          <p ref={loadingRef} className="absolute bottom-5 left-5 text-[300px] font-bold leading-none opacity-0">LOADING......</p>

          <p ref={butRef} className="absolute top-0 left-2 text-[300px] font-bold leading-none opacity-0">BUT</p>
          <p ref={heartRef} className="absolute top-5 right-5 opacity-0"><Heart size={120} className="text-red-500" /></p>
          <p ref={likeRef} className="absolute bottom-5 left-5 text-[300px] font-bold leading-none opacity-0">LIKE</p>
          <p ref={itRef} className="absolute bottom-5 right-5 text-[300px] font-bold leading-none opacity-0">IT</p>
        </div>

        {/* Welcome Text Section */}
        <div className="w-full flex flex-col items-end justify-center px-28 mt-5">
          <div className="flex items-center gap-6 justify-center flex-wrap">
            <p className="text-[8vw] font-bold opacity-0 leading-[0.8]" ref={hiRef}>HI,</p>
            <p className="text-[8vw] font-bold opacity-0 leading-[0.8]" ref={welcomeRef}>WELCOME</p>

            <div ref={Image2WrapperRef} className="opacity-0">
              <Image
                src="/1724923071703.jpeg"
                width={120}
                height={120}
                alt="Animated Image"
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>

            <p className="text-[8vw] font-bold opacity-0 leading-[0.8]" ref={homerRef}>HOME</p>
          </div>

          {/* Phase 5 */}
          <div className="flex gap-4 translate-x-[-100px] leading-[0.8]">
            <p className="text-[8vw] font-bold opacity-0" ref={itsRef}>IT'S</p>
            <p className="text-[8vw] font-bold opacity-0" ref={meRef}>ME - </p>
            <p className="text-[8vw] font-bold opacity-0" ref={punitRef}>
              PUNIT <span className="text-7xl absolute top-12">®</span>
            </p>
          </div>

          {/* Phase 6 */}
          <div className="flex items-start flex-col fixed top-[25%] text-start mt-10 translate-x-[-20px] leading-none">
            <div ref={passionateRef} className="flex items-start opacity-0">
              <span className="text-[7vw] font-bold">PASSIONATE</span>
              <span className="font-bold w-[143px]">Driven by curiosity & creativity</span>
            </div>
            <div ref={softwareRef} className="flex items-center relative opacity-0">
              <span className="font-bold w-[140px]">Building modern, scalable apps</span>
              <span className="text-[7vw] font-bold">SOFTWARE</span>
            </div>
            <div ref={developerRef} className="flex items-start opacity-0">
              <span className="text-[7vw] font-bold">DEVELOPER</span>
              <span className="font-bold w-[140px]">Focused on clean & efficient code</span>
            </div>
          </div>

          {/* Phase 7 */}
          <div className="flex gap-14 translate-x-[-230px] fixed leading-[0.8] text-start bottom-10" ref={phase7}>
            <p className="text-[8vw] font-bold opacity-0" ref={punit7Ref}>
              PUNIT <span className="text-7xl absolute top-12">®</span>
            </p>
            <p className="text-[8vw] font-bold opacity-0" ref={ageRef}>- 21</p>
          </div>
        </div>
      </div>

      {/* SCROLL BOXES SECTION */}
      <div className="w-full bg-white px-10 py-20 space-y-16">
        {/* 4 boxes with varied heights and images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className={`relative rounded-2xl shadow-lg opacity-0 overflow-hidden ${i === 0 ? "h-[40vh]" : i === 1 ? "h-[60vh]" : "h-[50vh]"}`}
            >
              <Image
                src={i === 0 ? "/360property.png" : i === 1 ? "/apple.png" : i === 2 ? "/peunique.png" : "/sociallysynk.png"}
                width={400}
                height={i === 0 ? 400 : i === 1 ? 600 : 500}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xl font-bold">Project {i + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 1 box with larger image */}
        <div className="grid grid-cols-1 gap-6">
          <div
            ref={(el) => (boxesRef.current[4] = el)}
            className="relative rounded-2xl shadow-lg opacity-0 overflow-hidden h-[80vh]"
          >
            <Image
              src="/emailautomation.png"
              width={400}
              height={800}
              alt="Featured Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-white text-xl font-bold">Featured Work</p>
            </div>
          </div>
        </div>

        {/* 2 boxes with images */}
        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[5 + i] = el)}
              className="relative bg-gray-800 rounded-2xl shadow-lg opacity-0 overflow-hidden h-[55vh]"
            >
              <Image
                src={i === 0 ? "/workflow.jpeg" : "/360property.png"}
                width={400}
                height={550}
                alt={`Skill ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xl font-bold">Skill {i + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 boxes with images */}
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[7 + i] = el)}
              className="relative bg-gray-800 rounded-2xl shadow-lg opacity-0 overflow-hidden h-[45vh]"
            >
              <Image
                src={i === 0 ? "/apple.png" : i === 1 ? "/peunique.png" : "/sociallysynk.png"}
                width={400}
                height={450}
                alt={`Experience ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xl font-bold">Experience {i + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 boxes with varied heights and images */}
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[10 + i] = el)}
              className={`relative bg-gray-800 rounded-2xl shadow-lg opacity-0 overflow-hidden ${i === 0 ? "h-[50vh]" : i === 2 ? "h-[70vh]" : "h-[40vh]"}`}
            >
              <Image
                src={i === 0 ? "/emailautomation.png" : i === 1 ? "/workflow.jpeg" : i === 2 ? "/360property.png" : "/apple.png"}
                width={400}
                height={i === 2 ? 700 : i === 0 ? 500 : 400}
                alt={`Contact ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <p className="text-white text-xl font-bold">Contact {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;