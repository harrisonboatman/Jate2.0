import React, { createRef, useEffect, useRef } from "react";
import Typed from "react-typed";
import Contact from "./Contact";
import { gsap } from "gsap";
import backgroundImg from "../assets/gallery-bg.png";
import { ScrollTrigger } from "gsap/all";
import image1 from "../assets/gallery1.png";
import image2 from "../assets/gallery2.png";
import image3 from "../assets/gallery3.png";
import image4 from "../assets/gallery4.png";
import image5 from "../assets/gallery5.png";
import image6 from "../assets/gallery6.png";
import image7 from "../assets/gallery7.png";
import image8 from "../assets/gallery8.png";
import image9 from "../assets/gallery9.png";
import image10 from "../assets/gallery10.png";
import image11 from "../assets/gallery11.png";
import image12 from "../assets/gallery12.png";
import image13 from "../assets/gallery13.png";
import image14 from "../assets/gallery14.png";
import image15 from "../assets/gallery15.png";
import image16 from "../assets/gallery16.png";
import image17 from "../assets/gallery17.png";
import image19 from "../assets/gallery19.png";
import { Parallax } from "react-parallax";
import video1 from "../assets/jate.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import aboutUs from "../assets/about-us.png";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const imageRefs = useRef([]);
  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      gsap.from(image, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: "top 85%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  const myRef = useRef(null);
    useEffect(() => {
        let fromVar = gsap.from(myRef.current, {
            opacity: 0,
            duration: 4,
            y: 90,
            immediateRender: false,
        });
        return () => {
            fromVar.kill();
        };
    }, []);
    const containerRef = useRef(null);
  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(el,
      { x: 1400 },
      {
        x: 0,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);
  return (
    <div>
      <div className="relative lg:w-full h-[100vh]">
        <Parallax className="h-[100vh] relative" strength={400}>
          <div className="absolute w-full h-[100vh] inset-0 bg-black opacity-10"></div>
          <video
            autoPlay
            muted
            loop
            className="absolute w-full h-[100vh] object-fill"
            controls
          >
            <source src={video3} type="video/mp4" />
          </video>
          <div className="absolute w-full h-[100vh] inset-0 bg-black opacity-20"></div>
          <div ref={myRef} className="text-overlay absolute w-full">
            <h1 className="text-3xl font-sans text-white flex h-[900px] justify-center items-center md:text-7xl lg:text-9xl">
              <span className="title-text text-center">
                Welcome to<span>&nbsp;</span><br></br>
                <Typed
                  className="jate-title text-green-500 font-bold"
                  strings={["J.A.T.E", "Just", "Another", "Taco", "Emporium"]}
                  typeSpeed={160}
                  backSpeed={60}
                  loop
                />
              </span>
            </h1>
          </div>
        </Parallax>
      </div>
<div className="bg-black h-[20vh]"></div>
      <div className="lg:grid grid-cols-3 gap-5 h-[90vh] overflow-hidden relative mb-[15rem] bg-black">
        <Parallax className="lg:h-[70vh] rounded-lg border-4 border-green-500" bgImage={image3} strength={600}>
          <div style={{ height: "150px" }}></div>
        </Parallax>
        <Parallax
          className="lg:h-[70vh] mt-[5rem] rounded-lg border-4 border-green-500"
          bgImage={image2}
          strength={600}
        >
          <div style={{ height: "150px" }}></div>
        </Parallax>
        <Parallax
          className="lg:h-[70vh] mt-[10rem] rounded-lg border-4 border-green-500"
          bgImage={image4}
          strength={600}
        >
          <div style={{ height: "150px" }}></div>
        </Parallax>
      </div>
      <div className="flex justify-center items-center">
  <div className="relative flex justify-center items-center lg:w-3/4 bg-gray-300 lg:h-[500px] lg:mx-20 md:mx-10 sm:mx-2 rounded-tr-xl rounded-br-xl sm:w-full sm:h-[250px]">
    <img src={aboutUs} className="about-us-img lg:h-[550px] md:h-[400px] sm:h-[300px] mt-[-180px] w-[80%] rounded-3xl" /></div>
</div>
<div ref={containerRef}>
<h1 className="lg:text-6xl md:text-4xl sm:xl text-left lg:ml-[11rem] md:ml-[4rem] sm:ml-4 mt-10 font-serif">
  WHO WE ARE
</h1>

<h1 className="text-gray-400 lg:text-xl md:text-base sm:text-sm text-right lg:mx-40 md:mx-20 sm:mx-0 leading-loose">
  We are an independently owned company<br></br> who enjoy the finer things in life... <span className="font-bold">tacos.</span> <br></br>People come for the food, but end up staying for the good vibes! <br></br><span class="text-green-500">Just a</span> bunch of guys who found turned our passion into a career.<br></br><span class="text-green-500">Just a</span>bout the best tacos you'll ever taste.<br></br><span class="text-green-500">Just a</span>pproved for another location coming soon.<br></br><span class="text-green-500">Just Another Taco Emporium</span><br></br><p className="indent-8 text-2xl font-bold text-green-600"> - JATE</p>
</h1>
</div>
1:30
<section class="overflow-hidden text-neutral-700">
        <div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
          <div class="flex flex-col md:flex-row gap-5">
            <div class="flex flex-1 flex-col gap-5">
              <div class="flex flex-1 flex-col">
                <img
                  class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                  src={image6}
                />
              </div>
              <div class="hidden md:flex flex-1 flex-row gap-5">
                <div class="flex flex-1 flex-col">
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image7}
                  />
                </div>
                <div class="hidden md:flex flex-1 flex-col">
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image4}
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-1 flex-col gap-4">
              <div class="hidden md:flex flex-1 flex-row gap-5">
                <div class="flex flex-1 flex-col">
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image3}
                  />
                </div>
                <div class="hidden md:flex flex-1 flex-col">
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image2}
                  />
                </div>
              </div>
              <div class="flex flex-1 flex-col">
                <img
                  class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                  src={image1}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex flex-1 flex-col">
              <div class="flex flex-1 flex-col">
                <img
                  class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                  src={image5}
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-1">
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image12}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image11}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                    src={image8}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class=" rounded-lg object-cover ease-in duration-300 hover:scale-105  h-full"
                    src={image10}
                    alt=""
                  />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
          <hr class="w-full h-px my-12 bg-gray-200 border-1 dark:bg-gray-800 ">
          </hr>
          <Contact />
        </div>
        {/* <div class="container scale-110 mx-auto px-5 py-2 lg:px-32 lg:pt-24 lg:pb-24">
    <div class="-m-1 flex flex-wrap md:-m-2">
      <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover ease-in duration-300 hover:scale-105 object-center"
            src={image1} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center ease-in duration-300 hover:scale-105 "
            src={image2} />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover ease-in duration-300 hover:scale-105 object-center"
            src={image3} />
        </div>
      </div>
      <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover ease-in duration-300 hover:scale-105 object-center"
            src={image4} />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover ease-in duration-300 hover:scale-105 object-center"
            src={image5}/>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover ease-in duration-300 hover:scale-105 object-center"
            src={image12} />
        </div>
      </div>
    </div>
  </div> */}
      </section>
    </div>
  );
};
export default Home;