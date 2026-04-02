import { CircleCheck, CirclePlus, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const actions = [
  {
    title: "Report Lost Items",
    to: "/lost-item-form",
    icon: CirclePlus,
    bg: "from-[#163B69] via-[#1B4477] to-[#22548F]",
    glow: "shadow-[0_18px_35px_rgba(27,68,119,0.38)]",
    iconBg: "bg-white/16",
  },
  {
    title: "Report Found Items",
    to: "/found-item-form",
    icon: CircleCheck,
    bg: "from-[#2D4EFF] via-[#2E5BFF] to-[#4A78FF]",
    glow: "shadow-[0_18px_35px_rgba(46,91,255,0.38)]",
    iconBg: "bg-white/16",
  },
];

export default function QuickActions() {
  return (
    <section className="px-4 py-6 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      >
        {/* ambient bg */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />

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
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="relative">
          {/* heading */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-100">
                <Sparkles size={13} />
                Quick Access
              </div>

              <h6 className="text-[18px] font-semibold tracking-tight text-white md:text-[20px]">
                Quick Actions
              </h6>
              <p className="mt-1 text-sm text-white/60">
                Fast shortcuts to create reports
              </p>
            </div>

            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 6, 0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 md:flex"
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
                    className={`group relative flex cursor-pointer items-center justify-between overflow-hidden rounded-2xl bg-linear-to-r ${action.bg} p-4 text-white ${action.glow} transition-all duration-300`}
                  >
                    {/* shine */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.18),transparent)] bg-size-[200%_100%] group-hover:animate-[shine_1.2s_linear]" />

                    <div className="relative flex items-center gap-3">
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 2.2 + index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${action.iconBg} backdrop-blur-md`}
                      >
                        <Icon size={22} />
                      </motion.span>

                      <div>
                        <p className="text-sm font-semibold md:text-[15px]">
                          {action.title}
                        </p>
                        <p className="text-xs text-white/75">
                          Create a new report instantly
                        </p>
                      </div>
                    </div>

                    <motion.span
                      whileHover={{ x: 3 }}
                      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/14 backdrop-blur-md"
                    >
                      <ArrowUpRight size={18} />
                    </motion.span>

                    {/* subtle glow bubble */}
                    <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
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
