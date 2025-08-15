"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    { icon: assets.leader, text: "Over 38 years of industry leadership" },
    { icon: assets.relation, text: "10,000+ clients served" },
    { icon: assets.reach, text: "Culturally diverse and globally connected" },
    { icon: assets.clarification, text: "Free initial consultation" },
    { icon: assets.approach, text: "Personalized and proactive approach" },
  ];

  // Animation Variants
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // gap between animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }} // will trigger multiple times on scroll
        >
          <Image src={assets.feature} alt="Team" width={500} height={400} />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">Why Clients Trust Us</h2>
          <div className="mt-6">
            <motion.ul
              className="relative"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center mb-6 last:mb-0 font-inter relative"
                  variants={itemVariants}
                >
                  {/* Dotted line */}
                  {index !== features.length - 1 && (
                    <span className="absolute left-[16.5px] top-8 w-px h-full border-l-2 border-dotted border-[#b68c5a]"></span>
                  )}

                  {/* Icon */}
                  <span className="flex items-center justify-center w-9 h-9 bg-[#b68c5a] text-white rounded-full z-10 group">
                    <Image src={feature.icon} alt="feature_icon"  className="transition-transform duration-500 group-hover:scale-x-[-1]" />
                  </span>

                  {/* Text */}
                  <p className="ml-4 text-lg text-[#011c1a]">{feature.text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
