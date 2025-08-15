"use client";

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrollTop > 200);
    };

    // প্রথমেই একবার চালানো হবে যেন reload করলে সাথে সাথেই update হয়
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[#011c1a] text-white rounded-full shadow-lg group"
          style={{
            background: `conic-gradient(#b68c5a ${scrollProgress}%, #011c1a ${scrollProgress}%)`,
          }}
        >
          <span className="text-lg font-bold transition-transform duration-300 group-hover:-translate-y-1">
            ↑
          </span>
        </button>
      )}
    </>
  );
}
