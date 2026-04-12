import { CirclePlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#FDF1EC_0%,#FDDCCB_42%,#FBEAE4_100%)] px-3 py-10 dark:bg-[linear-gradient(135deg,#04111f_0%,#082032_38%,#0b2c3d_72%,#0f172a_100%)] sm:px-5 md:px-12 md:py-16">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex w-full max-w-2xl flex-col"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mb-4 w-fit rounded-full border border-white/60 bg-white/55 px-4 py-2 shadow-[0_8px_30px_rgba(255,255,255,0.22)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-none"
          >
            <p className="text-sm font-semibold tracking-wide text-orange-600 dark:text-orange-300">
              Community Powered Recovery
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl"
          >
            Recently Found
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55 }}
            className="bg-linear-to-r from-orange-500 via-pink-500 to-orange-600 bg-clip-text text-4xl font-bold leading-tight text-transparent dark:from-emerald-300 dark:via-cyan-300 dark:to-sky-400 sm:text-5xl md:text-6xl"
          >
            Items Near You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.55 }}
            className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 dark:text-slate-300 sm:text-base"
          >
            Browse items found by the community and help reunite them with their
            owners. Every report counts.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <div className="rounded-2xl border border-white/60 bg-white/65 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                500+
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Reports shared
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/65 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Fast
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Community updates
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/65 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Trusted
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Verified reports
              </p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.55 }}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link to="/found-item-form" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3.5 font-semibold text-white shadow-[0_16px_40px_rgba(249,115,22,0.28)] transition hover:bg-orange-600 dark:bg-[linear-gradient(90deg,#10b981,#06b6d4)] dark:hover:opacity-95 sm:w-auto"
              >
                <CirclePlus size={19} />
                <span>Report Found Item</span>
              </motion.button>
            </Link>

            <Link to="/lost-item" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/80 px-5 py-3.5 font-semibold text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition hover:bg-white dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:bg-white/12 sm:w-auto"
              >
                <span>Browse Lost Items</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 45, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full sm:w-[85%] md:w-[45%] lg:w-[38%]"
        >
          <div className="absolute -left-4 top-8 hidden h-20 w-20 rounded-3xl bg-white/35 blur-2xl dark:bg-cyan-300/8 sm:block" />
          <div className="absolute -right-4 bottom-8 hidden h-24 w-24 rounded-full bg-orange-300/25 blur-3xl dark:bg-fuchsia-400/10 sm:block" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-2 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_25px_80px_rgba(0,0,0,0.32)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-size-[42px_42px] opacity-30 dark:bg-[linear-gradient(to_right,rgba(125,211,252,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,211,153,0.04)_1px,transparent_1px)] dark:bg-size-[52px_52px] dark:opacity-100" />

            <img
              src="/images/FoundPage/hero.png"
              alt="Hero"
              className="relative z-10 h-auto w-full rounded-[22px] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
