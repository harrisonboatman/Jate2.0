import React, { createRef, useEffect, useRef } from "react";
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

  return (
    <div>
      <div className="relative w-full h-[90vh]">
        <Parallax className="h-[90vh] relative" strength={400}>
          <div className="absolute w-full h-[90vh] inset-0 bg-black opacity-10"></div>
          <video autoPlay muted loop className="absolute w-full h-[90vh] object-fill" controls>
            <source src={video1} type="video/mp4" />
          </video>
        </Parallax>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-[10rem] h-[90vh] overflow-hidden relative mb-[12rem]">
        <Parallax className="h-[70vh]" bgImage={image3} strength={600}>
          <div style={{ height: "150px" }}></div>
        </Parallax>

        <Parallax
          className="h-[70vh] mt-[5rem]"
          bgImage={image2}
          strength={600}
        >
          <div style={{ height: "150px" }}></div>
        </Parallax>

        <Parallax
          className="h-[70vh] mt-[10rem]"
          bgImage={image4}
          strength={600}
        >
          <div style={{ height: "150px" }}></div>
        </Parallax>
      </div>

      {/* <div className="gallery-grid">
        <img ref={(el) => (imageRefs.current[0] = el)} src={image5} className="mb-2 col-span-2 row-span-2" />
        <img ref={(el) => (imageRefs.current[1] = el)} src={image8} className="mb-4 col-span-2 row-span-1" />
        <img ref={(el) => (imageRefs.current[2] = el)} src={image10} className="mb-0 col-span-1 row-span-1" />
        <img ref={(el) => (imageRefs.current[3] = el)} src={image7}
        className="mb-8 col-span-1 row-span-1" />
        <img ref={(el) => (imageRefs.current[4] = el)} src={image11} className="m-0 col-span-2 row-span-2" />
        <img ref={(el) => (imageRefs.current[5] = el)} src={image6} 
        className="m-0 col-span-2 row-span-1" />
        <img ref={(el) => (imageRefs.current[6] = el)} src={image15}
        className="m-0 col-span-1 row-span-1" />
        <img ref={(el) => (imageRefs.current[8] = el)} src={image12}
        className="m-0 col-span-1 row-span-1"  />
        <img ref={(el) => (imageRefs.current[9] = el)} src={image13}
        className="m-0 col-span-2 row-span-2" />
        <img ref={(el) => (imageRefs.current[10] = el)} src={image1}
        className="m-0 col-span-2 row-span-1" />
        <img ref={(el) => (imageRefs.current[11] = el)} src={image9}
        className="m-0 col-span-1 row-span-1" />
        <img ref={(el) => (imageRefs.current[7] = el)} src={image4}
        className="m-0 col-span-1 row-span-1"  />
        <img ref={(el) => (imageRefs.current[12] = el)} src={image16}className="m-0 col-span-1 row-span-1"  />
        <img ref={(el) => (imageRefs.current[13] = el)} src={image14}className="m-0 col-span-1 row-span-1"  />
        <img ref={(el) => (imageRefs.current[14] = el)} src={image17}className="m-0 col-span-1 row-span-1"  />
        <img ref={(el) => (imageRefs.current[19] = el)} src={image19}className="m-0 col-span-1 row-span-1"  />
       
      </div> */}
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
                </div>
              </div>
            </div>
          </div>
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
