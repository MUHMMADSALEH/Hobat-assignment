import React from 'react'

import Image from 'next/image';


type GuideCardProps = {
    icon: string; 
    label: string;
    index: number;
  };
const GuideCard: React.FC<GuideCardProps>= ({icon:Icon,label,index}) => {
    
  return (
    <div className='flex flex-col gap-8 justify-center items-center p-8 rounded-xl' style={{backgroundColor:index%2===0? "[#E8FBFF]":"#FFFFFF"}}>
    
       
       <div className='w-[74.35px] h-[74.35px] flex justify-center items-center '>
        <Image src={Icon} alt="Role Icon" className='w-full h-full object-cover'/>
      
       </div>
       
        
        <div className='max-w-[400px] '>
        <p className='text-center text-lg font-poppins font-medium max-w-[306px]'>{label}</p>
        </div>
    </div>
  )
}

export default GuideCard