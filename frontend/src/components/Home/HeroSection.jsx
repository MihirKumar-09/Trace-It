import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.25),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.35),transparent_40%)]" />

        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-10 -left-10 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/30"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-500/30"
        />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:px-10 lg:py-20">
        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-2xl text-center lg:text-left"
        >
          {/* Tag */}
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm backdrop-blur"
          >
            <Sparkles size={16} />
            Community Powered Lost & Found Platform
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Lost Something?
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            custom={0.2}
            className="mt-2 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          >
            <span className="bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let the Community Help You Find It
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            custom={0.3}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg lg:mx-0"
          >
            Lost Link helps people reconnect with their valuable belongings
            through a safe, trusted, and community-driven network.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <Link to="/lost-item">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 rounded-xl bg-black dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-black shadow-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition"
              >
                Report Lost Item
                <ArrowRight
                  className="group-hover:translate-x-1 transition"
                  size={17}
                />
              </motion.button>
            </Link>

            <Link to="/found-item">
              <motion.button
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/10 px-6 py-3.5 text-sm font-semibold text-gray-800 dark:text-white shadow-md hover:bg-blue-50 dark:hover:bg-white/20 transition"
              >
                I Found Something
              </motion.button>
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              {
                icon: <Search size={18} />,
                title: "Smart Reports",
                desc: "Quick item submission",
                color: "blue",
              },
              {
                icon: <ShieldCheck size={18} />,
                title: "Safe & Trusted",
                desc: "Secure reporting flow",
                color: "green",
              },
              {
                icon: <MapPin size={18} />,
                title: "Nearby Support",
                desc: "Community-driven recovery",
                color: "purple",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 shadow-sm backdrop-blur"
              >
                <div className="rounded-full bg-gray-100 dark:bg-white/10 p-2 text-gray-700 dark:text-white">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-md lg:max-w-xl"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative overflow-hidden rounded-[28px] border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-blue-100/40 via-transparent to-purple-100/40 dark:from-blue-500/20 dark:to-purple-500/20" />
            <img
              src="/images/Home/Hero.png"
              alt="Hero"
              className="relative z-10 rounded-2xl object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
