import GuideCard from '@/components/GuideCard'
import { guideCardContent } from '@/guideCardContent'
import React from 'react'

const Guide = () => {
    return (
        <div className='flex flex-col items-center gap-12 pb-20'>
            <div className='flex flex-col items-center gap-4 '>
                <h1 className='text-4xl text-[#222222] font-poppins font-bold '>How it works?</h1>
                <p className='text-base text-center lg:text-lg font-poppins font-normal  lg:w-[839px] sm:w-[400px]'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            </div>
                <div className='flex justify-center bg-[#E8FBFF]       '>


                    <div className='grid grid-cols-1 gap-4  lg:grid-cols-3 max-w-6xl'>
                        {
                            guideCardContent.map((item, index) => <GuideCard key={index} icon={item.icon} label={item.label} index={index} />)
                        }
                    </div>
                </div>
        </div>
    )
}

export default Guide