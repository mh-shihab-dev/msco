"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function SidebarMenu({ services, currentSlug }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Three dot button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 border rounded-md shadow-sm bg-white"
      >
        ⋮
      </button>

      {/* Animated dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2"
          >
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`block px-3 py-2 rounded-md transition ${
                    s.slug === currentSlug
                      ? "bg-secondary text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
