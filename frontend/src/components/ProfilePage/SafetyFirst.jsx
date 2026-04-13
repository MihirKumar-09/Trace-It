import { ShieldCheck, SquarePen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyFirst() {
  return (
    <section className="mb-0 px-0 py-0">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          relative overflow-hidden rounded-[28px] border px-5 py-5 backdrop-blur-xl
          border-white/70
          bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(242,247,255,0.74))]
          text-slate-900
          shadow-[0_18px_50px_rgba(59,130,246,0.10)]
          dark:border-white/10
          dark:bg-[linear-gradient(180deg,rgba(73,89,114,0.92)_0%,rgba(58,72,95,0.96)_100%)]
          dark:text-white
          dark:shadow-[0_20px_55px_rgba(0,0,0,0.28)]
        "
      >
        {/* top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent dark:via-cyan-300/80" />

        {/* background glow */}
        <motion.div
          animate={{
            x: [0, 12, -6, 0],
            y: [0, -10, 8, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-300/20 blur-3xl dark:bg-cyan-400/10"
        />

        <motion.div
          animate={{
            x: [0, -8, 6, 0],
            y: [0, 8, -6, 0],
            scale: [1, 0.96, 1.04, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-violet-300/18 blur-3xl dark:bg-white/5"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_32%)]" />

        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.06] bg-[linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative">
          {/* badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-cyan-100">
            <Sparkles size={13} />
            Protection Tips
          </div>

          {/* heading */}
          <div className="flex items-start gap-3">
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 4, 0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border
                border-sky-200/70
                bg-linear-to-br from-sky-500/12 to-violet-500/12
                text-sky-700
                shadow-[0_0_30px_rgba(59,130,246,0.10)]
                dark:border-white/10
                dark:from-cyan-400/15 dark:to-blue-500/15
                dark:text-cyan-200
                dark:shadow-[0_0_30px_rgba(34,211,238,0.14)]
              "
            >
              <ShieldCheck size={22} />
            </motion.div>

            <div>
              <h6 className="text-[19px] font-semibold tracking-tight text-slate-900 md:text-[20px] dark:text-white">
                Safety First
              </h6>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-white/70">
                Always meet in public places for item handovers. Consider using
                police station safe zones for safer exchanges and verified
                meetups.
              </p>
            </div>
          </div>

          {/* divider */}
          <div className="my-4 h-px w-full bg-slate-200/80 dark:bg-white/10" />

          {/* link */}
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="
              group flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-300
              border-slate-200/80 bg-white/55 text-slate-700
              hover:border-sky-200 hover:bg-white/80 hover:text-sky-700
              dark:border-transparent dark:bg-white/5 dark:text-white/80
              dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white
            "
          >
            Read safety guidelines
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
            >
              <SquarePen size={17} />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
