'use client'
import { PrimaryLightBtn } from "../shared/Button";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <section
      className="bg-cover bg-center  py-14
                 bg-[url('https://i.postimg.cc/q7PJRX3L/hero.png')]"
    >
      <div className="w-[90%] max-w-[1300px] mx-auto flex flex-col md:flex-row gap-8 items-center justify-between text-white">
         <motion.div
      initial={{ opacity: 0, y: 80 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }} 
      viewport={{ once: true }} // Animate only once
      className="max-w-[503px] text-center md:text-left"
    >
      <h2 className="text-[3.1rem] font-semibold mb-10">
        Your Partner in Tax and Accountancy
      </h2>
      <p className="font-inter text-lg mb-11">
        Serving 10,000+ Clients Across 50+ Nationalities with Proven Tax & Business Advisory.
      </p>
      <PrimaryLightBtn text={"Book Consultation"} />
    </motion.div>
        <motion.div
          className="p-6 box-border border border-white/30 rounded-[10px] backdrop-blur-[10px] bg-[rgba(42,76,74,0.3)] "
           initial={{ opacity: 0, y: -60 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
        >
          <h2 className="text-white text-xl font-normal mb-4">
            Request a call Back
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full  input-style"
              required
              />

            {/* Email + Telephone */}
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-1/2  input-style"
                required
              />
              <input
                type="tel"
                placeholder="Telephone"
                className="w-1/2 input-style"
                required
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full input-style"
              required
            />

            {/* Message */}
            <textarea
              placeholder="Your message (Optional)"
              rows="3"
              className="w-full input-style resize-none"
              readOnly
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="relative inline-flex items-center px-20 py-3 overflow-hidden  font-semibold font-inter
             text-black bg-white  rounded-full 
             group transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/* Hover fill effect (primary color) */}
              <span
                className="absolute left-0 block w-full h-0 transition-all bg-secondary opacity-100 
               group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"
              ></span>

              {/* Button text */}
              <span className="relative group-hover:text-white">Submit</span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
