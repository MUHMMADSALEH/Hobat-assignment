import React from 'react'

import Image from 'next/image';

const idx=[0,2,4]
type GuideCardProps = {
    icon: React.ComponentType; // Specify that icon is a component type
    label: string;
    index: number;
  };
const GuideCard: React.FC<GuideCardProps>= ({icon:Icon,label,index}) => {
    
  return (
    <div className='w-[400px] h-[254px ] flex flex-col gap-8 justify-center items-center' style={{backgroundColor:idx.some((i)=>
    {
        
        return i===index})?"[#E8FBFF]":"#FFFFFF"}}>
       <div className='w-[74.35px] h-[74.35px] flex justify-center items-center '>
        <Image src={Icon} alt="Role Icon" className='w-full h-full object-cover'/>
      
       </div>
       
        
        <div className='w-[206px] h-[53px] inline-flex'>
        <p className='text-center text-lg font-poppins font-medium'>{label}</p>
        </div>
    </div>
  )
}

export default GuideCard