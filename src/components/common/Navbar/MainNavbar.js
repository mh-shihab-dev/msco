"use client";
import { PrimaryDarkBtn } from "@/components/shared/Button";
import Link from "next/link";
import { useState } from "react";

export default function MainNavbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { 
      name: "Home", 
      slug:"/",
      subMenu: [
        {name:"Home1", slug:"/"},
        {name:"Home2", slug:"/"},
        {name:"Home3", slug:"/"}
      ]
    },
    { 
      name: "About",
      slug: "/about",
      subMenu: [
        {name:"Our Story", slug:"/about"},
        {name:"Team", slug:"/about"},
        {name:"Careers", slug:"/about"}
      ]
    },
    { 
      name: "Services",
      slug: "/services",
      subMenu: [
        {name:"Business Startups", slug:"/services"},
        {name:"Company Formation", slug:"/services"},
        {name:"Accounts Preparation", slug:"/services"}
      ]
    },
    { 
      name: "Why Choose Us",
      slug: "/why-choose-us",
      subMenu: [
        {name:"Quality", slug:"/services"},
        {name:"Experience", slug:"/services"},
        {name:"Support", slug:"/services"}
      ]
    },
    
    { 
      name: "Contact",
      slug: "/contact",
      subMenu: [
        {name:"Email", slug:"/services"},
        {name:"Phone", slug:"/services"},
        {name:"Location", slug:"/services"}
      ]
    },
  ];

  return (
    <nav className=" bg-white shadow">
      <div className="py-[18px] px-12 flex justify-between items-center">
        <ul className="flex space-x-8 text-gray-800 font-medium">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => setOpenMenu(idx)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* Menu button */}
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

              {/* Dropdown with animation */}
              <ul
                className={`absolute left-0 py-2 bg-white z-50  rounded shadow-lg w-60 
                transform transition-all duration-300 origin-top
                ${
                  openMenu === idx
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {item.subMenu.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="block px-4 py-2  hover:text-secondary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div>
          <PrimaryDarkBtn text={"Book Consultation"}/>
        </div>
      </div>
    </nav>
  );
}
