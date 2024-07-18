import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-[#004375]">
        <div className="w-[1100px] mx-auto py-5">
          <img
            className="w-[70px]"
            src="./public/image/asset 38.png"
            alt=""
          />
          <div className="flex gap-5 py-5">
            <div className="w-[25%]">
              <p className="text-white font-roboto text-[15px]">
                Feel Free to contact us for a free consultation on how to
                improve your business <br /> At Alpha 9 we believe that
                collaboration and team work is the key goal to success. Our
                approach to our customers is what they love about us
              </p>
            </div>
            <div className="w-[33%]">
              <h1 className="font-semibold text-white font-roboto">
                Contact Info
              </h1>
              <ul className="text-white font-roboto text-sm flex flex-col gap-3 pt-3">
                <li>Home</li>
                <li>about us </li>
                <li>contact us </li>
                <li>blog</li>
                <li>policy</li>
              </ul>
            </div>
            <div className="w-[33%]">
              <h1 className="font-semibold text-white font-roboto">
                Contact Info
              </h1>
              <ul className="text-white font-roboto text-sm flex flex-col gap-3 pt-3">
                <li>Home</li>
                <li>about us </li>
                <li>contact us </li>
                <li>blog</li>
                <li>policy</li>
              </ul>
            </div>
          </div>
          <div className="bg-white h-[1px]  "></div>
          <div className="flex justify-between text-white font-roboto text-sm pt-2">
            <p>@2023-2024, Alpha9 Made With Passion by themes.</p>
            <p>All right reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
