import React from 'react'
import VideoBuyerImg from "@/assets/buyervideoThumbnail.png"
import VideoIcon from "@/assets/videoIcon.svg"
import CheckedPoint from '@/components/CheckedPoint'
import { checkedPoints } from '@/checkedPoints'

const VideoBuyer = () => {
  return (
    <div className='w-full  p-10 sm:p-20 overflow-hidden '>
      <div className=' '>
            <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 lg:gap-44 py-8 px-4 lg:py-28 lg:px-14 w-full  bg-[#072F57] rounded-md'>
                <div className=' w-full    rounded-md flex justify-center items-center object-contain relative'>
                   
                      <img src={VideoBuyerImg.src } alt=" VideoBuyerImg"className='w-full h-full' />
                      <VideoIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    
                </div>
                
                <div className=' lg:p-20 '>
                  <div className='flex gap-20 '>
<div className='w-full  text-[#EB7150] font-poppins font-bold text-lg lg:text-3xl flex justify-center items-center border-b-4 rounded-[1px] border-[#EB7150] pb-2'>
  <span>Buyer</span>
</div><div className='w-full  text-white font-poppins font-bold text-lg lg:text-3xl flex justify-center items-center   '>
  <span>Supplier</span>
</div>
                  </div>
                  <div className='w-full  mt-4'>
                   <ul className='flex flex-col gap-3'>
                  {
                    checkedPoints.map((point)=> <CheckedPoint key={point} point={point}/>)
                  }
                   </ul>
                  </div>
                  <div>

                  </div>
                </div>

            </div>

            </div>
            
        </div>
  )
}

export default VideoBuyer