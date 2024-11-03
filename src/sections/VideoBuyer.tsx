import React from 'react'
import VideoBuyerImg from "@/assets/buyervideoThumbnail.png"
import VideoIcon from "@/assets/videoIcon.svg"
import CheckedPoint from '@/components/CheckedPoint'
import { checkedPoints } from '@/checkedPoints'

const VideoBuyer = () => {
  return (
    <div className='w-full p-20 overflow-hidden '>
      <div className=' '>
            <div className='grid grid-cols-2 gap-44  py-28 px-14 w-[1316px] h-[623px] bg-[#072F57] rounded-md'>
                <div className='  w-[640px] h-[350px]  rounded-md flex justify-center items-center relative'>
                   
                      <img src={VideoBuyerImg.src } alt=" VideoBuyerImg"className='w-full h-full' />
                      <VideoIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    
                </div>
                
                <div className='p-20 '>
                  <div className='flex gap-20 '>
<div className='w-52 h-8 text-[#EB7150] font-poppins font-bold text-3xl flex justify-center items-center border-b-4 rounded-[1px] border-[#EB7150] pb-8'>
  <span>Buyer</span>
</div><div className='w-52 h-12 text-white font-poppins font-bold text-3xl flex justify-center items-center   '>
  <span>Supplier</span>
</div>
                  </div>
                  <div className='w-[461px] h-40 mt-4'>
                   <ul className='w-auto h-auto flex flex-col gap-3'>
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