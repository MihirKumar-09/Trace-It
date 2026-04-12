import { FcAnswers, FcOnlineSupport, FcLike } from "react-icons/fc";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FcAnswers size={42} />,
    title: "Report",
    description:
      "Provide details, photos, and the approximate location of the item lost or found.",
  },
  {
    icon: <FcOnlineSupport size={42} />,
    title: "Community Helps",
    description:
      "Our automated matching system and local community members identify potential matches.",
  },
  {
    icon: <FcLike size={42} />,
    title: "Safely Reconnect",
    description:
      "Coordinate a safe meeting point through our secure messaging to return the item.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HowWork() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden px-3 py-16 text-center sm:px-5 md:px-12 bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF4FF_50%,#F8FAFC_100%)] dark:bg-[linear-gradient(180deg,#020617_0%,#0B1220_50%,#020617_100%)]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/15" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl dark:bg-purple-500/15" />

        <motion.div
          animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10"
        />

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-0 h-60 w-60 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10"
        />
      </div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
        >
          How Lost Link Works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base"
        >
          Reuniting with your belongings is as simple as these three steps.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
              className="group relative overflow-hidden rounded-3xl border border-blue-100/80 bg-white/80 p-8 shadow-[0_10px_30px_rgba(37,99,235,0.08)] backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:shadow-[0_14px_35px_rgba(0,0,0,0.35)]"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-50 via-white to-indigo-50 opacity-0 transition duration-500 group-hover:opacity-100 dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10" />

              {/* Hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition duration-300 group-hover:ring-blue-300/40 dark:group-hover:ring-blue-400/20" />

              {/* Top glow */}
              <div className="absolute -top-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />

              <div className="relative z-10 flex flex-col items-center">
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/50 bg-linear-to-br from-blue-100 to-indigo-100 shadow-[0_10px_25px_rgba(59,130,246,0.18)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] dark:shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                >
                  {step.icon}
                </motion.span>

                <h4 className="mb-3 mt-5 text-lg font-semibold text-slate-800 dark:text-white md:text-2xl">
                  {step.title}
                </h4>

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
