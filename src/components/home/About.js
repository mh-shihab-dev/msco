'use client'
import Image from "next/image";
import { PrimaryDarkBtn,  } from "../shared/Button";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Achivement from "./Achivement";

const About = () => {
  return (
    <section className="section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Images */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >
          {/* Left Big Image */}
          <div className="relative row-span-2 border-2 border-primary rounded-l-[60px] mr-6">
            <Image
              src={assets.about1}
              alt="Team work"
              className="absolute mt-6 ml-6"
            />
          </div>

          {/* Top Right Small Image */}
          <Image src={assets.about2} alt="Document review" />

          {/* Bottom Right Small Image */}
          <Image
            src={assets.about3}
            alt="Client meeting"
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} // ডানে থেকে আসবে
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }} // একটু delay
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="section-subtitle">About Us</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-14">
            MOHAMMAD SHAH & CO. LLP – Chartered Accountants
          </h2>
          <p className="text-primary text-lg leading-relaxed mb-6 font-inter">
            At Mohammad Shah & Co. LLP, we bring over three decades of
            experience in delivering trusted, high-quality accounting and
            advisory services to individuals, startups, and established
            businesses across the UK. Founded in 1987, our firm has built a
            solid reputation for integrity, professionalism, and client-focused
            solutions. With a team of 15+ senior professionals—most with more
            than 25 years of industry experience—we combine technical expertise
            with real-world insight to help clients succeed in an ever-evolving
            business environment.
          </p>
          <PrimaryDarkBtn text={"Book Consultation"} />
        </motion.div>
      </div>

      <Achivement />
    </section>
  );
};

export default About;
