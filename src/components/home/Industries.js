// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { motion } from "framer-motion";

// export default function Industries() {
//   const slides = [
//     { title: "Barristers", subtitle: "& Solicitors" },
//     { title: "Charities", subtitle: "& Not-for-Profits" },
//     { title: "Construction", subtitle: "& Engineering" },
//     { title: "Education", subtitle: "& Training" },
//     { title: "Finance", subtitle: "& Accounting" },
//   ];

//   // Animation variant
//   const cardVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   return (
//     <section className="section">
//       <div className="mb-11 text-center">
//         <p className="section-subtitle">Key Sectors</p>
//         <h2 className="section-title">Industries We Serve</h2>
//       </div>

//       <div className="w-full flex flex-col items-center">
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             prevEl: ".custom-prev",
//             nextEl: ".custom-next",
//           }}
//           spaceBetween={20}
//           slidesPerView={3}
//           loop={true}
//             autoplay={{
//         delay: 3000,      
//         disableOnInteraction: false, 
//       }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="w-full"
//         >
//           {slides.map((item, idx) => (
//             <SwiperSlide key={idx}>
//               <motion.div
//                 className=" border border-gray-200  py-10 group transition-colors duration-500 box-border
//   border-b-[5.4734735489px] border-b-[rgba(182,140,90,1)]
//   rounded-[10px]
//   shadow-[0px_3.9408977032px_19.7044887543px_0px_rgba(0,0,0,0.06)]
//   bg-[rgba(255,255,255,1)] relative overflow-hidden group"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 10 }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.3 }} 
//               >
//                 {/* Background hover overlay */}
//                 <div className="absolute inset-0 bg-[#011c1a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>

//                 <h2 className="relative z-10 text-[28px] font-bold text-[#011c1a] text-center group-hover:text-white transition-colors duration-500">
//                   {item.title} <br />
//                   {item.subtitle}
//                 </h2>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation buttons */}
//         <div className="flex gap-6 mt-8">
//           <button className="custom-prev relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer">
//             <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
//             <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
//             </svg>
//           </button>
//           <button className="custom-next relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer">
//             <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
//             <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Industries() {
  const sliderRef = useRef(null);

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

  // react-slick settings (no arrows inside slider)
  const settings = {
    dots: false,
    arrows: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="section">
      <div className="mb-11 text-center">
        <p className="section-subtitle">Key Sectors</p>
        <h2 className="section-title">Industries We Serve</h2>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="w-full">
          {slides.map((item, idx) => (
            <div key={idx} className="px-2">
              <motion.div
                className="border border-gray-200 py-10 group transition-colors duration-500 box-border
                border-b-[5.47px] border-b-[rgba(182,140,90,1)]
                rounded-[10px]
                shadow-[0px_3.94px_19.7px_0px_rgba(0,0,0,0.06)]
                bg-[rgba(255,255,255,1)] relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="absolute inset-0 bg-[#011c1a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
                <h2 className="relative z-10 text-[28px] font-bold text-[#011c1a] text-center group-hover:text-white transition-colors duration-500">
                  {item.title} <br /> {item.subtitle}
                </h2>
              </motion.div>
            </div>
          ))}
        </Slider>

        {/* Navigation buttons — placed under slider */}
        <div className="flex gap-6 mt-8">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-[#011c1a] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-500 ease"></span>
            <svg className="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="relative overflow-hidden group bg-[#b98a57] text-white w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer"
          >
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
