// ServiceCard.jsx
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const { title, description, darkIcon, lightIcon } = service || {};

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="max-w-md rounded-xl border border-b-0 border-gray-200 bg-white p-6 relative overflow-hidden group"
      style={{
        boxShadow: "0 8px 0 #B68C5A",
      }}
    >
      {/* Background hover overlay */}
      <div className="absolute inset-0 bg-[#011c1a] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-[#FAF7F2] group-hover:bg-[#B68C5A] flex items-center justify-center mb-4 transition-colors duration-500">
          <Image src={darkIcon} alt="" className="group-hover:hidden" />
          <Image
            src={lightIcon}
            alt=""
            className="hidden group-hover:block transition-all duration-500 transform"
          />
        </div>

        {/* Title */}
        <h2 className="text-[28px] font-bold text-[#011c1a] group-hover:text-white transition-colors duration-500">
          {title}
        </h2>

        {/* Description */}
        <p className="text-[#011c1a] font-inter text-lg group-hover:text-gray-200 transition-colors duration-500">
          {description}
        </p>

        {/* Read More */}
        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-[#011c1a] font-inter group-hover:text-white transition-colors duration-500"
        >
          Read More{" "}
          <svg
            className="w-5 h-5 ml-2"
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
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
