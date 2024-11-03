import React from 'react'

const FooterItem = ({title,content}:{title:string,content:Array<string>}) => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='font-[Arial] text-base text-white font-bold'>{title}</h1>
        <ul className='flex flex-col gap-2  font-bold text-base' >
        {
            content.map((item)=><span className='text-base  font-light text-white'>{item}</span>)
        }
        </ul>
    </div>
  )
}

export default FooterItem