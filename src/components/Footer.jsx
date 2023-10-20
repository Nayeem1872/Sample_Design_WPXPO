import React from "react";
import LowerFooter from "./LowerFooter";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-auto h-auto bg-[#1D1A1A]">
      <div className="flex flex-row items-center justify-center p-12 gap-[150px] ">
        <div className="flex flex-col mt-10">
          <h1 className="text-white font-vidaloka text-base font-normal mb-4 font-400 leading-5 uppercase">
            Categories
          </h1>
          {/*  */}
          <div className="flex justify-between mt-14">
            <h3 className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              Beauty
            </h3>
            <span className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              (4)
            </span>
          </div>
          <div className="divide-y  w-[260px] py-3 border-b border-white"></div>
          {/*  */}
          <div className="flex justify-between mt-5">
            <h3 className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              Fashion
            </h3>
            <span className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              (8)
            </span>
          </div>
          <div className="divide-y  w-[260px] py-3 border-b border-white"></div>


          <div className="flex justify-between mt-5">
            <h3 className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              Body
            </h3>
            <span className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              (9)
            </span>
          </div>
          <div className="divide-y  w-[260px] py-3 border-b border-white"></div>
          <div className="flex justify-between mt-5">
            <h3 className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              LifeStyle
            </h3>
            <span className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              (2)
            </span>
          </div>
          <div className="divide-y  w-[260px] py-3 border-b border-white"></div>
          <div className="flex justify-between mt-5">
            <h3 className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              Makeup
            </h3>
            <span className="text-white font-vidaloka text-base font-normal font-400 leading-5">
              (6)
            </span>
          </div>
          <div className="divide-y  w-[260px] py-3 border-b border-white"></div>

          <div class="relative mt-9">
        
        <input type="search" class="block w-full p-4 pl-10 text-sm text-gray-200  bg-[#535353]" placeholder="Search" required
         style={{
            color: '#CFCFCF',
            fontFamily: 'Vidaloka',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '22px',
          }}
        
        
        />
        <div class="absolute inset-y-0 right-0 mr-3 flex items-center pl-1 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10.9999 18.9995C15.4182 18.9995 18.9999 15.4178 18.9999 10.9995C18.9999 6.58123 15.4182 2.99951 10.9999 2.99951C6.5816 2.99951 2.99988 6.58123 2.99988 10.9995C2.99988 15.4178 6.5816 18.9995 10.9999 18.9995Z" stroke="#CFCFCF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9999 20.9994L16.6499 16.6494" stroke="#CFCFCF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </div>
    </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-white font-vidaloka text-base font-normal mb-24 font-400 leading-5 uppercase">
            POPULAR POST
          </h1>
          <div className="flex ">
            <img src="/Image (8).png" className="w-[100px] h-[100px]" />
            <div className="flex flex-col mx-5">
            <h3 className="w-[201] text-white font-vidaloka text-base font-normal font-400 leading-22">
  Vivamus placerat Luctus <br/> Neque nec Faucibus
</h3>
<span className="text-gray-300 my-4 font-montserrat text-xs font-normal font-400 leading-18">
  7 Days ago
</span>
            </div>
          </div>
          <div className="flex my-6">
            <img src="/Image (8).png" className="w-[100px] h-[100px]" />
            <div className="flex flex-col mx-5">
            <h3 className="w-[201] text-white font-vidaloka text-base font-normal font-400 leading-22">
  Vivamus placerat Luctus <br/> Neque nec Faucibus
</h3>
<span className="text-gray-300 my-4 font-montserrat text-xs font-normal font-400 leading-18">
  7 Days ago
</span>
            </div>
          </div>
          <div className="flex mt-3">
            <img src="/Image (8).png" className="w-[100px] h-[100px]" />
            <div className="flex flex-col mx-5">
            <h3 className="w-[201] text-white font-vidaloka text-base font-normal font-400 leading-22">
  Vivamus placerat Luctus <br/> Neque nec Faucibus
</h3>
<span className="text-gray-300 my-4 font-montserrat text-xs font-normal font-400 leading-18">
  7 Days ago
</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white font-vidaloka mb-[70px]  text-base font-normal font-400 leading-5 uppercase">
            GALLERY
          </h1>
          <div className="flex gap-4">
              <img src="/Image (7).png"  className="w-[100px] h-[100px]"/>
              <img src="/Image (7).png" className="w-[100px] h-[100px]"/>
              <img src="/Image (7).png" className="w-[100px] h-[100px]" />

          </div>
          <div className="flex gap-4">
              <img src="/Image (7).png" className="w-[100px] h-[100px]" />
              <img src="/Image (7).png" className="w-[100px] h-[100px]" />
              <img src="/Image (7).png" className="w-[100px] h-[100px]" />
              </div>

              <h1 className="text-white font-vidaloka text-base font-normal mt-4 font-400 leading-5 uppercase">
           TAGS
          </h1>
          <div className="flex gap-2">
          <span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
<span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
<span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
<span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
          </div>
          <div className="flex gap-2">
          <span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
<span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
<span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
<span className="flex w-20 px-2 py-1 justify-center items-center rounded-2xl bg-[#535353]  text-gray-300 font-montserrat text-sm font-normal font-400 leading-23">
  Beauty
</span>
          </div>
          
        </div>
      </div>
      <div className="flex  gap-4">
          <div className="divide-y w-[1210px] my-2 py-3 border-b border-[#9B9B9B] "></div>
          
      </div>
      <div className="flex item-center justify-center mt-16">
          <h1 className="text-white mx-2 font-vidaloka mr-[580px] text-4xl font-normal font-400 leading-5 uppercase">Blushlly</h1>
          <div className="flex gap-5">
            <span className="text-white font-montserrat font-normal font-500 text-base">Home</span>
            <span className="text-white font-montserrat font-normal font-500 text-base">Category</span>
            <span className="text-white font-montserrat font-normal font-500 text-base">Makeup</span>
            <span className="text-white font-montserrat font-normal font-500 text-base">Blog</span>
            <span className="text-white font-montserrat font-normal font-500 text-base">About</span>
            <span className="text-white font-montserrat font-normal font-500 text-base">Contact Us</span>
          </div>

          </div>
          <div className="flex  gap-4">
          <div className="divide-y w-[1210px] my-2 mt-8 py-3 border-b border-[#9B9B9B] "></div>
          
      </div>
          <div className=" my-9 flex gap-[620px] ">
           
<div className="flex gap-2">



<div className=" rounded-full border p-1">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_2_622)">
<path d="M15 1.66602H12.5C11.3949 1.66602 10.3351 2.105 9.5537 2.8864C8.7723 3.66781 8.33331 4.72761 8.33331 5.83268V8.33268H5.83331V11.666H8.33331V18.3327H11.6666V11.666H14.1666L15 8.33268H11.6666V5.83268C11.6666 5.61167 11.7544 5.39971 11.9107 5.24343C12.067 5.08715 12.279 4.99935 12.5 4.99935H15V1.66602Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_622">
<rect width="20" height="20" fill="white" transform="translate(0 -0.000488281)"/>
</clipPath>
</defs>
</svg>

