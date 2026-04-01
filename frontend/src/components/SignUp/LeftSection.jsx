import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
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
      ease: "easeOut",
    },
  },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function LeftSection() {
  return (
    <section className="hidden md:block md:w-1/2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative flex min-h-screen h-full flex-col justify-between overflow-hidden bg-linear-to-b from-[#012662] via-[#091d45] to-[#0D172E] px-8 py-12 lg:px-16"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 -left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 -right-15 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
        </div>

        {/* Top Content */}
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md shadow-lg"
          >
            Trusted by communities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-white text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight"
          >
            Join the
            <br />
            Community
            <br />
            Helping Return
            <br />
            Lost Items
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-sm sm:text-base leading-7 text-white/75"
          >
            Lost Link connects people who lost items with those who found them,
            making recovery simple, secure, and much faster.
          </motion.p>

          {/* Feature chips */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
              Secure Reports
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
              Fast Recovery
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">
              Community Powered
            </span>
          </motion.div>

          {/* Image Card */}
          <motion.div
            variants={fadeUp}
            animate={floatAnimation}
            className="relative mt-10 max-w-sm"
          >
            <div className="absolute -inset-3 rounded-[28px] bg-linear-to-r from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="overflow-hidden rounded-[22px]">
                <motion.img
                  src="/images/SignUp/leftSection.png"
                  alt="Left Section"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Floating mini card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-[#0f224d]/80 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <p className="text-xs text-white/60">Recovery success</p>
                <h4 className="text-lg font-semibold text-white">
                  24/7 Support
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="relative z-10 mt-10 border-t border-white/10 pt-6"
        >
          <ul className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/45">
            <li className="cursor-pointer transition hover:text-white/80">
              Privacy Policy
            </li>
            <li className="cursor-pointer transition hover:text-white/80">
              Terms of Service
            </li>
            <li className="text-white/35">&copy; 2026 Lost Link</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
