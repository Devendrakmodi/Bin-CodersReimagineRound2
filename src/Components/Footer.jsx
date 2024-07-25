import React, { useEffect, useRef } from "react";
import "remixicon/fonts/remixicon.css";
import LogoIcon from "../assets/Svg/logo-icon.svg";

const Footer = () => {
  const canvasRef = useRef(null);
  const FooterRef = useRef(null);

  useEffect(() => {
    const FooterElemRef = FooterRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: window.innerWidth,
      y: window.innerHeight,
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      for (let i = 0; i < particlenum; i++) {
        particles.push(
          new Particle(
            mouse.x,
            mouse.y,
            3,
            `#fff`,
            // `hsl(${Math.random() * 360}, 50%, 50%)`,
            {
              x: Math.cos(angleIncrement * i) * Math.random() * 30,
              y: Math.sin(angleIncrement * i) * Math.random() * 30,
            }
          )
        );
      }
    };

    FooterElemRef.addEventListener("resize", handleResize);
    FooterElemRef.addEventListener("click", handleClick);

    const gravity = 0.01;
    const friction = 0.99;
    const particlenum = 250;
    const angleIncrement = (Math.PI * 2) / particlenum;
    let particles = [];

    class Particle {
      constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
      }

      draw() {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
        c.restore();
      }

      update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.y += gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.005;
      }
    }

    function init() {
      particles = [];
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height); // Clear with transparent background
      particles.forEach((particle, i) => {
        if (particle.alpha > 0) {
          particle.update();
        } else {
          particles.splice(i, 1);
        }
      });
    }

    init();
    animate();

    return () => {
      FooterElemRef.removeEventListener("resize", handleResize);
      FooterElemRef.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <footer
        ref={FooterRef}
        className="relative min-h-[50vh] w-full flex justify-center items-center flex-col bg-[url(https://i1.wp.com/blog.shoplc.com/wp-content/uploads/2023/02/moon-featured_579829396.jpeg?w=1000&ssl=1)] bg-cover bg-center bg-no-repeat bg-fixed "
      >
        <div className="w-full h-full overlay bg-black/50 flex justify-center items-center flex-col px-5 pt-5 sm:p-10 md:pt-16 md:px-16 lg:pt-20 lg:px-20 xl:pt-28 xL:px-32">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-[1] bg-transparent"
          ></canvas>
          <div className="footer-upper w-full h-full z-10 flex justify-center items-center flex-col border-b border-white">
            <div className="footer-upper-1 w-full h-full grid grid-cols-2 lg:grid-cols-5 gap-10">
              <div className="footer-heading col-span-2 hidden lg:inline-block">
                <h2 className="flex justify-center items-start flex-col text-white font-Gustavo font-medium text-7xl">
                  <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                    The
                  </span>
                  <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent ml-24">
                    Show
                  </span>
                  <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                    Must
                  </span>
                  <span className="inline-block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                    Go On
                  </span>
                </h2>
              </div>
              <div className="logo-icon w-full h-full col-span-1 lg:hidden">
                <div className="w-[72px] h-[100px]">
                  <img
                    className="w-full h-full object-center object-cover"
                    src={LogoIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="list-item-1 col-span-1 text-lg font-medium font-Basel_Grotesk">
                <ul className="w-full h-full flex flex-col items-start gap-2">
                  <li className="btn-hover hover:before:w-16">Megacars</li>
                  <li className="btn-hover hover:before:w-16">Technology</li>
                  <li className="btn-hover hover:before:w-16">About</li>
                  <li className="btn-hover hover:before:w-16">History</li>
                </ul>
              </div>
              <div className="list-item-2 col-span-1 text-sm font-medium font-Basel_Grotesk">
                <ul className="w-full h-full flex flex-col items-start gap-2">
                  <li className="btn-hover hover:before:w-16">
                    Dealer locator
                  </li>
                  <li className="btn-hover hover:before:w-16">Shop</li>
                  <li className="btn-hover hover:before:w-16">Contact</li>
                </ul>
              </div>
              <div className="list-item-3 col-span-1 text-sm font-medium font-Basel_Grotesk">
                <ul className="w-full h-full flex flex-col items-start gap-2">
                  <li className="btn-hover hover:before:w-16">Careers</li>
                  <li className="btn-hover hover:before:w-16">Press</li>
                  <li className="btn-hover hover:before:w-16">Factory tours</li>
                </ul>
              </div>
            </div>
            <div className="footer-upper-2 w-full flex justify-between items-center gap-3 py-10">
              <div className="social-icons flex justify-start items-center gap-3">
                <div className="icon flex justify-center items-center text-white size-8 cursor-pointer">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </div>
                <div className="icon flex justify-center items-center text-white size-8 cursor-pointer">
                  <i className="fa-brands fa-twitter text-xl"></i>
                </div>
                <div className="icon flex justify-center items-center text-white size-8 cursor-pointer">
                  <i className="fa-brands fa-facebook-f text-xl"></i>
                </div>
                <div className="icon flex justify-center items-center text-white size-8 cursor-pointer">
                  <i className="fa-brands fa-youtube text-xl"></i>
                </div>
                <div className="icon flex justify-center items-center text-white size-8 cursor-pointer">
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </div>
              </div>
              <div className="logo-icon hidden lg:inline-block">
                <div className="w-[72px] h-[100px]">
                  <img
                    className="w-full h-full object-center object-cover"
                    src={LogoIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-lower w-full flex justify-between items-center flex-col md:flex-row py-7 font-Basel_Grotesk text-sm gap-5">
            <div className="w-fit h-full text-center">
              <p>Copyright © since 1994 - Koenigsegg Automotive AB</p>
            </div>
            <div className="w-fit h-full">
              <ul className="w-full h-full flex justify-between items-center gap-10 max-md:text-center">
                <li className="btn-hover hover:before:w-16">Sitemap</li>
                <li className="btn-hover hover:before:w-16">Cookie Policy</li>
                <li className="btn-hover hover:before:w-16">Legal Links</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
