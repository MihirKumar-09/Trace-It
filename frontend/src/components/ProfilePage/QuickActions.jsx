import { CircleCheck, CirclePlus, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const actions = [
  {
    title: "Report Lost Items",
    to: "/lost-item-form",
    icon: CirclePlus,
    bg: `
      from-[#dff3ff] via-[#cce7ff] to-[#b7dcff]
      dark:from-[#163B69] dark:via-[#1B4477] dark:to-[#22548F]
    `,
    glow: `
      shadow-[0_18px_35px_rgba(59,130,246,0.14)]
      dark:shadow-[0_18px_35px_rgba(27,68,119,0.38)]
    `,
    iconBg: `
      bg-white/65 text-sky-700
      dark:bg-white/16 dark:text-white
    `,
    arrowBg: `
      bg-white/55 text-sky-700
      dark:bg-white/14 dark:text-white
    `,
  },
  {
    title: "Report Found Items",
    to: "/found-item-form",
    icon: CircleCheck,
    bg: `
      from-[#dfe4ff] via-[#cfd9ff] to-[#bcccff]
      dark:from-[#2D4EFF] dark:via-[#2E5BFF] dark:to-[#4A78FF]
    `,
    glow: `
      shadow-[0_18px_35px_rgba(99,102,241,0.14)]
      dark:shadow-[0_18px_35px_rgba(46,91,255,0.38)]
    `,
    iconBg: `
      bg-white/65 text-indigo-700
      dark:bg-white/16 dark:text-white
    `,
    arrowBg: `
      bg-white/55 text-indigo-700
      dark:bg-white/14 dark:text-white
    `,
  },
];

export default function QuickActions() {
  return (
    <section className="px-0 py-0">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-xl
          border-white/70
          bg-[linear-gradient(145deg,rgba(255,255,255,0.80),rgba(241,247,255,0.72))]
          shadow-[0_18px_50px_rgba(59,130,246,0.10)]
          dark:border-white/10
          dark:bg-[linear-gradient(145deg,rgba(9,24,45,0.88),rgba(11,30,56,0.76))]
          dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]
        "
      >
        {/* ambient bg */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent dark:via-cyan-300/80" />

        {/* floating glow */}
        <motion.div
          animate={{
            x: [0, 10, -6, 0],
            y: [0, -8, 6, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl dark:bg-cyan-400/10"
        />

        <motion.div
          animate={{
            x: [0, -8, 8, 0],
            y: [0, 8, -6, 0],
            scale: [1, 0.96, 1.04, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-violet-300/18 blur-3xl dark:bg-blue-500/10"
        />

        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.06] bg-[linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative">
          {/* heading */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-700 dark:border-cyan-300/15 dark:bg-cyan-400/10 dark:text-cyan-100">
                <Sparkles size={13} />
                Quick Access
              </div>

              <h6 className="text-[18px] font-semibold tracking-tight text-slate-900 md:text-[20px] dark:text-white">
                Quick Actions
              </h6>
              <p className="mt-1 text-sm text-slate-600 dark:text-white/60">
                Fast shortcuts to create reports
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="
                hidden h-12 w-12 items-center justify-center rounded-2xl border md:flex
                border-sky-200/70 bg-white/60 text-sky-700
                dark:border-white/10 dark:bg-white/5 dark:text-cyan-200
              "
            >
              <Sparkles size={18} />
            </motion.div>
          </div>

          {/* actions */}
          <div className="flex flex-col gap-3">
            {actions.map((action, index) => {
              const Icon = action.icon;

              return (
                <Link to={action.to} key={action.title}>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className={`
                      group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-3xl
                      border border-white/40 bg-linear-to-r p-4 text-slate-900 transition-all duration-300
                      dark:border-white/8 dark:text-white
                      ${action.bg} ${action.glow}
                    `}
                  >
                    {/* shine */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.22),transparent)] bg-size-[200%_100%] group-hover:animate-[shine_1.2s_linear]" />

                    {/* soft glow */}
                    <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/18 blur-2xl dark:bg-white/10" />

                    <div className="relative flex items-center gap-3">
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2.2 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`flex h-11 w-11 items-center justify-center rounded-xl backdrop-blur-md ${action.iconBg}`}
                      >
                        <Icon size={22} />
                      </motion.span>

                      <div>
                        <p className="text-sm font-semibold md:text-[15px]">
                          {action.title}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-white/75">
                          Create a new report instantly
                        </p>
                      </div>
                    </div>

                    <motion.span
                      whileHover={{ x: 3 }}
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md ${action.arrowBg}`}
                    >
                      <ArrowUpRight size={18} />
                    </motion.span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>

      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}
      </style>
    </section>
  );
}
