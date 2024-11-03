import React from 'react'
import CheckedIcon from "@/assets/checked.svg"

const CheckedPoint = ({point}:{point:string | undefined}) => {
    return (
        
          
                <li className='flex gap-3 w-full'>
                    <CheckedIcon className="mt-1"/><span className='text-lg text-white font-poppins font-medium'>{point}</span>
                </li>
      
           
    )
}

export default CheckedPoint