import {
  CirclePlus,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden px-0 py-0 text-center">
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative w-full overflow-hidden px-5 py-12 shadow-none sm:px-6 sm:py-12 md:px-10 md:py-14"
      >
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* LIGHT THEME */}
          <div className="absolute inset-0 dark:hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFF8F5_0%,#FDF0EB_30%,#FAF5F3_65%,#FFF9F7_100%)]" />

            {/* liquid blob 1 */}
            <motion.div
              animate={{
                borderRadius: [
                  "42% 58% 63% 37% / 44% 42% 58% 56%",
                  "58% 42% 39% 61% / 52% 60% 40% 48%",
                  "42% 58% 63% 37% / 44% 42% 58% 56%",
                ],
                x: [0, 60, -30, 0],
                y: [0, -25, 35, 0],
                rotate: [0, 10, -6, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[-10%] top-[8%] h-88 w-88 bg-orange-200/45 blur-3xl"
            />

            {/* liquid blob 2 */}
            <motion.div
              animate={{
                borderRadius: [
                  "57% 43% 47% 53% / 38% 58% 42% 62%",
                  "38% 62% 58% 42% / 60% 42% 58% 40%",
                  "57% 43% 47% 53% / 38% 58% 42% 62%",
                ],
                x: [0, -45, 28, 0],
                y: [0, 40, -18, 0],
                rotate: [0, -12, 8, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[-12%] top-[18%] h-96 w-[24rem] bg-pink-200/40 blur-3xl"
            />

            {/* liquid blob 3 */}
            <motion.div
              animate={{
                borderRadius: [
                  "50% 50% 40% 60% / 58% 36% 64% 42%",
                  "40% 60% 55% 45% / 40% 60% 40% 60%",
                  "50% 50% 40% 60% / 58% 36% 64% 42%",
                ],
                x: [0, 30, -20, 0],
                y: [0, -16, 24, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-14%] left-[28%] h-80 w-[20rem] bg-amber-100/40 blur-3xl"
            />

            {/* floating glass shard 1 */}
            <motion.div
              animate={{
                y: [0, -18, 0],
                x: [0, 14, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[10%] top-[26%] h-20 w-28 rounded-[22px] border border-white/70 bg-white/40 shadow-[0_18px_45px_rgba(249,115,22,0.10)] backdrop-blur-xl"
            >
              <div className="absolute left-4 top-4 h-2.5 w-14 rounded-full bg-orange-200/80" />
              <div className="absolute left-4 top-9 h-2.5 w-9 rounded-full bg-pink-100/90" />
            </motion.div>

            {/* floating glass shard 2 */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: [0, -12, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute right-[14%] top-[52%] h-16 w-24 rounded-[18px] border border-white/70 bg-white/38 shadow-[0_16px_40px_rgba(236,72,153,0.10)] backdrop-blur-xl"
            >
              <div className="absolute left-4 top-4 h-2.5 w-12 rounded-full bg-pink-200/80" />
              <div className="absolute left-4 top-8 h-2.5 w-7 rounded-full bg-orange-100/90" />
            </motion.div>

            {/* floating glass shard 3 */}
            <motion.div
              animate={{
                y: [0, -14, 0],
                x: [0, 18, 0],
                rotate: [0, 6, 0],
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
              className="absolute left-[24%] bottom-[16%] h-18 w-28 rounded-3xl border border-white/70 bg-white/34 shadow-[0_16px_42px_rgba(251,146,60,0.10)] backdrop-blur-xl"
            >
              <div className="absolute left-4 top-4 h-2.5 w-14 rounded-full bg-orange-200/80" />
              <div className="absolute left-4 top-9 h-2.5 w-10 rounded-full bg-amber-100/90" />
            </motion.div>

            {/* moving light sweep */}
            <motion.div
              animate={{ x: ["-20%", "120%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[32%] h-32 w-2xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)] blur-2xl"
            />

            {/* second sweep */}
            <motion.div
              animate={{ x: ["120%", "-20%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 1.8,
              }}
              className="absolute bottom-[18%] h-24 w-136 bg-[linear-gradient(90deg,transparent,rgba(255,245,240,0.85),transparent)] blur-2xl"
            />

            {/* subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-size-[40px_40px] opacity-30" />
          </div>

          {/* DARK THEME */}
          <div className="absolute inset-0 hidden dark:block">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#070b16_0%,#091121_28%,#111a31_58%,#1a0f2d_100%)]" />

            {/* energy core glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.55, 0.2, 0.55],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/18 blur-3xl"
            />

            {/* outer glow */}
            <motion.div
              animate={{
                scale: [1, 1.14, 1],
                opacity: [0.18, 0.08, 0.18],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"
            />

            {/* orbit ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            </motion.div>

            {/* orbit ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-104 w-104 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/20"
            >
              <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-fuchsia-300 shadow-[0_0_14px_rgba(244,114,182,0.9)]" />
            </motion.div>

            {/* orbit ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-128 w-lg -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
            >
              <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.8)]" />
            </motion.div>

            {/* energy pulse circles */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.18, 0.02, 0.18],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/18"
            />

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.14, 0.02, 0.14],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/14"
            />

            {/* vertical energy beam */}
            <motion.div
              animate={{ y: ["-20%", "120%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-x-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.16),transparent)] blur-xl"
            />

            {/* diagonal beam 1 */}
            <motion.div
              animate={{
                x: ["-20%", "120%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4.4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[34%] h-0.5 w-44 rotate-28 bg-cyan-300 blur-sm"
            />

            {/* diagonal beam 2 */}
            <motion.div
              animate={{
                x: ["120%", "-20%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: "linear",
                delay: 1.2,
              }}
              className="absolute bottom-[24%] h-0.5 w-36 -rotate-24 bg-fuchsia-300 blur-sm"
            />

            {/* cyber grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px] opacity-100" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -2, scale: 1.02 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur-md dark:border-orange-400/20 dark:bg-white/8 dark:text-orange-300"
          >
            <Sparkles size={16} />
            <span className="truncate">#1 Community Tracking App</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-5xl text-4xl font-extrabold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Lost Something?
          </motion.h1>

          <motion.h1
            variants={fadeUp}
            className="mt-2 max-w-6xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-linear-to-r from-orange-600 via-pink-500 to-orange-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
              Let the Community Help You.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 dark:text-slate-300 sm:text-base md:text-lg"
          >
            Connect with thousands of active local tracers to recover your lost
            belongings. Fast, secure, and community-driven.
          </motion.p>

          {/* mini feature pills */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
            >
              <Search
                size={16}
                className="text-orange-500 dark:text-blue-300"
              />
              Local Matching
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6 dark:text-slate-200"
            >
              <ShieldCheck
                size={16}
                className="text-orange-500 dark:text-blue-300"
              />
              Safe & Trusted
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full max-w-xl flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:justify-center sm:gap-6"
          >
            <Link to="/lost-item-form" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  boxShadow: "0px 18px 40px rgba(249,115,22,0.28)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-orange-500 via-orange-500 to-pink-500 px-6 py-3.5 font-semibold text-white shadow-xl dark:from-orange-500 dark:via-pink-500 dark:to-fuchsia-500 sm:w-auto"
              >
                <motion.span
                  animate={{ rotate: [0, 8, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <CirclePlus />
                </motion.span>
                <span>Report Lost Item</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>

            <Link to="/found-item" className="w-full sm:w-auto">
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  boxShadow: "0px 16px 34px rgba(0,0,0,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="w-full cursor-pointer rounded-2xl border border-orange-100 bg-white/90 px-6 py-3.5 font-semibold text-gray-800 shadow-lg backdrop-blur hover:border-orange-200 dark:border-white/10 dark:bg-white/8 dark:text-white dark:hover:border-violet-300/20 sm:w-auto"
              >
                Browse Found Items
              </motion.button>
            </Link>
          </motion.div>

          {/* stats */}
          <motion.div
            variants={fadeUp}
            className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/80 bg-white/70 px-4 py-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6"
            >
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                24/7
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Community Active
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/80 bg-white/70 px-4 py-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6"
            >
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                Fast
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Lost Item Reporting
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/80 bg-white/70 px-4 py-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/6"
            >
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                Secure
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                Trusted Community
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* shine */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/35 to-transparent dark:from-white/6" />
      </motion.div>
    </section>
  );
}
