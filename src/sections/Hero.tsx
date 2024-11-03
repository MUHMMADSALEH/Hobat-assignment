import React from 'react';
import bgImage from "@/assets/bg-image.png"; // Ensure the path is correct
import LocationIcon from "@/assets/location.svg"
import SuitcaseIcon from "@/assets/suitcase.svg"
function Hero() {
  return (
    <div className="relative  w-full h-[609px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover', // Ensures the image covers the full area
          backgroundPosition: 'center', // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents repeating if the image is smaller than the container
          filter: 'brightness(1)', // Optional: Adjust brightness of the background image
          objectPosition: 'center top', // Positions image to start at the top
          top: '-2px',
        }}
      ></div>

      <div className="absolute inset-0 z-10 text-white flex  justify-center h-screen ">
        <div className='flex  justify-center mt-36'>

          <div className='flex flex-col gap-8'>
            <div className='text-center'>
              <h1 className='text-6xl font-poppins font-extrabold'>Are You a Supplier?</h1>
              <span className='text-6xl font-poppins font-normal'>Explore Matching Opportunities.</span>
            </div>
            <div className='flex gap-6 items-center'>
              <div className='relative p-4 bg-white rounded-md border border-[#D1D5DB] w-[400px] h-[56px]'>
                <SuitcaseIcon className="absolute inset-y-0 left-8 mt-4 " />
                <input type="text" className='outline-none ring-0 focus:outline-none focus:ring-0 text-black font-poppins font-light  w-full pl-14 h-full' placeholder='Search your required service here' />
              </div>
              <div className='relative p-4 bg-white rounded-md border border-[#D1D5DB] w-[400px] h-[56px]'>

                <LocationIcon className="absolute inset-y-0 left-8 mt-4 " />
                <input type="text" className='outline-none ring-0 focus:outline-none focus:ring-0 text-black font-poppins font-light  w-full pl-14 h-full' placeholder='Search your desired location here' />
              </div>

              <div className='w-32 h-14 bg-[#00732F] p-6 flex justify-center items-center rounded-md border border-[#00732F]'>
                <button>Search</button>
              </div>
            </div>
            <div className="text-center">
              <span className='text-lg font-poppins font-bold'>Are you a buyer?</span><span className='text-lg font-poppins font-normal pl-3 underline'>Click here if you are looking to post a requirements</span>
            </div>
          </div>

        </div>

        </div>
      <div>

      </div>

    </div>
  );
}

export default Hero;
