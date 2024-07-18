import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Counter(props) {
  const [counterState, setCounterstate] = useState(false);
  return (
    <>
      <div>
        <ScrollTrigger
          onEnter={() => setCounterstate(true)}
          onExit={() => setCounterstate(false)}
        >
          <div className="text-center py-5 px-10 border-white border-[1px]">
            <h1 className="text-white text-8xl font-poppins font-semibold">
              {counterState && <CountUp start={0} end={props.number} duration={5} />}+
            </h1>
            <p className="text-[#f19e3c] font-light tracking-widest text-sm font-poppins">
              {props.text}
            </p>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}
