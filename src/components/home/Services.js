"use client";
import { services } from "@/data/Data";
import ServiceCard from "../shared/ServiceCard";
import { PrimaryDarkBtn } from "../shared/Button";
import { motion } from "framer-motion";
import Link from "next/link";

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

const Services = () => {
  return (
    <section className="section mb-10">
      <div className="mb-11 text-center">
        <p className="section-subtitle">What We Do</p>
        <h2 className="section-title">Services We Offer </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {services.map((service, index) => (
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

      <div className="mt-[68px] flex justify-center">
        <Link href={"/services"}><PrimaryDarkBtn text={"View All Services"} /></Link>
      </div>
    </section>
  );
};

export default Services;
