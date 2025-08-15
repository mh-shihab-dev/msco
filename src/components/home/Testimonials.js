"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialS() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "William Hazelip",
      role: "Barristers",
      img: assets.clinet1,
      text: "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I am so grateful for their help and would recommend them to anyone.",
    },
    {
      name: "Monica D’suza",
      role: "Solicitors",
      img: assets.clinet2,
      text: "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I am so grateful for their help and would recommend them to anyone.",
    },
    {
      name: "Jasica Doe",
      role: "Law Firm",
      img: assets.client3,
      text: "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I am so grateful for their help and would recommend them to anyone.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 800,
    cssEase: "ease-in-out",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    rtl: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 750, settings: { slidesToShow: 1 } },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="section mx-auto py-10 relative">
      {/* Heading */}
      <motion.div
        className="mb-11 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="section-subtitle">Client Testimonials</p>
        <h2 className="section-title">What Our Clients Say</h2>
      </motion.div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((item, i) => (
          <div key={i} className="px-3">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 py-10 border-b-[5.47px] border-b-[rgba(182,140,90,1)]
              rounded-[23.65px_49.26px_23.65px_23.65px]
              shadow-[0px_3.94px_19.70px_0px_rgba(0,0,0,0.06)]
              bg-white relative overflow-hidden group"
              // whileHover={{ scale: 1.03 }}
              // transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              {/* Quote Icon with Custom Corner Shape */}
              <div className="absolute top-0 right-0 z-10">
                <div
                  className="w-[75px] h-[75px] flex items-center justify-center 
                  rounded-bl-[35px] relative
                  transition-colors duration-700 ease-in-out
                  group-hover:bg-[#011c1a]"
                >
                  {/* Dark Icon - default */}
                  <Image
                    src={assets.quoteDark}
                    alt="quote dark"
                    className="w-6 h-6 absolute transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                  />

                  {/* Light Icon - hover */}
                  <Image
                    src={assets.quoteLight}
                    alt="quote light"
                    className="w-6 h-6 absolute transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[#011c1a] text-[21px] font-semibold transition-colors duration-500 ease-in-out">
                    {item.name}
                  </h3>
                  <p className="text-[#868686] font-base font-inter transition-colors duration-500 ease-in-out">
                    {item.role}
                  </p>
                  <div className="flex text-yellow-500 text-base">★★★★★</div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-base text-[#868686] font-normal font-inter leading-[24px] relative z-10 transition-colors duration-500 ease-in-out">
                “{item.text}”
              </p>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Navigation buttons */}
      <div className="flex gap-6 mt-8 justify-center">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
          <svg
            className="w-5 h-5 z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer"
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
          <svg
            className="w-5 h-5 z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
