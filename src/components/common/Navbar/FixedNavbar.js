"use client";
import { assets } from "@/assets/assets";
import { PrimaryDarkBtn } from "@/components/shared/Button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FixedNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const menuItems = [
    {
      name: "Home",
      slug: "/",
      subMenu: [
        { name: "Home1", slug: "/" },
        { name: "Home2", slug: "/" },
        { name: "Home3", slug: "/" },
      ],
    },
    {
      name: "About",
      slug: "/about",
      subMenu: [
        { name: "Our Story", slug: "/about" },
        { name: "Team", slug: "/about" },
        { name: "Careers", slug: "/about" },
      ],
    },
    {
      name: "Services",
      slug: "/services",
      subMenu: [
        { name: "Business Startups", slug: "/services" },
        { name: "Company Formation", slug: "/services" },
        { name: "Accounts Preparation", slug: "/services" },
      ],
    },
    {
      name: "Why Choose Us",
      slug: "/why-choose-us",
      subMenu: [
        { name: "Quality", slug: "/services" },
        { name: "Experience", slug: "/services" },
        { name: "Support", slug: "/services" },
      ],
    },
    {
      name: "Contact",
      slug: "/contact",
      subMenu: [
        { name: "Email", slug: "/contact" },
        { name: "Phone", slug: "/contact" },
        { name: "Location", slug: "/contact" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-[2px] shadow z-[999]"
        >
          <div className="py-2.5 hidden lg:flex justify-between items-center font-inter w-[96%] max-w-[1600px] mx-auto">
            {/* Logo */}
            <Link href={"/"}>
              <Image src={assets.mscoDark} alt="logo" />
            </Link>

            {/* Menu Items */}
            <ul className="flex space-x-8 text-gray-800 font-medium">
              {menuItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => setOpenMenu(idx)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {/* Parent Menu */}
                  <Link
                    href={item.slug}
                    className="flex items-center gap-1 hover:text-secondary transition-colors"
                  >
                    {item.name}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <ul
                    className={`absolute left-0 py-2 bg-white z-50 rounded shadow-lg w-60 transform transition-all duration-300 origin-top
                    ${
                      openMenu === idx
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item?.subMenu?.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.slug}
                          className="block px-4 py-2 hover:text-secondary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div>
              <PrimaryDarkBtn text={"Book Consultation"} />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}