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
        style={{
          background:
            "linear-gradient(135deg, #FFF8F5 0%, #FDF0EB 30%, #FAF5F3 65%, #FFF9F7 100%)",
        }}
      >
        {/* premium dark inner layer */}
        <div className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-[linear-gradient(135deg,#0b1120_0%,#111a31_26%,#1b2545_58%,#3a1766_100%)]" />

        {/* animated inner glow */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -14, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-8 -top-6 h-40 w-40 rounded-full bg-orange-300/20 blur-2xl dark:bg-cyan-400/10"
        />

        <motion.div
          animate={{
            x: [0, -18, 0],
            y: [0, 14, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-pink-300/20 blur-3xl dark:bg-fuchsia-500/10"
        />

        <motion.div
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full border border-orange-200/50 bg-white/40 blur-sm sm:right-10 sm:top-10 sm:h-24 sm:w-24 dark:border-white/10 dark:bg-white/5"
        />

        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-100" />

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
