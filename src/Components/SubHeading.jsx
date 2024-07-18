import React from 'react'

export default function SubHeading(props) {
  return (
    <>
    <div>
      <h1 className='font-poppins text-xs tracking-[5px] text-[#F4A13C]'>
        {props.subline}
      </h1>
      <h1 className='font-poppins text-3xl font-bold tracking-[5px] text-[#F4A13C]'>
        {props.subhead}
      </h1>
    </div>
    </>
  )
}
