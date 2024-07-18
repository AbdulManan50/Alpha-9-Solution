import React from "react";

export default function Icon(props) {
  return (
    <>
      <div className="w-[30%] relative flex justify-center items-center group">
        <img
          className="w-[30%] mx-auto absolute transition-opacity duration-300 group-hover:opacity-0"
          src={props.iconimg}
          alt=""
        />
        <h1 className="text-[#f4a13c] absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 uppercase text-sm">
          {props.icontext}
        </h1>
      </div>
    </>
  );
}
