"use client";
import Link from "next/link";
import { motion } from "framer-motion";


const AboutPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A2E2C] text-white">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-[#C7A171]/20 via-[#0A2E2C]/40 to-[#F5F1EB]/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-[#C7A171]/20 via-[#0A2E2C]/40 to-[#F5F1EB]/20 blur-3xl animate-pulse [animation-duration:5s]" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <section className="relative mx-auto flex min-h-screen w-[92%] max-w-3xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="mx-auto flex w-full flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/20">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C7A171]/30 bg-[#C7A171]/10 px-3 py-1 text-xs tracking-wide uppercase text-[#C7A171]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C7A171] animate-ping [animation-duration:2s]" />
              Upcoming Page
            </span>

            {/* Icon */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-[#C7A171]/20 blur-xl" />
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[#C7A171] to-[#E6D2B0] text-[#0A2E2C] shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10"
                >
                  <path d="M11.25 2.25a.75.75 0 0 1 1.5 0V3A8.25 8.25 0 0 1 21 11.25h.75a.75.75 0 0 1 0 1.5H21A8.25 8.25 0 0 1 12.75 21v.75a.75.75 0 0 1-1.5 0V21A8.25 8.25 0 0 1 3 12.75H2.25a.75.75 0 0 1 0-1.5H3A8.25 8.25 0 0 1 11.25 3V2.25Z" />
                  <path d="M9 9.75a.75.75 0 0 1 .75-.75h.75v6.75a.75.75 0 0 1-1.5 0v-6Z" />
                  <path d="M13.5 9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6A.75.75 0 0 1 13.5 9Z" />
                </svg>
              </motion.div>
            </div>

            {/* Headline */}
            <h1 className="text-center text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              This page is coming soon
            </h1>
            <p className="max-w-prose text-center text-sm leading-relaxed text-gray-200 md:text-base">
              We are working on the content for this route. The full page will be available shortly. In the meantime, you can return to the homepage using the button below.
            </p>

            {/* Progress bar (looping) */}
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <span className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-gradient-to-r from-[#C7A171] via-[#E6D2B0] to-[#C7A171] animate-[progress_2s_ease-in-out_infinite]" />
            </div>

            {/* Actions */}
            <div className="mt-2 flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-[#C7A171] text-[#0A2E2C] px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition"
              >
                Go Back Home
              </Link>
              <a
                href="mailto:hello@example.com?subject=Notify%20me%20when%20the%20page%20is%20live"
                className="inline-flex items-center justify-center rounded-xl border border-[#C7A171]/40 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Notify Me
              </a>
            </div>

            {/* Small helper text */}
            <p className="text-center text-xs text-gray-400">
              Tip: Place this component on any future route—replace it once the product or dynamic page is ready.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Keyframes for progress animation */}
      <style>{`
        @keyframes progress {
          0% { transform: translateX(-120%); }
          60% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </main>
  );
}

export default AboutPage