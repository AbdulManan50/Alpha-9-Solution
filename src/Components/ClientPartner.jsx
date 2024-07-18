import React from 'react'

export default function ClientPartner(props) {
  return (
    <>
    <div className='w-[20%] border-r-[1px] border-white flex flex-col gap-5 items-center p-7 group hover:bg-white transition-all duration-500'>
        <h1 className='text-8xl font-bold text-transparent heading group-hover:text-[#F4A13C] font-roboto'>{props.cliennumber}</h1>
        <h1 className='text-3xl font-bold text-white font-poppins   group-hover:text-black'>{props.clientheading}</h1>
        <p className='text-center text-xl text-white group-hover:text-black font-poppins'>{props.clientparagraph}</p>
    </div>
    </>
  )
}
 