import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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

function FloatingNode({ className = "", delay = 0, duration = 6 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.45, 0.95, 0.45],
        y: [0, -14, 0],
        x: [0, 8, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    />
  );
}

function MovingBeam({
  className = "",
  delay = 0,
  duration = 5,
  rotate = "0deg",
}) {
  return (
    <motion.div
      initial={{ opacity: 0.2, x: "-20%" }}
      animate={{
        opacity: [0.15, 0.9, 0.15],
        x: ["-20%", "120%"],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ rotate }}
      className={className}
    />
  );
}

export default function LeftSection() {
  return (
    <section className="hidden md:block md:w-1/2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative flex min-h-screen h-full flex-col justify-between overflow-hidden
        bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(237,244,255,0.92)_28%,rgba(224,236,255,0.86)_48%,rgba(206,225,255,0.84)_68%,rgba(186,212,255,0.82)_100%)]
        dark:bg-[radial-gradient(circle_at_top_left,rgba(14,24,47,0.98),rgba(10,18,37,0.98)_28%,rgba(7,14,30,0.98)_52%,rgba(4,10,23,1)_78%,rgba(2,6,16,1)_100%)]
        px-8 py-12 lg:px-16"
      >
        {/* Animated scene background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* soft atmosphere */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-12 -left-10 h-72 w-72 rounded-full
            bg-cyan-300/30 blur-3xl
            dark:bg-cyan-500/10"
          />

          <motion.div
            animate={{
              x: [0, -24, 0],
              y: [0, 22, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 right-0 h-80 w-80 rounded-full
            bg-blue-300/25 blur-3xl
            dark:bg-blue-600/10"
          />

          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0
            bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.85),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_20%)]
            dark:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_22%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.08),transparent_20%)]"
          />

          {/* network ring scene */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 26,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-[10%] top-[14%] h-44 w-44 rounded-full border
              border-sky-400/25 dark:border-cyan-400/15"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute right-[14%] top-[12%] h-36 w-36 rounded-full border
              border-blue-400/25 dark:border-sky-500/15"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-[12%] left-[18%] h-56 w-56 rounded-full border
              border-cyan-300/20 dark:border-cyan-300/10"
            />

            {/* orbit dots */}
            <FloatingNode
              delay={0.2}
              duration={4.6}
              className="absolute left-[18%] top-[18%] h-4 w-4 rounded-full
              bg-white shadow-[0_0_25px_rgba(255,255,255,0.9)]
              dark:bg-cyan-300 dark:shadow-[0_0_20px_rgba(34,211,238,0.55)]"
            />
            <FloatingNode
              delay={0.7}
              duration={5.4}
              className="absolute right-[22%] top-[20%] h-3.5 w-3.5 rounded-full
              bg-sky-400 shadow-[0_0_22px_rgba(56,189,248,0.55)]
              dark:bg-sky-400 dark:shadow-[0_0_18px_rgba(56,189,248,0.45)]"
            />
            <FloatingNode
              delay={1.2}
              duration={5.8}
              className="absolute bottom-[18%] left-[28%] h-4 w-4 rounded-full
              bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.5)]
              dark:bg-cyan-200 dark:shadow-[0_0_18px_rgba(165,243,252,0.35)]"
            />
            <FloatingNode
              delay={0.5}
              duration={6.3}
              className="absolute right-[16%] bottom-[24%] h-5 w-5 rounded-full
              bg-blue-300 shadow-[0_0_24px_rgba(147,197,253,0.45)]
              dark:bg-blue-400 dark:shadow-[0_0_20px_rgba(96,165,250,0.35)]"
            />

            {/* animated connection beams */}
            <div className="absolute left-[12%] top-[28%] h-px w-[58%] overflow-hidden rounded-full bg-sky-300/20 dark:bg-cyan-400/10">
              <MovingBeam
                delay={0}
                duration={5}
                className="h-full w-24 bg-linear-to-r from-transparent via-sky-400/80 to-transparent dark:via-cyan-300/70"
              />
            </div>

            <div className="absolute right-[12%] top-[36%] h-px w-[42%] overflow-hidden rounded-full bg-blue-300/20 dark:bg-sky-400/10">
              <MovingBeam
                delay={1}
                duration={4.2}
                rotate="-18deg"
                className="h-full w-24 bg-linear-to-r from-transparent via-blue-400/80 to-transparent dark:via-sky-300/70"
              />
            </div>

            <div className="absolute left-[20%] bottom-[24%] h-px w-[48%] overflow-hidden rounded-full bg-cyan-300/20 dark:bg-cyan-300/10">
              <MovingBeam
                delay={0.6}
                duration={5.8}
                rotate="12deg"
                className="h-full w-24 bg-linear-to-r from-transparent via-cyan-400/80 to-transparent dark:via-cyan-200/70"
              />
            </div>

            {/* center glass sign-in style card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.6, 0, -0.6, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[18%] hidden w-60 -translate-x-1/2 rounded-[30px]
              border border-white/50 bg-white/55 p-4 shadow-[0_18px_60px_rgba(59,130,246,0.18)] backdrop-blur-2xl
              lg:block
              dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm dark:bg-[#0f172a]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="h-5 w-5"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.3 14.7l6.6 4.8C14.7 15.3 19 12 24 12c3 0 5.8 1.1 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.6-6 7.1l.1-.1 6.2 5.2C35.2 40.6 44 34 44 24c0-1.3-.1-2.3-.4-3.5z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] text-slate-500 dark:text-white/45">
                    QUICK ACCESS
                  </p>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                    Sign up with Google
                  </h4>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-2 rounded-full bg-sky-300/60 dark:bg-cyan-400/30" />
                <div className="h-2 rounded-full bg-blue-300/50 dark:bg-sky-400/20" />
                <div className="h-2 rounded-full bg-cyan-200/70 dark:bg-white/10" />
              </div>
            </motion.div>
          </div>

          {/* subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.18] dark:opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
            }}
          />
        </div>

        {/* Top Content */}
        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full border
            border-sky-200/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-md shadow-lg
            dark:border-white/15 dark:bg-white/10 dark:text-white/85"
          >
            Trusted by communities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 lg:text-5xl dark:text-white"
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
            className="mt-6 max-w-md text-sm leading-7 text-slate-600 sm:text-base dark:text-white/75"
          >
            Lost Link connects people who lost items with those who found them,
            making recovery simple, secure, and much faster.
          </motion.p>

          {/* Feature chips */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <span
              className="rounded-full border border-sky-200/80 bg-white/60 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur-md
              dark:border-white/15 dark:bg-white/10 dark:text-white/80"
            >
              Secure Reports
            </span>
            <span
              className="rounded-full border border-sky-200/80 bg-white/60 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur-md
              dark:border-white/15 dark:bg-white/10 dark:text-white/80"
            >
              Fast Recovery
            </span>
            <span
              className="rounded-full border border-sky-200/80 bg-white/60 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur-md
              dark:border-white/15 dark:bg-white/10 dark:text-white/80"
            >
              Community Powered
            </span>
          </motion.div>

          {/* Image Card */}
          <motion.div
            variants={fadeUp}
            animate={floatAnimation}
            className="relative mt-10 max-w-sm"
          >
            <div
              className="absolute -inset-3 rounded-[28px]
              bg-linear-to-r from-sky-300/35 via-cyan-200/25 to-transparent blur-2xl
              dark:from-cyan-500/20 dark:via-blue-500/10"
            />

            <div
              className="relative overflow-hidden rounded-[28px] border
              border-white/70 bg-white/55 p-3 backdrop-blur-xl shadow-[0_20px_60px_rgba(59,130,246,0.18)]
              dark:border-white/15 dark:bg-white/10 dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
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
                className="absolute bottom-6 left-6 rounded-2xl border
                border-white/70 bg-white/75 px-4 py-3 backdrop-blur-xl shadow-xl
                dark:border-white/15 dark:bg-[#0f224d]/80"
              >
                <p className="text-xs text-slate-500 dark:text-white/60">
                  Recovery success
                </p>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  24/7 Support
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          className="relative z-10 mt-10 border-t border-slate-300/60 pt-6 dark:border-white/10"
        >
          <ul className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:text-sm dark:text-white/45">
            <li className="cursor-pointer transition hover:text-slate-800 dark:hover:text-white/80">
              Privacy Policy
            </li>
            <li className="cursor-pointer transition hover:text-slate-800 dark:hover:text-white/80">
              Terms of Service
            </li>
            <li className="text-slate-400 dark:text-white/35">
              &copy; 2026 Lost Link
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
