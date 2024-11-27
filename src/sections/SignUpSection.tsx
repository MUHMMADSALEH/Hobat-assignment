import React from 'react'
import RightArrow from "@/assets/rightArrow.svg"
import { palces } from '@/places'
import Card from '@/components/Card'

const SignUp = () => {
    return (
        <div className='w-full md:p-10 overflow-hidden'>
            <div className='grid gap-10  grid-cols-1 lg:grid-cols-2 sm:gap-0 md:gap-8'>
                <div className='px-10 pt-5 sm:py-20 '>
                    <div className='flex flex-col justify-start gap-10'>
                        <h1 className='text-4xl font-poppins font-bold'>Ready to dive into HABOT?</h1>
                        <p className='text-base text-black font-poppins font-light'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
                       
                        <div className="w-[317px] h-[54px] rounded-md border border-[#00732F] flex items-center justify-center bg-[#00732F] hover:bg-[#00732F] transition duration-300">
                            <button className="text-white font-poppins font-bold text-lg focus:outline-none">
                                Sign up Today !
                            </button>
                            <RightArrow className="ml-2 text-white" /> {/* Adjust margin as necessary */}
                        </div>
                        

                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4 md:gap-x-24 sm:min-w-full sm:mt-12  sm:py-5 place-items-center mx-auto'>
                   {
                    palces.map((place)=><Card key={place} place={place}/>)
                   }
                </div>

            </div>
            
        </div>
    )
}

export default SignUp