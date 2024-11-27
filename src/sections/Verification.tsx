import React from 'react'

const Verification = () => {
  return (
    <div className='w-full bg-[#E8FBFF] p-4 lg:p-24 flex justify-center items-center mb-24'>
        <div className='flex justify-center lg:justify-between w-full'>
            <div className='relative'>
                <p className='hidden lg:inline text-4xl font-semibold '>Let Suppliers Find You</p>
            <p className='hidden lg:inline w-[154px] h-[4px] bg-[#EB7150] absolute lg:right-0 lg:mt-10'></p>
            </div>
            <div className='text-lg text-white font-bold font-poppins flex justify-center items-center bg-[#EB7150] px-6 py-3 rounded-md'><button>Get Verified</button></div>
        </div>
    </div>
  )
}

export default Verification