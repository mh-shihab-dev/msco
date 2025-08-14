"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

export default function Industries() {
  const slides = [
    { title: "Barristers", subtitle: "& Solicitors" },
    { title: "Charities", subtitle: "& Not-for-Profits" },
    { title: "Construction", subtitle: "& Engineering" },
    { title: "Education", subtitle: "& Training" },
    { title: "Finance", subtitle: "& Accounting" },
  ];

  // Animation variant
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="section">
      <div className="mb-11 text-center">
        <p className="section-subtitle">Key Sectors</p>
        <h2 className="section-title">Industries We Serve</h2>
      </div>

      <div className="w-full flex flex-col items-center">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="rounded-xl border border-gray-200 border-b-8 border-b-[#b68c5a] shadow-lg bg-white py-10 relative overflow-hidden group transition-colors duration-500"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} 
              >
                {/* Background hover overlay */}
                <div className="absolute inset-0 bg-[#011c1a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>

                <h2 className="relative z-10 text-[28px] font-bold text-[#011c1a] text-center group-hover:text-white transition-colors duration-500">
                  {item.title} <br />
                  {item.subtitle}
                </h2>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="flex gap-6 mt-8">
          <button className="custom-prev relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer">
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
            <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
          <button className="custom-next relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer">
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
            <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
