import React from 'react'
import FooterLogo from "@/assets/footerLogo.png"
import Image from 'next/image'
import { footerContent } from '@/footer-content'
import FooterItem from '@/components/footer-items'
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
    return (
        <div className='lg:px-28  lg:py-10 bg-[#123557]'>
            <div className=' border-t-[#FFFFFF33]/20 border-b-[#FFFFFF33]/20 border-b border-t'>
                <div className=' flex flex-col lg:flex-row lg:justify-between lg:py-4 lg:pl-8 '>
                    <div className='flex flex-col justify-center lg:flex-row lg:justify-between lg:gap-20 p-8'>
                        <div className='lg:pt-12 flex flex-col gap-2 justify-center '><Image src={FooterLogo} alt="Logo" className="w-200 h-200" />
                            <span className='pl-3 pb-2 text-base text-white/20 font-poppins font-light'>© R Singhania
                            </span>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:gap-20 mt-4' >

                            {
                                footerContent.map((item) => <FooterItem title={item.title} content={item.content} key={item.title} />)
                            }

                        </div>
                    </div>
                    <div className='flex gap-6 lg:pt-14 px-6'>
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