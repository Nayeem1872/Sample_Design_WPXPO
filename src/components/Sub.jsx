import React from 'react'

const Sub = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 w-auto h-[379px] mt-[100px] bg-[#DDD]'>
        <h1 className="text-black text-center font-vidaloka text-3xl font-normal font-500 leading-40">
  Subscribe For Best <br/> Beauty Tips
</h1>

                <div class="relative"> <input
  type="text"
  className="bg-white h-14 w-[730px] px-9 pr-20 rounded-3xl focus:outline-none placeholder-black placeholder-opacity-50"
  name=""
  placeholder="Enter Your Email Address"
  style={{
    color: '	#000000',
    fontFamily: 'Vidaloka',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
  }}
/>
                     <button class="h-10 rounded-3xl bg-black font-vidaloka absolute top-2 text-base right-2 text-center  px-5 text-white hover:bg-gray-900 ">
                        
                        Subscribe Now</button> </div>
                        <div class="flex mt-3 items-center">
    <input type="radio" id="link-checkbox" class="mr-2 hidden"/>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19.4999 2.99951H4.49988C4.10205 2.99951 3.72052 3.15755 3.43922 3.43885C3.15791 3.72016 2.99988 4.10169 2.99988 4.49951V19.4995C2.99988 19.8973 3.15791 20.2789 3.43922 20.5602C3.72052 20.8415 4.10205 20.9995 4.49988 20.9995H19.4999C19.8977 20.9995 20.2792 20.8415 20.5605 20.5602C20.8418 20.2789 20.9999 19.8973 20.9999 19.4995V4.49951C20.9999 4.10169 20.8418 3.72016 20.5605 3.43885C20.2792 3.15755 19.8977 2.99951 19.4999 2.99951ZM4.49988 19.4995V4.49951H19.4999V19.4995H4.49988Z" fill="#1D1A1A"/>
    </svg>
    <label htmlFor="link-checkbox" class="text-black ml-2 font-vidaloka text-base font-normal font-400 leading-6">
        I agree that my submitted data is being collected and stored.
    </label>
</div>
            


    </div>
  )
}

export default Sub