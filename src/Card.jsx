import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Card(props) {
  return (
    <>
      <div className="w-[30%] bg-[#141313] hover:bg-[#F4A13C] p-10 rounded-3xl group flex flex-col gap-2">
        <h1 className="font-poppins font-black text-[#F4A13C] group-hover:text-black text-4xl">
          {props.heading}
        </h1>
        <p className="font-roboto text-[15px] leading-7 text-[#b7b7b7] group-hover:text-white">
            {props.paragraph}
        </p>
        <img src={props.img1} alt="" />
        <span className="text-xl opacity-0 group-hover:opacity-100 transition ease-linear"><FaArrowRightLong /></span>
      </div>
    </>
  );
}
