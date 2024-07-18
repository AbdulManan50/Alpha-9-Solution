import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isHovered ? 'bg-black' : 'bg-transparent'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-[95%] h-[90px] mx-auto py-2 flex justify-between items-center">
          <div>
            <img className="w-[70px]" src="./public/image/asset 0.png" alt="" />
          </div>
          <div className="flex justify-center items-center gap-3 text-white">
            <GiHamburgerMenu />
            <h1 className="text-sm">Meanu</h1>
          </div>
        </div>
      </div>
    </>
  );
}
