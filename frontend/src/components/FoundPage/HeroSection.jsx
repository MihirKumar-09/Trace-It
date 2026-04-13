import { CirclePlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fff6f0] px-3 py-10 dark:bg-[#040816] sm:px-5 md:px-12 md:py-16">
      {/* =========================
          CRAZY FULL SCENE BACKGROUND
      ========================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* base */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fff7f1_0%,#ffe9da_30%,#fff4ec_65%,#fffaf7_100%)] dark:bg-[linear-gradient(135deg,#030712_0%,#071426_28%,#0b1020_60%,#111827_100%)]" />

        {/* angled texture grid */}
        <div className="absolute inset-0 opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(30deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-size-[70px_70px] dark:bg-[linear-gradient(120deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(30deg,rgba(148,163,184,0.06)_1px,transparent_1px)]" />
        </div>

        {/* giant moving diagonal strips */}
        <motion.div
          animate={{
            x: ["-20%", "120%"],
            y: ["0%", "8%", "0%"],
            rotate: [-18, -14, -18],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 top-[-10%] h-[160%] w-32 bg-white/30 blur-2xl dark:bg-cyan-400/10"
        />
        <motion.div
          animate={{
            x: ["120%", "-20%"],
            y: ["0%", "-6%", "0%"],
            rotate: [18, 14, 18],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 top-[-10%] h-[160%] w-24 bg-orange-200/30 blur-2xl dark:bg-fuchsia-500/10"
        />
        <motion.div
          animate={{ x: ["-10%", "110%"], rotate: [-28, -22, -28] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] h-[160%] w-14 bg-pink-200/20 blur-xl dark:bg-blue-500/10"
        />

        {/* prism shards */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [16, 22, 16], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[4%] top-[10%] h-52 w-40 skew-y-6 rounded-[30px] border border-white/60 bg-white/35 shadow-[0_30px_60px_rgba(255,140,80,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-3 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.55),rgba(255,183,77,0.18),rgba(255,255,255,0.05))] dark:bg-[linear-gradient(135deg,rgba(56,189,248,0.16),rgba(168,85,247,0.12),rgba(255,255,255,0.02))]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 22, 0], rotate: [-14, -22, -14], x: [0, -10, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[8%] h-64 w-36 -skew-y-6 rounded-[30px] border border-white/60 bg-white/28 shadow-[0_30px_60px_rgba(59,130,246,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-3 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.45),rgba(96,165,250,0.18),rgba(255,255,255,0.04))] dark:bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(59,130,246,0.16),rgba(255,255,255,0.02))]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -16, 0], rotate: [8, 16, 8] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[8%] left-[12%] h-40 w-28 skew-y-12 rounded-[26px] border border-white/60 bg-white/25 shadow-[0_20px_50px_rgba(236,72,153,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="absolute inset-3 rounded-[18px] bg-[linear-gradient(135deg,rgba(255,255,255,0.42),rgba(244,114,182,0.18),rgba(255,255,255,0.03))] dark:bg-[linear-gradient(135deg,rgba(236,72,153,0.12),rgba(99,102,241,0.14),rgba(255,255,255,0.02))]" />
        </motion.div>

        {/* framed floating panels */}
        <motion.div
          animate={{ rotate: [0, 8, 0], y: [0, -12, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[24%] top-[12%] h-24 w-24 rounded-3xl border border-orange-200/50 bg-white/40 shadow-[0_18px_35px_rgba(249,115,22,0.12)] backdrop-blur-lg dark:border-cyan-400/10 dark:bg-white/5"
        >
          <div className="absolute inset-3 rounded-2xl border border-orange-300/50 dark:border-cyan-300/20" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, -10, 0], y: [0, 14, 0] }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute right-[28%] top-[20%] h-20 w-20 rounded-[22px] border border-blue-200/50 bg-white/35 shadow-[0_18px_35px_rgba(59,130,246,0.12)] backdrop-blur-lg dark:border-violet-400/10 dark:bg-white/5"
        >
          <div className="absolute inset-3 rounded-[14px] border border-blue-300/50 dark:border-violet-300/20" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 12, 0], y: [0, -10, 0] }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[16%] right-[18%] h-24 w-24 rounded-3xl border border-pink-200/50 bg-white/35 shadow-[0_18px_35px_rgba(236,72,153,0.12)] backdrop-blur-lg dark:border-orange-400/10 dark:bg-white/5"
        >
          <div className="absolute inset-3 rounded-2xl border border-pink-300/50 dark:border-orange-300/20" />
        </motion.div>

        {/* moving data tiles */}
        <motion.div
          animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[32%] bottom-[18%] h-20 w-40 rounded-[22px] border border-white/60 bg-white/45 p-3 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-2 h-2 w-16 rounded-full bg-orange-300/60 dark:bg-cyan-300/20" />
          <div className="mb-2 h-2 w-24 rounded-full bg-slate-300/60 dark:bg-white/10" />
          <div className="h-8 rounded-xl bg-[linear-gradient(90deg,rgba(251,146,60,0.35),rgba(244,114,182,0.25))] dark:bg-[linear-gradient(90deg,rgba(34,211,238,0.10),rgba(168,85,247,0.10))]" />
        </motion.div>

        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{
            duration: 6.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="absolute right-[22%] bottom-[24%] h-16 w-32 rounded-[20px] border border-white/60 bg-white/40 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
        >
          <div className="mb-2 h-2 w-12 rounded-full bg-blue-300/60 dark:bg-violet-300/20" />
          <div className="h-6 rounded-xl bg-[linear-gradient(90deg,rgba(96,165,250,0.30),rgba(192,132,252,0.22))] dark:bg-[linear-gradient(90deg,rgba(59,130,246,0.10),rgba(168,85,247,0.10))]" />
        </motion.div>

        {/* laser slices */}
        <motion.div
          animate={{ opacity: [0.25, 0.9, 0.25], scaleX: [0.8, 1.1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[14%] top-[38%] h-0.5 w-44 bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.85),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.7),transparent)]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.85, 0.2], scaleX: [0.7, 1.15, 0.7] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute right-[12%] top-[54%] h-0.5 w-56 bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.75),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.65),transparent)]"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.8, 0.15], scaleX: [0.8, 1.05, 0.8] }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-[42%] bottom-[20%] h-0.5 w-48 bg-[linear-gradient(90deg,transparent,rgba(59,130,246,0.75),transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.6),transparent)]"
        />

        {/* giant skew light wall */}
        <motion.div
          animate={{ x: [0, 24, 0], opacity: [0.18, 0.34, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 top-0 h-full w-[28%] skew-x-[-18deg] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02),transparent)] dark:bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(168,85,247,0.03),transparent)]"
        />

        {/* lower depth haze */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.55))] dark:bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.55))]" />

        {/* edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(15,23,42,0.08)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.45)_100%)]" />
      </div>

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
            className="mb-4 w-fit rounded-full border border-white/70 bg-white/65 px-4 py-2 shadow-[0_8px_30px_rgba(255,255,255,0.22)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-none"
          >
            <p className="text-sm font-semibold tracking-wide text-orange-600 dark:text-cyan-300">
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
            className="bg-[linear-gradient(90deg,#f97316,#ec4899,#f97316)] bg-clip-text text-4xl font-bold leading-tight text-transparent dark:bg-[linear-gradient(90deg,#5eead4,#60a5fa,#c084fc)] sm:text-5xl md:text-6xl"
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
            <div className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                500+
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Reports shared
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Fast
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Community updates
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_10px_28px_rgba(0,0,0,0.2)]">
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
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(90deg,#f97316,#ec4899)] px-5 py-3.5 font-semibold text-white shadow-[0_16px_40px_rgba(249,115,22,0.28)] transition hover:opacity-95 dark:bg-[linear-gradient(90deg,#14b8a6,#3b82f6,#a855f7)] sm:w-auto"
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
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/40 p-2 shadow-[0_25px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_25px_80px_rgba(0,0,0,0.32)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(30deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[42px_42px] opacity-30 dark:bg-[linear-gradient(120deg,rgba(125,211,252,0.06)_1px,transparent_1px),linear-gradient(30deg,rgba(168,85,247,0.05)_1px,transparent_1px)] dark:bg-size-[52px_52px] dark:opacity-100" />

            <motion.div
              animate={{ x: ["-100%", "140%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 z-10 w-24 skew-x-[-22deg] bg-white/20 blur-xl dark:bg-cyan-300/10"
            />

            <img
              src="/images/FoundPage/hero.png"
              alt="Hero"
              className="relative z-0 h-auto w-full rounded-[22px] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
