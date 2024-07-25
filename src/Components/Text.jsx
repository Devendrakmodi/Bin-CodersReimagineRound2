import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import circle from "../assets/Svg/circle.svg";
import "./Text.css"

gsap.registerPlugin(ScrollTrigger);

const Text = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-1",
          start: "top 80%",
          end: "bottom 20%",
          // markers: true,
          scrub: 1,
        },
      });

      tl.to(".text-hover h1", {
        width: "100%",
        duration: 0.4,
      });
      tl.to(
        ".text-hover h2",
        {
          width: "100%",
          duration: 0.4,
        },
        "-=0.3"
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="part-1 h-screen w-full flex justify-center items-center bg-black relative overflow-hidden max-md:text-center">
      <div className="text-part-1 text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl leading-[1.25] absolute top-1/2 -translate-y-1/2 md:left-[5%] opacity-[0.2] w-full z-10 font-bold max-md:px-3">
        <h1 className="md:h-[45px] lg:h-[55px] xl:h-[90px] my-2">
          Precision Engineering That Accelerates
        </h1>
        <h2 className="md:h-[45px] lg:h-[55px] xl:h-[90px] ">
          Performance and Redefines Speed
        </h2>
      </div>
      <div className="text-hover overflow-hidden text-2xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-7xl leading-[1.25] absolute top-1/2 -translate-y-1/2 md:left-[5%] opacity-[1] w-full md:w-fit z-20 font-bold max-md:px-3">
        <h1 className="md:h-[45px] lg:h-[55px] xl:h-[90px] my-2 overflow-hidden md:text-nowrap w-full md:w-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Precision Engineering That Accelerates
        </h1>
        <h2 className="md:h-[45px] lg:h-[55px] xl:h-[90px] overflow-hidden md:text-nowrap w-full md:w-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Performance and Redefines Speed
        </h2>
      </div>
      <div className="flex justify-center items-center absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="size-40 rotate-animation ">
          <img
            src={circle}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
