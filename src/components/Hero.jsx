import React from "react";
import "@fontsource/montserrat";
import LeftArrowIcon from "./LeftArrowIcon";

const Hero = () => {
  return (
    <div className="relative flex-shrink-0 w-screen">
      <img
        src="/Image.png"
        className="w-screen h-auto"
        alt="Description of the image"
      />
      <div className="absolute inset-0 flex items-center justify-center">
  <div className="flex items-center custom-gap">
    {/* Left Arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M21.9332 28L9.99988 16.0667L21.9999 4"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
    
    {/* This empty div creates the specified gap */}
    <div className="w-1136 h-0"></div>
    
    {/* Right Arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M9.99988 4L21.9999 16.0667L10.0665 28"
        stroke="white"
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
</div>
      <div className="absolute inset-0 flex items-center justify-center">
      
        <div className="w-580 h-326 border transform translate-x-2/4 px-8">
          <div className="w-368 h-248 bg-opacity-80  text-white p-12 ">
            <h3 className="text-white underline font-montserrat text-base font-normal my-3 mb-12 leading-18 tracking-widest">
              SKIN
            </h3>

            <h2 className="text-white text-2xl  font-vidaloka font-normal font-400 leading-40 mb-4">
              Six Hyaluronic Serums <br /> For Glowing Summer Skin <br />{" "}
              Vivamus Placerat
            </h2>

            <p className="text-white font-montserrat text-base font-normal font-400 leading-18">
              By Sarfraz Jasim<span className="mx-2">-</span>
              <span className="mx-2">29 July, 2023</span>
            </p>

            <div></div>
            <div className="flex items-center mt-12 mb-4 cursor-pointer">
              <p className="text-white font-montserrat font-normal text-base leading-18">
                Continue Reading
              </p>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1" // You can adjust the margin to your desired spacing
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M6.78738 9.4626L11.2499 5.0001L6.81655 0.537598"
                    stroke="white"
                    stroke-miterlimit="10"
                  />
                  <path
                    id="Vector_2"
                    d="M11.2499 5H0.749878"
                    stroke="white"
                    stroke-miterlimit="10"
                  />
                </g>
              </svg>
            </div>
            <hr className="mr-28 mt-3" />
            
               {/* Use your left arrow SVG or component */}
             
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
