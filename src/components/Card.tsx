import React from 'react'

const Card = ({place}) => {
  return (
    <div className='w-[260px] h-[65px] rounded-md border border-[#E7760D] flex justify-center items-center p-6'><span>{place}</span></div>
  )
}

export default Card