import { motion } from "framer-motion";
import { Sparkles, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function LeftSection() {
  return (
    <section className="relative hidden overflow-hidden md:block md:w-1/2">
      <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#07111f] px-8 py-12 lg:px-16">
        {/* =========================
            CRAZY ANIMATED SCENE BACKGROUND
        ========================= */}
        <div className="pointer-events-none absolute inset-0">
          {/* Base layered tone */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#08111f_0%,#0b1730_32%,#101f43_62%,#08111f_100%)]" />

          {/* Depth vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_28%),radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.35)_100%)]" />

          {/* Tiny technical grid */}
          <div className="absolute inset-0 opacity-[0.16]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[44px_44px]" />
          </div>

          {/* Huge moving energy rails */}
          <motion.div
            animate={{ x: ["-15%", "115%"] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] h-[140%] w-28 skew-x-[-22deg] bg-cyan-300/10 blur-2xl"
          />
          <motion.div
            animate={{ x: ["115%", "-20%"] }}
            transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] h-[130%] w-24 skew-x-18 bg-blue-400/10 blur-2xl"
          />
          <motion.div
            animate={{ x: ["-25%", "120%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-15%] h-[145%] w-20 skew-x-[-16deg] bg-orange-300/10 blur-2xl"
          />

          {/* Vertical animated pillars */}
          <motion.div
            animate={{ opacity: [0.25, 0.8, 0.25], scaleY: [1, 1.08, 1] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-[10%] h-[70%] w-0.5 bg-[linear-gradient(to_top,transparent,rgba(56,189,248,0.55),transparent)]"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.65, 0.2], scaleY: [1, 1.15, 1] }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="absolute bottom-0 left-[28%] h-[58%] w-0.5 bg-[linear-gradient(to_top,transparent,rgba(96,165,250,0.48),transparent)]"
          />
          <motion.div
            animate={{ opacity: [0.18, 0.7, 0.18], scaleY: [1, 1.12, 1] }}
            transition={{
              duration: 5.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 right-[18%] h-[64%] w-0.5 bg-[linear-gradient(to_top,transparent,rgba(249,115,22,0.5),transparent)]"
          />
          <motion.div
            animate={{ opacity: [0.16, 0.6, 0.16], scaleY: [1, 1.1, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-0 right-[34%] h-[52%] w-0.5 bg-[linear-gradient(to_top,transparent,rgba(168,85,247,0.42),transparent)]"
          />

          {/* Floating tilted glass slabs */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [-12, -6, -12], x: [0, 8, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[3%] top-[8%] h-56 w-40 rounded-[30px] border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="absolute inset-3 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(56,189,248,0.08),rgba(255,255,255,0.02))]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0], rotate: [14, 7, 14], x: [0, -10, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[4%] top-[10%] h-64 w-36 rounded-[30px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="absolute inset-3 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(59,130,246,0.08),rgba(168,85,247,0.04))]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0], rotate: [10, 16, 10] }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="absolute bottom-[12%] left-[10%] h-36 w-28 rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl"
          >
            <div className="absolute inset-3 rounded-[18px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(249,115,22,0.08),rgba(255,255,255,0.02))]" />
          </motion.div>

          {/* Mid floating interface cards */}
          <motion.div
            animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[30%] top-[18%] h-24 w-44 rounded-3xl border border-white/10 bg-white/6 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-16 rounded-full bg-cyan-300/40" />
            <div className="mb-2 h-2 w-24 rounded-full bg-white/12" />
            <div className="h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(56,189,248,0.12),rgba(59,130,246,0.08))]" />
          </motion.div>

          <motion.div
            animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
            transition={{
              duration: 7.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="absolute right-[22%] bottom-[26%] h-20 w-36 rounded-[22px] border border-white/10 bg-white/6 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-12 rounded-full bg-orange-300/40" />
            <div className="h-7 rounded-2xl bg-[linear-gradient(90deg,rgba(249,115,22,0.12),rgba(168,85,247,0.08))]" />
          </motion.div>

          {/* Crazy scanning streaks */}
          <motion.div
            animate={{ y: ["-10%", "110%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 h-24 w-full bg-[linear-gradient(180deg,transparent,rgba(56,189,248,0.08),transparent)]"
          />
          <motion.div
            animate={{ y: ["110%", "-20%"] }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 h-20 w-full bg-[linear-gradient(180deg,transparent,rgba(249,115,22,0.05),transparent)]"
          />

          {/* Horizontal laser cuts */}
          <motion.div
            animate={{ opacity: [0.18, 0.75, 0.18], scaleX: [0.7, 1.05, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[34%] h-0.5 w-56 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.85),transparent)]"
          />
          <motion.div
            animate={{ opacity: [0.16, 0.65, 0.16], scaleX: [0.75, 1.1, 0.75] }}
            transition={{
              duration: 5.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute right-[6%] top-[55%] h-0.5 w-64 bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.75),transparent)]"
          />
          <motion.div
            animate={{ opacity: [0.14, 0.55, 0.14], scaleX: [0.8, 1.12, 0.8] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.4,
            }}
            className="absolute left-[24%] bottom-[18%] h-0.5 w-48 bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.65),transparent)]"
          />

          {/* Side light wall */}
          <motion.div
            animate={{ x: [0, 20, 0], opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-10 top-0 h-full w-[26%] skew-x-[-18deg] bg-[linear-gradient(180deg,rgba(56,189,248,0.08),rgba(255,255,255,0.02),transparent)]"
          />

          {/* Bottom atmospheric glow */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,rgba(8,15,35,0.65))]" />
        </div>

        {/* Top Content */}
        <div className="relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <motion.span
              animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="text-orange-300"
            >
              <Sparkles size={15} />
            </motion.span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Trusted Recovery Network
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
          >
            Welcome Back to <br />
            <span className="bg-[linear-gradient(90deg,#ffffff,#93c5fd,#fdba74)] bg-clip-text text-transparent">
              Lost Link
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-6 text-sm leading-relaxed text-white/75 sm:text-base"
          >
            Log in to track your lost items or help others recover theirs.
            Access a secure platform built to reconnect people with what
            matters.
          </motion.p>

          {/* Feature chips */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-md">
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-300"
              >
                <Globe size={16} />
              </motion.span>
              <span className="text-sm text-white/85">Global Community</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-md">
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="text-emerald-300"
              >
                <ShieldCheck size={16} />
              </motion.span>
              <span className="text-sm text-white/85">Secure Access</span>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group relative mt-10 max-w-sm overflow-hidden rounded-[26px] border border-white/15 bg-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-white/5 via-transparent to-white/10" />

            <motion.div
              animate={{ x: ["-100%", "140%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 z-20 w-20 skew-x-[-20deg] bg-white/12 blur-lg"
            />

            <img
              src="/images/SignIn/leftSection.png"
              alt="Left Section"
              className="relative z-10 h-full w-full rounded-[20px] object-cover transition duration-500 group-hover:scale-[1.03]"
            />

            <motion.div
              animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-white">
                Active Community
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28 }}
          className="relative z-10 mt-10"
        >
          <div className="w-fit max-w-sm rounded-3xl border border-white/12 bg-white/10 p-5 shadow-lg backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="mt-0.5 rounded-full bg-white/10 p-2 text-orange-300"
              >
                <ArrowUpRight size={18} />
              </motion.div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Thousands of items returned
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/65 sm:text-sm">
                  Our community helps people reconnect with lost belongings
                  through fast reporting, trusted verification, and real-time
                  updates.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
