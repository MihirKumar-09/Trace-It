import { FcGoogle } from "react-icons/fc";
import { Lock, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PhoneAuth from "./PhoneAuth";

export default function RightSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45 },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f6f2] dark:bg-[#050816] md:w-1/2">
      {/* =========================
          FULL ANIMATED SCENE BACKGROUND
      ========================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LIGHT THEME SCENE */}
        <div className="absolute inset-0 dark:hidden">
          {/* base */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffaf5_0%,#fff1e6_32%,#eef4ff_68%,#f8fbff_100%)]" />

          {/* paper cut layered shapes */}
          <motion.div
            animate={{ x: [0, 18, 0], y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 top-10 h-72 w-72 rounded-[42%_58%_60%_40%/43%_39%_61%_57%] bg-[#ffd9c7]/70 blur-[2px]"
          />
          <motion.div
            animate={{ x: [0, -22, 0], y: [0, 14, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-17.5 top-16 h-80 w-80 rounded-[63%_37%_44%_56%/44%_54%_46%_56%] bg-[#dbeafe]/70 blur-[2px]"
          />
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, -18, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-17.5 left-[18%] h-72 w-72 rounded-[39%_61%_47%_53%/58%_46%_54%_42%] bg-[#fde68a]/45 blur-[2px]"
          />

          {/* sliding ribbons */}
          <motion.div
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute top-[10%] h-16 w-56 -rotate-12 rounded-[28px] bg-white/45 shadow-[0_10px_30px_rgba(255,255,255,0.6)] backdrop-blur-md"
          />
          <motion.div
            animate={{ x: ["110%", "-20%"] }}
            transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
            className="absolute top-[34%] h-12 w-44 rotate-14 rounded-3xl bg-[#fecdd3]/40"
          />
          <motion.div
            animate={{ x: ["-20%", "115%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] h-14 w-52 -rotate-10 rounded-3xl bg-[#bfdbfe]/35"
          />

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[18%] h-24 w-36 rounded-3xl border border-white/70 bg-white/55 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-12 rounded-full bg-orange-300/70" />
            <div className="mb-2 h-2 w-20 rounded-full bg-slate-300/70" />
            <div className="h-7 rounded-xl bg-[#ffedd5]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[26%] h-20 w-32 rounded-[22px] border border-white/70 bg-white/50 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-10 rounded-full bg-blue-300/70" />
            <div className="h-6 rounded-xl bg-[#dbeafe]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[18%] left-[16%] h-16 w-28 rounded-[20px] border border-white/70 bg-white/45 p-3 shadow-[0_16px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-12 rounded-full bg-rose-300/70" />
            <div className="h-5 rounded-lg bg-[#ffe4e6]" />
          </motion.div>

          {/* rotating stamp shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-[20%] top-[58%] h-20 w-20 rounded-[28px] border-2 border-orange-300/50"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute right-[18%] bottom-[16%] h-16 w-16 rounded-full border-2 border-sky-300/50"
          />

          {/* soft stripe overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-size-[64px_64px] opacity-30" />

          {/* lower fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.45))]" />
        </div>

        {/* DARK THEME SCENE */}
        <div className="absolute inset-0 hidden dark:block">
          {/* base */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#030712_0%,#071122_30%,#0a1530_65%,#050816_100%)]" />

          {/* matrix panel grid */}
          <div className="absolute inset-0 opacity-[0.18]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-size-[42px_42px]" />
          </div>

          {/* falling data bars */}
          <motion.div
            animate={{ y: ["-20%", "120%"], opacity: [0, 0.8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute left-[12%] top-0 h-40 w-0.5 bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.9),transparent)]"
          />
          <motion.div
            animate={{ y: ["-10%", "120%"], opacity: [0, 0.7, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
            className="absolute left-[28%] top-0 h-56 w-0.5 bg-[linear-gradient(180deg,transparent,rgba(59,130,246,0.85),transparent)]"
          />
          <motion.div
            animate={{ y: ["-30%", "120%"], opacity: [0, 0.65, 0] }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.8,
            }}
            className="absolute right-[22%] top-0 h-48 w-0.5 bg-[linear-gradient(180deg,transparent,rgba(168,85,247,0.8),transparent)]"
          />
          <motion.div
            animate={{ y: ["-15%", "120%"], opacity: [0, 0.7, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: 0.6,
            }}
            className="absolute right-[10%] top-0 h-64 w-0.5 bg-[linear-gradient(180deg,transparent,rgba(16,185,129,0.8),transparent)]"
          />

          {/* glitch strips */}
          <motion.div
            animate={{ x: ["-20%", "120%"], opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-[18%] h-0.5 w-64 bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.9),transparent)]"
          />
          <motion.div
            animate={{ x: ["120%", "-30%"], opacity: [0.12, 0.45, 0.12] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[46%] h-0.5 w-72 bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.9),transparent)]"
          />
          <motion.div
            animate={{ x: ["-10%", "120%"], opacity: [0.1, 0.42, 0.1] }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
            className="absolute bottom-[22%] h-0.5 w-56 bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.8),transparent)]"
          />

          {/* floating HUD tiles */}
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[6%] top-[16%] h-28 w-40 rounded-3xl border border-cyan-400/15 bg-cyan-400/5 p-3 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-16 rounded-full bg-cyan-300/40" />
            <div className="mb-2 h-2 w-24 rounded-full bg-white/10" />
            <div className="h-8 rounded-xl bg-[linear-gradient(90deg,rgba(34,211,238,0.12),rgba(59,130,246,0.10))]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] top-[24%] h-24 w-36 rounded-[22px] border border-violet-400/15 bg-violet-400/5 p-3 shadow-[0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-12 rounded-full bg-violet-300/40" />
            <div className="h-7 rounded-xl bg-[linear-gradient(90deg,rgba(168,85,247,0.12),rgba(236,72,153,0.10))]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 12, 0] }}
            transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[16%] left-[18%] h-20 w-32 rounded-[22px] border border-emerald-400/15 bg-emerald-400/5 p-3 shadow-[0_0_35px_rgba(16,185,129,0.08)] backdrop-blur-xl"
          >
            <div className="mb-2 h-2 w-10 rounded-full bg-emerald-300/40" />
            <div className="h-6 rounded-xl bg-[linear-gradient(90deg,rgba(16,185,129,0.12),rgba(34,197,94,0.10))]" />
          </motion.div>

          {/* angled panel shards */}
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [12, 18, 12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-[8%] h-72 w-32 skew-y-6 rounded-[28px] border border-white/8 bg-white/3 backdrop-blur-xl"
          />
          <motion.div
            animate={{ y: [0, 16, 0], rotate: [-10, -16, -10] }}
            transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-5 bottom-[10%] h-80 w-28 -skew-y-6 rounded-[28px] border border-white/8 bg-white/3 backdrop-blur-xl"
          />

          {/* pulsing corners */}
          <motion.div
            animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.08, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[22%] top-[14%] h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.1, 1] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
            className="absolute right-[18%] bottom-[18%] h-28 w-28 rounded-full bg-violet-400/10 blur-2xl"
          />

          {/* side neon wall */}
          <motion.div
            animate={{ x: [0, 16, 0], opacity: [0.14, 0.3, 0.14] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-10 top-0 h-full w-[24%] skew-x-[-18deg] bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(168,85,247,0.03),transparent)]"
          />
        </div>
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[28px] border border-white/50 bg-white/75 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-8"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 shadow-sm dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300"
            >
              <motion.span
                animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.4 }}
              >
                <Sparkles size={14} />
              </motion.span>
              Secure Sign In
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="mt-5">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Welcome back
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
                Sign in to track reports, manage claims, and stay connected with
                the Lost Link community.
              </p>
            </motion.div>

            {/* Google Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.location.href = "http://localhost:8080/auth/google";
              }}
              className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/8 dark:text-white"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <FcGoogle size={22} />
              </motion.span>
              Continue with Google
            </motion.button>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="my-6 flex items-center"
            >
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-white/15" />
              <span className="mx-4 text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500">
                OR
              </span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-white/15" />
            </motion.div>

            {/* Phone auth */}
            <motion.div variants={itemVariants}>
              <PhoneAuth />
            </motion.div>

            {/* Footer link */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-center text-sm text-slate-500 dark:text-slate-400"
            >
              Don&apos;t have an account?{" "}
              <a
                className="font-semibold text-orange-600 transition hover:text-orange-700 dark:text-cyan-300 dark:hover:text-cyan-200"
                href="http://localhost:5173/signUp"
              >
                Sign up for free
              </a>
            </motion.p>

            {/* Security blocks */}
            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-3 py-3 text-sm text-slate-700 dark:border-emerald-400/15 dark:bg-emerald-400/8 dark:text-slate-200"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-emerald-600 dark:text-emerald-300"
                >
                  <Lock size={16} />
                </motion.span>
                Secure Authentication
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/80 px-3 py-3 text-sm text-slate-700 dark:border-blue-400/15 dark:bg-blue-400/8 dark:text-slate-200"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="text-blue-600 dark:text-blue-300"
                >
                  <ShieldCheck size={16} />
                </motion.span>
                Information Kept Private
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
