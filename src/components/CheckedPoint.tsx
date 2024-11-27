import React from 'react'
import CheckedIcon from "@/assets/checked.svg"

const CheckedPoint = ({point}:{point:string | undefined}) => {
    return (
        
          
                <li className='flex gap-3'>
                    <CheckedIcon className="mt-1 min-w-5 min-h-4"/><span className='lg:text-lg text-sm text-white font-poppins font-medium'>{point}</span>
                </li>
      
           
    )
}

export default CheckedPoint