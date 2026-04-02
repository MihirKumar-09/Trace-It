import { ShieldCheck, SquarePen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyFirst() {
  return (
    <section className="mb-12 px-4 py-6 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(73,89,114,0.92)_0%,rgba(58,72,95,0.96)_100%)] px-5 py-5 text-white shadow-[0_20px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        {/* top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />

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
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_32%)]" />

        <div className="relative">
          {/* badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100">
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
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-cyan-400/15 to-blue-500/15 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.14)]"
            >
              <ShieldCheck size={22} />
            </motion.div>

            <div>
              <h6 className="text-[19px] font-semibold tracking-tight md:text-[20px]">
                Safety First
              </h6>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Always meet in public places for item handovers. Consider using
                police station safe zones for safer exchanges and verified
                meetups.
              </p>
            </div>
          </div>

          {/* divider */}
          <div className="my-4 h-px w-full bg-white/10" />

          {/* link */}
          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-xl border border-transparent bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/10 hover:bg-white/10 hover:text-white"
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
