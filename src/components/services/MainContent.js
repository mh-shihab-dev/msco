"use client";
import { assets } from "@/assets/assets";
import SidebarMenu from "@/components/services/SidebarMenu";
import { services } from "@/data/Data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MainContent = ({ service, slug }) => {
  return (
    <>
      {/* Main Content */}
      <div className="section grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 text-base-text">
        {/* ✅ Mobile & Tablet (All Services top) */}
        <div className="lg:hidden mb-6">
          <h2 className="text-xl font-semibold mb-4">All Services</h2>
          <SidebarMenu services={services} currentSlug={slug} />
        </div>

        {/* Service Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Top Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={service.image}
              alt={service.title}
              className="rounded-lg"
            />
          </motion.div>

          {/* Intro */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-semibold">{service.title}</h1>
            <p className="mt-7 text-2xl font-medium font-inter">
              <strong>{service.intro.subtitle}</strong>
            </p>
            <p className="mt-7 text-base leading-[23px] font-inter">
              {service.intro.description}
            </p>
          </motion.article>

          {/* How We Help */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-[50px]"
          >
            <h2 className="text-4xl font-semibold mb-7">
              {service.howWeHelp.title}
            </h2>
            <p className="mb-7 text-base font-inter leading-[22px]">
              {service.howWeHelp.description}
            </p>
            <ul className="space-y-6 font-inter  text-base">
              {service.howWeHelp.points.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <strong className="block text-base font-semibold mb-6">
                    <span className="mr-2">•</span> {item.title}
                  </strong>
                  <p className="text-base">{item.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-[50px]"
          >
            <h2 className="text-4xl font-semibold mb-8">
              {service.whyChooseUs.title}
            </h2>
            <ul className="space-y-4 font-inter">
              {service.whyChooseUs.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start mb-9 text-base leading-[22px]"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={assets.checkMark}
                    alt="checkmark"
                    className="mr-2"
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/* Get Started */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-[50px]"
          >
            <h2 className="text-4xl font-semibold mb-7">
              {service.getStarted.title}
            </h2>
            <p className="text-base leading-[22px] font-inter">
              {service.getStarted.description}
            </p>
          </motion.section>
        </div>

        {/* ✅ Desktop Sidebar */}
        <aside className="hidden lg:block bg-gray-50 p-6 rounded-lg shadow-md h-fit lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">All Services</h2>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`flex items-center justify-between px-3 py-2 rounded-md transition font-inter ${
                    s.slug === slug
                      ? "bg-secondary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {s.title}

                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default MainContent;
