import { Bug, HeartPlus, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NoFound() {
  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050816] text-white">
      {/* base gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%),linear-gradient(135deg,#050816_0%,#091226_45%,#0B1730_100%)]" />

      {/* animated aurora layers */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -25, 15, 0],
          rotate: [0, 8, -6, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-24 h-88 w-88 rounded-full bg-cyan-400/12 blur-[110px] md:h-104 md:w-104"
      />

      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -15, 0],
          rotate: [0, -8, 5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-28 -right-20 h-96 w-[24rem] rounded-full bg-blue-500/12 blur-[120px] md:h-112 md:w-md"
      />

      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-72 w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px] md:h-88 md:w-88"
      />

      {/* premium mesh grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[34px_34px]" />

      {/* floating particles */}
      <motion.div
        animate={{ y: [0, -14, 0], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[16%] left-[12%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[24%] right-[14%] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.9)]"
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[18%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]"
      />

      {/* wrapper */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 py-4 sm:px-6 md:px-8">
        <motion.div
          variants={cardVariant}
          initial="hidden"
          animate="show"
          className="group relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/12 bg-white/6 p-6 shadow-[0_25px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-7 md:p-8"
        >
          {/* glass border shine */}
          <div className="absolute inset-0 rounded-[28px] border border-white/10" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-white/20 to-transparent" />

          {/* inner glow */}
          <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_38%)]" />

          {/* badge */}
          <motion.div
            variants={itemVariant}
            className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-medium text-cyan-200 shadow-[0_8px_30px_rgba(34,211,238,0.12)]"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.95)]" />
            Error 404
          </motion.div>

          {/* image */}
          <motion.div
            variants={itemVariant}
            className="relative mx-auto mb-4 w-fit md:mb-5"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
            />
            <motion.img
              src="/images/NoFound/NoFound.png"
              alt="404-OOPs"
              className="relative mx-auto w-40 drop-shadow-[0_20px_50px_rgba(0,0,0,0.55)] sm:w-48 md:w-52 lg:w-56"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 1.2, -1.2, 0],
              }}
              transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>

          {/* heading */}
          <motion.div variants={itemVariant}>
            <h1 className="text-center text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl md:text-4xl lg:text-5xl">
              404 — Lost in Space
            </h1>
          </motion.div>

          {/* subtitle */}
          <motion.p
            variants={itemVariant}
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-white/70 sm:text-base md:mt-4"
          >
            This page vanished like a lost wallet. Don’t worry — we’ll get you
            back where things actually make sense.
          </motion.p>

          {/* primary CTA */}
          <motion.div
            variants={itemVariant}
            className="mt-6 flex justify-center md:mt-7"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn relative overflow-hidden rounded-2xl border border-cyan-300/25 bg-linear-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.38)] transition-all duration-300"
              >
                <motion.span
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "120%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 w-20 rotate-12 bg-white/30 blur-md"
                />
                <span className="relative flex items-center gap-2">
                  <LayoutDashboard size={19} />
                  Back to Dashboard
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* secondary buttons */}
          <motion.div
            variants={itemVariant}
            className="mt-5 flex flex-col justify-center gap-3 sm:flex-row md:mt-6"
          >
            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/8"
            >
              <span className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-300/10 to-cyan-400/0 opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center justify-center gap-2">
                <Bug size={18} className="text-cyan-300" />
                Report a Bug
              </span>
            </motion.button>

            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-pink-300/30 hover:bg-white/8"
            >
              <span className="absolute inset-0 bg-linear-to-r from-pink-400/0 via-pink-300/10 to-pink-400/0 opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center justify-center gap-2">
                <HeartPlus size={18} className="text-pink-300" />
                Contact Support
              </span>
            </motion.button>
          </motion.div>

          {/* bottom subtle text */}
          <motion.p
            variants={itemVariant}
            className="mt-5 text-center text-[10px] tracking-[0.2em] text-white/35 uppercase sm:text-xs md:mt-6"
          >
            Lost Link • Premium Error Experience
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
