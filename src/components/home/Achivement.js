"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Achivement = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  // Fade-up animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <div
      className="mt-22 w-[76%] max-w-[1100px] mx-auto bg-secondary rounded-[10px] text-white font-inter"
    >
      <div className="py-8 px-12 flex flex-col items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-10">
        
        {/* Item 1 */}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="flex items-center gap-[18px] text-xl font-semibold"
        >
          <Image src={assets.established} alt="" />
          <div>
            {inView && <CountUp end={1987} duration={3} />}
            <p className="text-base">Established</p>
          </div>
        </motion.div>

        <div className="w-0.5 h-14 bg-[#ffffff59] hidden lg:block"></div>

        {/* Item 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="flex items-center gap-[18px] text-xl font-semibold"
        >
          <Image src={assets.excellence} alt="" />
          <div>
            {inView && <CountUp end={38} duration={3} />}+ Years
            <p className="text-base">of Excellence</p>
          </div>
        </motion.div>

        <div className="w-0.5 h-14 bg-[#ffffff59] hidden lg:block"></div>

        {/* Item 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="flex items-center gap-[18px] text-xl font-semibold"
        >
          <Image src={assets.clients} alt="" />
          <div>
            {inView && <CountUp end={10000} duration={3} />}+
            <p className="text-base">Clients Served</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achivement;