</div>
<div className=" rounded-full border p-1">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_2_626)">
    <path d="M14.1667 1.66602H5.83332C3.53214 1.66602 1.66666 3.5315 1.66666 5.83268V14.166C1.66666 16.4672 3.53214 18.3327 5.83332 18.3327H14.1667C16.4678 18.3327 18.3333 16.4672 18.3333 14.166V5.83268C18.3333 3.5315 16.4678 1.66602 14.1667 1.66602Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3333 9.47427C13.4362 10.1678 13.3177 10.8761 12.9948 11.4985C12.6719 12.1208 12.161 12.6255 11.5347 12.9407C10.9084 13.2559 10.1987 13.3656 9.5065 13.2542C8.81428 13.1428 8.17481 12.816 7.67904 12.3202C7.18327 11.8245 6.85645 11.185 6.74507 10.4928C6.63368 9.80057 6.7434 9.09085 7.05862 8.46459C7.37383 7.83832 7.8785 7.32739 8.50083 7.00448C9.12316 6.68156 9.83147 6.5631 10.525 6.66594C11.2324 6.77085 11.8874 7.10049 12.3931 7.6062C12.8988 8.1119 13.2284 8.76684 13.3333 9.47427Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.5833 5.41602H14.5917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_2_626">
      <rect width="20" height="20" fill="white" transform="translate(0 -0.000488281)"/>
    </clipPath>
  </defs>
</svg>

</div>

<div className=" rounded-full border p-1">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_2_632)">
<path d="M7.47916 6.80435C8.34458 5.93935 9.12416 5.5781 10.2842 5.5781C11.4442 5.5781 14.0875 5.98643 13.7196 10.1968C13.3517 14.4068 10.7454 14.2706 10.2842 14.2706C8.56958 14.2706 7.20708 13.576 7.20708 11.8318C7.20708 9.43477 9.97291 9.31102 10.8992 9.31102C13.1608 9.31102 16.9075 9.99935 16.9075 13.7802C16.9075 18.3856 11.4992 18.9577 10.0954 18.9577C6.71625 18.9577 2.32916 17.241 2.32916 9.70643C2.32916 2.17185 7.99333 1.04102 10.2842 1.04102C12.575 1.04102 15.8108 1.37477 17.6708 6.38185" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_632">
<rect width="20" height="20" fill="white" transform="translate(0 -0.000488281)"/>
</clipPath>
</defs>
</svg>

