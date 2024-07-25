import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollImage1 from "../assets/Images/scroll-image-1.jpg";
import ScrollImage2 from "../assets/Images/scroll-image-2.jpg";
import ScrollImage3 from "../assets/Images/scroll-image-3.jpeg";
import ScrollImage4 from "../assets/Images/scroll-image-4.png";
import ScrollImage5 from "../assets/Images/scroll-image-5.jpg";
import ScrollImage6 from "../assets/Images/scroll-image-6.jpg";
import ScrollImage7 from "../assets/Images/scroll-image-7.jpg";

gsap.registerPlugin(useGSAP);

const Scrolll = () => {
  const scrollContent = [
    {
      imgUrl: ScrollImage1,
      altText: "Koenigsegg Car",
      textContet: "High Performance",
    },
    {
      imgUrl: ScrollImage2,
      altText: "Koenigsegg Car",
      textContet: "Innovative Technology",
    },
    {
      imgUrl: ScrollImage3,
      altText: "Koenigsegg Car",
      textContet: "Exclusivity",
    },
    {
      imgUrl: ScrollImage4,
      altText: "Koenigsegg Car",
      textContet: "Environment Consideration",
    },
    {
      imgUrl: ScrollImage5,
      altText: "Koenigsegg Car",
      textContet: "Lightweight construction",
    },
    {
      imgUrl: ScrollImage6,
      altText: "Koenigsegg Car",
      textContet: "Precision engineering",
    },
    {
      imgUrl: ScrollImage7,
      altText: "Koenigsegg Car",
      textContet: "Luxury craftsmanship",
    },
  ];

  return (
    <>
      <div className="relative wrapper min-h-screen w-full lg:pt-32 overflow-hidden mt-1 flex justify-center items-center flex-col lg:inline-block gap-y-1">
        {scrollContent.map((content, index) => (
          <div
            key={index}
            className="w-full capitalize flex justify-center lg:justify-around items-center group"
          >
            <div className="absolute bottom-2 right-2  md:bottom-1/2 md:translate-y-1/2 md:right-[4%] w-fit h-fit lg:w-full lg:h-full flex justify-center items-center lg:relative background z-20">
              <div className="hidden lg:mt-10 lg:absolute left-[50%] top-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2  w-[220px] h-[150px] sm:w-[280px] sm:h-[200px] md:w-[40vw] md:h-[50vh] lg:w-[400px] lg:h-[300px] z-20 group-hover:block border border-white p-2 bg-[conic-gradient(#ff00ff,#00ffff,#00ff00,#bf00ff,#ff00ff)]">
                <img
                  className="h-full w-full object-cover object-center"
                  src={content.imgUrl}
                  alt={content.altText}
                />
              </div>
            </div>
            <h2 className="text-[white] pl-5 w-full text-2xl sm:text-4xl xl:text-6xl py-1 font-bold transition-transform duration-500 ease-in-out group-hover:translate-x-[10%]  font-Harewataru group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
              {content.textContet}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Scrolll;
