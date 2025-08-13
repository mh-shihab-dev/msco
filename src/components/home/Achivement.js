"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";




const Achivement = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div className="mt-22 w-[76%] max-w-[1100px] mx-auto  bg-[#b68c5a] rounded-[10px] text-white font-inter">
      <div className="py-8 px-12 flex flex-col items-center sm:grid  sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-10">
        <div
          ref={ref}
          className="flex items-center gap-[18px] text-xl font-semibold"
        >
          <Image src={assets.established} alt=""/>
          <div>
            {inView && <CountUp end={1987} duration={3} />}
            <p className="text-base">Established</p>
          </div>
        </div>
        <div className="w-0.5 h-14 bg-[#ffffff59] hidden lg:block"></div>
        <div
          ref={ref}
          className="flex items-center gap-[18px] text-xl font-semibold"
        >
          <Image src={assets.excellence} alt="" />
          <div>
            {inView && <CountUp end={38} duration={3} />}+ Years
            <p className="text-base">of Excellence</p>
          </div>
        </div>
        <div className="w-0.5 h-14 bg-[#ffffff59] hidden lg:block"></div>
        <div
          ref={ref}
          className="flex items-center gap-[18px] text-xl font-semibold"
        >
          <Image src={assets.clients} alt="" />
          <div>
            {inView && <CountUp end={10000} duration={3} />}+
            <p className="text-base">Clients Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivement;
