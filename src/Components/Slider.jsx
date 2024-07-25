import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";
import { Autoplay, Pagination } from "swiper/modules";

import SpeedoMeter from "../assets/Images/speedometer.png";
import SpeedoMeterNeedle from "../assets/Images/speedometer-needle.png";
import Koenigsegg1 from "../assets/Images/Koenigsegg-1.jpg";
import Koenigsegg2 from "../assets/Images/Koenigsegg-2.jpg";
import Koenigsegg3 from "../assets/Images/Koenigsegg-3.jpg";
import CarName from "../assets/Svg/car-name.svg";
import CarName2 from "../assets/Svg/car-name2.svg";
import CarName3 from "../assets/Svg/car-name-3.svg";

const Slider = () => {
  const slidesContent = [
    {
      bgUrl: Koenigsegg1,
      carName: CarName,
    },
    {
      bgUrl: Koenigsegg2,
      carName: CarName2,
    },
    {
      bgUrl: Koenigsegg3,
      carName: CarName3,
    },
  ];

  const progressDiv = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time) => {
    const totalDuration = 3000;
    const maxRotation = 200;

    if (progressContent.current) {
      const rotation = ((totalDuration - time) / totalDuration) * maxRotation;
      progressContent.current.style.transform = `rotate(${rotation}deg)`;
    }
  };

  const resetProgressBar = () => {
    if (progressContent.current) {
      progressContent.current.style.transform = `rotate(-5deg)`;
    }
  };

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper-container").swiper;

    swiperInstance.on("autoplayTimeLeft", onAutoplayTimeLeft);
    swiperInstance.on("slideChangeTransitionStart", resetProgressBar);

    return () => {
      swiperInstance.off("autoplayTimeLeft", onAutoplayTimeLeft);
      swiperInstance.off("slideChangeTransitionStart", resetProgressBar);
    };
  }, []);

  return (
    <>
      <Swiper
        cssMode={true}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        grabCursor={false}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper relative w-full h-full swiper-container"
      >
        {slidesContent.map((content, index) => (
          <SwiperSlide key={index} className={`w-full h-full relative`}>
            <div className="absolute -z-10 w-full h-full">
              <img
                className="w-full h-full object-center object-cover"
                src={content.bgUrl}
                alt=""
              />
            </div>
            <div className="flex justify-start items-center mt-36">
              <div
                className={`${
                  index === 1
                    ? "w-[300px] h-[60px] md:w-[420px] md:h-[90px] lg:w-[520px] lg:h-[105px]"
                    : "w-[290px] h-[50px] md:w-[400px] md:h-[70px] lg:w-[530px] lg:h-[90px]"
                } pl-4 lg:pl-10 overflow-hidden`}
              >
                <img
                  className="w-full h-full object-center object-cover"
                  src={content.carName}
                  alt="Car Name"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute max-md:bottom-10 max-md:right-2 md:bottom-2 md:left-5 z-10 flex justify-center items-center">
          <div
            ref={progressDiv}
            className="w-[110px] h-[100px] sm:w-[170px] sm:h-[120px] md:w-[250px] md:h-[180px] relative flex justify-center items-center"
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full object-center object-cover"
                src={SpeedoMeter}
                alt=""
              />
            </div>
            <div
              ref={progressContent}
              className="w-[38%] h-[27%] absolute bottom-[12%] left-[12%] origin-[40px_8px] md:origin-[90px_15px] -rotate-[5deg]"
            >
              <img
                className="w-full h-full object-center object-cover"
                src={SpeedoMeterNeedle}
                alt=""
              />
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
