import { useAuth } from "../../Context/AuthContext";
import { cn } from "../../lib/utils.js";
import {
  LayoutDashboard,
  Archive,
  BadgeCheck,
  Gift,
  Bookmark,
  Settings,
  Heart,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const options = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "My Lost Items", icon: Archive },
  { name: "My Found Items", icon: BadgeCheck },
  { name: "My Claim", icon: Gift },
  { name: "Saved Items", icon: Bookmark },
  { name: "Settings", icon: Settings },
];

export default function LeftSection({ active, setActive }) {
  const { user } = useAuth();
  const defaultAvatar = "/images/Profile/profile.jpeg";

  if (!user) {
    return (
      <div
        className="
          hidden h-full w-[320px] min-w-[320px] max-w-[320px] md:flex
          border-r border-slate-200/70 bg-white/70 backdrop-blur-xl
          dark:border-white/10 dark:bg-[#081120]
        "
      >
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <aside
      className="
        relative hidden h-full min-h-0 w-[320px] min-w-[320px] max-w-[320px] overflow-hidden md:flex
        border-r border-slate-200/70
        bg-[linear-gradient(180deg,rgba(248,250,252,0.98)_0%,rgba(255,255,255,0.96)_35%,rgba(241,245,249,0.96)_100%)]
        text-slate-900
        dark:border-white/10
        dark:bg-[linear-gradient(180deg,#06101f_0%,#081425_38%,#0a1628_100%)]
        dark:text-white
      "
    >
      {/* Premium animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Light theme glows */}
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -14, 14, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute -top-16 -left-12 h-44 w-44 rounded-full blur-3xl
            bg-blue-500/12 dark:bg-blue-500/12
          "
        />

        <motion.div
          animate={{
            x: [0, -16, 18, 0],
            y: [0, 16, -12, 0],
            scale: [1, 0.95, 1.06, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute -right-10 top-[20%] h-40 w-40 rounded-full blur-3xl
            bg-cyan-400/12 dark:bg-cyan-400/12
          "
        />

        <motion.div
          animate={{
            x: [0, 12, -8, 0],
            y: [0, -10, 12, 0],
            scale: [1, 1.06, 0.94, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute -bottom-8.75 left-[18%] h-36 w-36 rounded-full blur-3xl
            bg-violet-500/10 dark:bg-sky-500/10
          "
        />

        {/* texture lines */}
        <div
          className="
            absolute inset-0 opacity-[0.16]
            bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]
            bg-size-[22px_22px]
            dark:opacity-[0.08]
          "
        />

        {/* edge light */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/55 to-transparent dark:via-cyan-300/65" />
      </div>

      <div className="relative flex h-full min-h-0 w-full flex-col px-4 py-4">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.015 }}
          className="
            group relative shrink-0 overflow-hidden rounded-[28px] border p-3.5 backdrop-blur-xl
            border-white/60 bg-white/70 text-slate-900
            shadow-[0_18px_50px_rgba(15,23,42,0.10)]
            dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(7,18,35,0.92)_0%,rgba(12,27,52,0.88)_45%,rgba(15,36,68,0.88)_100%)] dark:text-white
            dark:shadow-[0_18px_40px_rgba(0,0,0,0.30)]
          "
        >
          {/* top glow line */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/70 to-transparent dark:via-cyan-300/70" />

          {/* animated glow */}
          <motion.div
            animate={{
              x: [0, 10, -6, 0],
              y: [0, -8, 6, 0],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-400/15 blur-2xl dark:bg-cyan-400/15"
          />

          <motion.div
            animate={{
              x: [0, -8, 10, 0],
              y: [0, 8, -4, 0],
              opacity: [0.2, 0.42, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-violet-400/15 blur-2xl dark:bg-blue-500/15"
          />

          <div className="relative flex min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.5, 0.25] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-sky-400/25 blur-md dark:bg-cyan-400/25"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="
                  absolute -inset-0.75 rounded-full border
                  border-sky-300/35 border-t-sky-400 border-r-indigo-300/40
                  dark:border-cyan-300/30 dark:border-t-cyan-200 dark:border-r-blue-300/40
                "
              />

              <img
                src={user?.avatar || defaultAvatar}
                alt="profile"
                className="
                  relative h-13 w-13 rounded-full object-cover
                  border-2 border-white/70 shadow-[0_8px_20px_rgba(15,23,42,0.12)]
                  dark:border-white/15 dark:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                "
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h6 className="truncate text-[15px] font-bold leading-tight text-slate-900 dark:text-white">
                  {user?.name}
                </h6>

                <span
                  className="
                    inline-flex shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]
                    border-sky-300/40 bg-sky-500/10 text-sky-700
                    dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200
                  "
                >
                  Active
                </span>
              </div>

              <p className="mt-1 truncate text-[13px] leading-tight text-slate-500 dark:text-slate-300/80">
                {user?.email}
              </p>
            </div>
          </div>

          {/* subtle hover sheen */}
          <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[120%] dark:via-white/10" />
        </motion.div>

        {/* Scrollable Menu Area */}
        <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden">
          <p className="mb-2 shrink-0 px-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-white/45">
            Overview
          </p>

          <div className="no-scrollbar flex min-h-0 flex-1 flex-col space-y-2 overflow-y-auto pr-1">
            {options.map((option, index) => {
              const Icon = option.icon;
              const isActive = active === option.name;

              return (
                <motion.button
                  key={option.name}
                  type="button"
                  onClick={() => setActive(option.name)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.985 }}
                  className={cn(
                    "group relative flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-[22px] border px-3 py-3 text-left transition-all duration-300",
                    isActive
                      ? `
                        border-sky-300/40
                        bg-[linear-gradient(135deg,rgba(59,130,246,0.95),rgba(14,165,233,0.88),rgba(99,102,241,0.88))]
                        text-white
                        shadow-[0_14px_28px_rgba(59,130,246,0.30)]
                        dark:border-cyan-400/25
                        dark:bg-[linear-gradient(135deg,rgba(22,119,255,0.95),rgba(19,184,234,0.90),rgba(37,99,235,0.92))]
                        dark:shadow-[0_14px_24px_rgba(19,120,255,0.34)]
                      `
                      : `
                        border-white/70 bg-white/55 text-slate-800
                        shadow-[0_8px_22px_rgba(15,23,42,0.05)]
                        hover:border-sky-200/70 hover:bg-white/78 hover:shadow-[0_12px_24px_rgba(59,130,246,0.10)]
                        dark:border-white/10 dark:bg-white/4 dark:text-white/90
                        dark:shadow-none dark:hover:border-white/15 dark:hover:bg-white/[0.07]
                      `,
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-glow"
                      className="absolute inset-0 bg-white/8"
                    />
                  )}

                  {!isActive && (
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-sky-100/60 to-transparent dark:from-cyan-400/10" />
                    </div>
                  )}

                  <div className="relative flex min-w-0 items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-300",
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-700 dark:bg-white/6 dark:text-slate-200 dark:group-hover:bg-white/10 dark:group-hover:text-white",
                      )}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="truncate text-[14px] font-semibold">
                      {option.name}
                    </span>
                  </div>

                  <ChevronRight
                    size={17}
                    className={cn(
                      "relative shrink-0 transition-all duration-300",
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "opacity-35 group-hover:translate-x-1 group-hover:opacity-70 dark:opacity-35",
                    )}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Fixed Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="
            mt-3 shrink-0 rounded-[22px] border px-4 py-3 backdrop-blur-md
            border-white/70 bg-white/60
            shadow-[0_10px_30px_rgba(15,23,42,0.06)]
            dark:border-white/10 dark:bg-white/5
            dark:shadow-none
          "
        >
          <p
            style={{ fontFamily: "MadeWith" }}
            className="text-[20px] leading-none text-slate-900 dark:text-white"
          >
            <span className="flex items-center gap-2">
              Made With
              <Heart className="fill-red-500 text-red-500" size={17} />
            </span>
          </p>

          <p className="mt-1 text-[11px] leading-tight text-slate-500 dark:text-white/45">
            Premium dashboard experience.
          </p>
        </motion.div>
      </div>
    </aside>
  );
}
