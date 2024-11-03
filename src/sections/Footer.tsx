import React from 'react'
import FooterLogo from "@/assets/footerLogo.png"
import Image from 'next/image'
import { footerContent } from '@/footer-content'
import FooterItem from '@/components/footer-items'
import { Facebook, Twitter ,Instagram,Linkedin} from "lucide-react";
const Footer = () => {
  return (
    <div className='px-28  py-10 bg-[#123557]'>
        <div className='w-[1200px]   h-[155px] border-t-[#FFFFFF33]/20 border-b-[#FFFFFF33]/20 border-b border-t'>
<div className=' flex justify-between pt-4 pb-4 pl-8'>
    <div className='flex justify-between gap-20 '>
    <div className='pt-12 flex flex-col gap-2 justify-center '><Image src={FooterLogo} alt="Logo" className="w-200 h-200"/>
    <span className='pl-3 pb-2 text-base text-white/20 font-poppins font-light'>© R Singhania
    </span>
    </div>
    <div className='grid grid-cols-3 gap-20' >
   
        {
footerContent.map((item)=><FooterItem title={item.title} content={item.content}/>)
        }
      
    </div>
    </div>
    <div className='flex gap-6 pt-14'>
        <div className='w-10 h-10 rounded-full flex justify-center items-center border border-white/20'>

    <Linkedin className="text-white" size={24} />
        </div>
    <div className='w-10 h-10 rounded-full flex justify-center items-center border border-white/20'>

    <Twitter className="text-white" size={24} />
        </div> <div className='w-10 h-10 rounded-full flex justify-center items-center border border-white/20'>

        <Facebook className="text-white" size={24} />
        </div> <div className='w-10 h-10 rounded-full flex justify-center items-center border border-white/20'>

        <Instagram className="text-white" size={24} />
        </div>
        
   
    
    </div>

</div>
        </div>
    </div>
  )
}

export default Footer