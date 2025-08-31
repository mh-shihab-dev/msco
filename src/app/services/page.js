"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/Data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const ServicePage = () => {
  return (
    <div className="mb-[100px]">
      {/* Hero Section */}
      <div className="relative w-full h-[375px] md:h-[500px] lg:h-[600px]">
        <Image
          src={assets.serviceHeroBg}
          alt="bgimage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Our Services
          </h1>
        </div>
      </div>
      {/* Services card */}
          <section className="section mb-10">
            <div className="mb-11 text-center">
              <p className="section-subtitle">What We Do</p>
              <h2 className="section-title">Our Services</h2>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {services?.map((service, index) => (
                 <motion.div
                  key={index}
                  variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div key={index} variants={cardVariants}>
                  <ServiceCard service={service} />
                </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
    </div>
  );
};

export default ServicePage;
