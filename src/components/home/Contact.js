"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/Data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Contact = () => {
  return (
    <section className="section mb-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#264646] py-10 px-6 sm:px-8 lg:px-12 rounded-2xl shadow-lg w-full"
        >
          <h3 className="text-[rgba(182,140,90,1)] text-lg sm:text-xl text-center font-normal mb-4">
            Have Any Questions?
          </h3>
          <h2 className="text-white text-center mb-6 text-xl sm:text-2xl font-normal">
            Get in Touch with Us
          </h2>

          <form className="space-y-4 font-inter">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
              required
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-1/2 p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
                required
              />
              <input
                type="tel"
                placeholder="Telephone"
                className="w-full sm:w-1/2 p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] outline-none"
              required
            />

            <textarea
              placeholder="Your message (Optional)"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-50 focus:ring-2 focus:ring-[#c39b6a] resize-none outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 px-10 relative inline-flex items-center justify-center overflow-hidden font-medium font-inter 
             text-white bg-[#b68c5a] rounded-full 
             group transition-all duration-300 ease-in-out cursor-pointer"
            >
              <span
                className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 
                   group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"
              ></span>
              <span className="relative group-hover:text-[#b68c5a]">
                Submit
              </span>
            </button>
          </form>
        </motion.div>

        {/* Right: Contact Details & Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#264646] rounded-full flex items-center justify-center flex-shrink-0 group">
                  <Image src={item.icon} width={18} alt={item.title} className="transition-transform duration-500 group-hover:scale-x-[-1]" />
                </div>
                <div>
                  <h4 className="text-[#b68c5a] text-lg sm:text-xl font-semibold">
                    {item.title}
                  </h4>
                  <p className="max-w-[240px] text-[#868686] text-sm sm:text-base font-inter font-normal">
                    {item.text1}
                  </p>
                  {item.text2 && (
                    <p className="max-w-[240px] text-[#868686] text-sm sm:text-base font-inter font-normal">
                      {item.text2}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4 }}
            className="relative w-full"
          >
            <Image
              src={assets.contactBg}
              alt="bg-img"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute -right-4 bottom-0 max-w-[42%] sm:max-w-[50%] md:max-w-[55%]">
              <Image
                src={assets.contactPerson}
                alt="person-img"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
