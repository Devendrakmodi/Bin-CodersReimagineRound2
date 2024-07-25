import React, { useEffect } from "react";
import image1 from "../assets/Images/part-image-1.jpeg";
import image2 from "../assets/Images/part-image-2.jpg";
import image3 from "../assets/Images/part-image-3.webp";
import image4 from "../assets/Images/part-image-4.jpg";
import image5 from "../assets/Images/part-image-5.webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Parts = () => {
  useEffect(() => {
    console.log("useEffect triggered");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 320px) and (max-width:500px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          scroller: "body",
          start: "50% 50%",
          end: "300% 50%",
          pin: true,
          // markers: true,
          scrub: true,
        },
      });

      tl.to(
        ".scroll-images",
        {
          height: "70vh",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 div",
        {
          height: "70vh",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 .our",
        {
          top: "0%",
          left: "10%",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 .work",
        {
          bottom: "0%",
          right: "10%",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(".scroll-images > div", {
        translateY: "-280vh",
        duration: 2,
        ease: "power3.in",
      });
    });
    mm.add("(min-width: 501px)", () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".part-7",
          scroller: "body",
          start: "50% 50%",
          end: "300% 50%",
          pin: true,
          // markers: true,
          scrub: true,
        },
      });

      tl.to(
        ".scroll-images",
        {
          height: "70vh",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 div",
        {
          height: "70vh",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 .our",
        {
          top: "0%",
          left: "0%",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(
        ".part-7 .work",
        {
          bottom: "0%",
          right: "0%",
          duration: 2,
          ease: "power3.in",
        },
        "0"
      );

      tl.to(".scroll-images > div", {
        translateY: "-280vh",
        duration: 2,
        ease: "power3.in",
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="part-7 h-screen w-full flex justify-center items-center relative bg-blue-500/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 our-work-text w-[80vw] sm:w-[70vw] text-5xl h-[70vh] z-20">
        <h1 className="our absolute left-[40%] -translate-x-1/2 -translate-y-1/2 top-[45%] sm:top-1/2 text-5xl sm:text-6xl lg:text-7xl font-bold font-UltimateGearSlant bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Our
        </h1>
        <h1 className="work absolute right-[40%] translate-x-1/2  translate-y-1/2 bottom-[45%] sm:bottom-1/2 text-5xl sm:text-6xl lg:text-7xl font-bold font-UltimateGearSlant bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          Cars
        </h1>
      </div>
      <div className="scroll-images w-[80vw] sm:w-[70vw] h-0 flex justify-center items-center relative bg-white overflow-hidden">
        <div className="w-full h-full">
          <div className="w-full h-[70vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image1}
              alt="Koenigsegg 1"
            />
          </div>
          <div className="w-full h-[70vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image2}
              alt="Koenigsegg 2"
            />
          </div>
          <div className="w-full h-[70vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image3}
              alt="Koenigsegg 3"
            />
          </div>
          <div className="w-full h-[70vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image4}
              alt="Koenigsegg 4"
            />
          </div>
          <div className="w-full h-[70vh]">
            <img
              className="w-full h-full object-center object-cover"
              src={image5}
              alt="Koenigsegg 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parts;
