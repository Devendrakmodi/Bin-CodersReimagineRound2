import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import LoaderVideo from "../assets/Videos/landing-page-video.mp4";
import "./Loader.css";

const Loader = () => {
  const loaderVideoRef = useRef();
  const loaderBtnRef = useRef();

  useEffect(() => {
    const button = loaderBtnRef.current;

    const animateLoader = () => {
      gsap.to(".loader-content", {
        delay: 2,
        duration: 0.8,
        translateX: "-100vw",
        ease: "power3.in",
      });
    };
    const animateRemoveLoader = () => {
      gsap.to(".loader", {
        duration: 0.7,
        top: "-100%",
        ease: "power3.in",
        onComplete: () => {
          gsap.set(".loader", { display: "none" });
        },
      });
      setTimeout(() => {
        if (loaderVideoRef.current) {
          loaderVideoRef.current.currentTime = 0;
          loaderVideoRef.current.play();
        }
      }, 1000);
    };

    animateLoader();

    button.addEventListener("click", animateRemoveLoader);

    return () => {
      button.removeEventListener("click", animateRemoveLoader);
    };
  }, []);

  return (
    <>
      <div className="loader fixed top-0 w-full h-full z-[999999] bg-[linear-gradient(135deg,rgba(69,0,0,1)_0%,rgba(53,0,0,1)_20%,rgba(0,0,0,1)_40%,rgba(0,0,0,1)_60%,rgba(53,0,0,1)_80%,rgba(69,0,0,1)_100%)]">
        <div className="loader-content flex w-[250vw] h-full">
          <div className="w-screen h-screen flex justify-center items-center text-center flex-col px-3 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-UltimateGearSlant font-black uppercase break-words">
              Drive Beyond Limits
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-5 font-Gustavo font-medium lg:font-bold break-words">
              Welcome to Koensigsegg, Where we make everyone unstoppable.
            </p>
          </div>
          <div className="loader-video flex justify-center items-center w-screen h-screen overflow-hidden relative p-5 lg:p-10 bg-transparent">
            <video
              ref={loaderVideoRef}
              className="w-full h-full object-contain md:object-cover object-center relative border border-white/50 bg-white/30 backdrop-blur-sm"
              src={LoaderVideo}
              loop
              autoPlay
              muted
            ></video>
            <div
              ref={loaderBtnRef}
              className="flex justify-center items-center w-40 h-12 loader-btn cursor-pointer absolute backdrop-blur-sm max-md:left-1/2 bottom-24 sm:left-28 sm:bottom-8 md:left-28 md:bottom-8 lg:bottom-14 lg:left-36 -translate-x-1/2 btn font-PPFraktion text-sm text-[white] font-bold bg-[#ffffff1a] px-4 py-3"
            >
              Take Test Drive
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