</div>
<div className=" rounded-full border p-1">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M19.1667 2.49959C18.3687 3.06249 17.4851 3.49302 16.55 3.77459C16.0481 3.19752 15.3811 2.7885 14.6392 2.60286C13.8973 2.41722 13.1163 2.46392 12.4017 2.73664C11.6872 3.00935 11.0737 3.49493 10.6442 4.12769C10.2146 4.76045 9.98976 5.50987 10 6.27459V7.10792C8.53554 7.1459 7.08441 6.8211 5.77585 6.16246C4.4673 5.50382 3.34194 4.53179 2.50001 3.33292C2.50001 3.33292 -0.833323 10.8329 6.66668 14.1663C4.95045 15.3312 2.90597 15.9154 0.833344 15.8329C8.33334 19.9996 17.5 15.8329 17.5 6.24959C17.4992 6.01747 17.4769 5.78592 17.4333 5.55792C18.2838 4.71917 18.884 3.66018 19.1667 2.49959Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div className=" rounded-full border p-1">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.3438 8.65254C17.3438 10.5516 16.6845 12.2874 15.4886 13.542C14.372 14.7107 12.8582 15.3839 11.3352 15.3839C9.84311 15.3839 8.8467 14.8908 8.21163 14.3742L7.31202 18.2304C7.27759 18.3781 7.19463 18.5098 7.07662 18.604C6.95861 18.6983 6.81247 18.7496 6.66193 18.7495C6.61025 18.7495 6.55874 18.7435 6.50838 18.7318C6.4227 18.712 6.34174 18.6753 6.27016 18.6239C6.19858 18.5724 6.13778 18.5072 6.09126 18.432C6.04474 18.3568 6.0134 18.2731 5.99906 18.1856C5.98471 18.0982 5.98764 18.0087 6.00767 17.9224L8.67813 6.47916C8.71863 6.30532 8.82596 6.15483 8.97652 6.06078C9.12707 5.96673 9.30852 5.93684 9.48093 5.97768C9.65334 6.01852 9.80261 6.12674 9.89588 6.27854C9.98916 6.43034 10.0188 6.61328 9.9783 6.78712L8.56797 12.8285C8.83168 13.1962 9.60778 14.0376 11.3352 14.0376C13.6327 14.0376 16.0085 12.0232 16.0085 8.65254C16.0082 7.7235 15.7959 6.80699 15.3881 5.97388C14.9804 5.14077 14.388 4.41338 13.6569 3.84795C12.9258 3.28252 12.0755 2.89421 11.1718 2.71303C10.268 2.53185 9.33509 2.56267 8.44506 2.80309C7.55502 3.04352 6.73176 3.48711 6.03892 4.09957C5.34607 4.71203 4.80222 5.47695 4.4494 6.33519C4.09659 7.19342 3.94426 8.12197 4.00421 9.04904C4.06415 9.9761 4.33477 10.8769 4.79512 11.6816C4.87816 11.8358 4.89821 12.0166 4.85099 12.1855C4.80378 12.3544 4.69303 12.498 4.54234 12.5857C4.39166 12.6735 4.21294 12.6985 4.04427 12.6553C3.87559 12.6122 3.73029 12.5043 3.63931 12.3548C3.07637 11.3712 2.74537 10.2702 2.67189 9.13698C2.59842 8.00377 2.78445 6.86872 3.21559 5.81959C3.64674 4.77046 4.31144 3.83539 5.1583 3.08668C6.00515 2.33797 7.01147 1.79569 8.0994 1.50178C9.18734 1.20788 10.3278 1.17023 11.4324 1.39173C12.5371 1.61324 13.5765 2.08797 14.4701 2.77922C15.3637 3.47046 16.0877 4.35969 16.586 5.37812C17.0842 6.39656 17.3435 7.51692 17.3438 8.65254Z" fill="white"/>
</svg>

</div>
<div className=" rounded-full border p-1">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.3333 6.66602C14.6594 6.66602 15.9312 7.1928 16.8689 8.13048C17.8066 9.06816 18.3333 10.3399 18.3333 11.666V17.4993H15V11.666C15 11.224 14.8244 10.8001 14.5119 10.4875C14.1993 10.1749 13.7754 9.99935 13.3333 9.99935C12.8913 9.99935 12.4674 10.1749 12.1548 10.4875C11.8423 10.8001 11.6667 11.224 11.6667 11.666V17.4993H8.33334V11.666C8.33334 10.3399 8.86013 9.06816 9.79781 8.13048C10.7355 7.1928 12.0073 6.66602 13.3333 6.66602Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.99999 7.49951H1.66666V17.4995H4.99999V7.49951Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33332 4.99935C4.2538 4.99935 4.99999 4.25316 4.99999 3.33268C4.99999 2.41221 4.2538 1.66602 3.33332 1.66602C2.41285 1.66602 1.66666 2.41221 1.66666 3.33268C1.66666 4.25316 2.41285 4.99935 3.33332 4.99935Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>


</div>


<div>
<span className="text-white text-right font-montserrat text-base font-normal font-400 leading-24">&copy; Copyright 2023 PostX. Designed By WPXPO</span>

</div>


            
          </div>



    </div>
  );
};

export default Footer;
