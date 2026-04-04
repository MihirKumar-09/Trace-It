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

  if (!user) return <div className="hidden md:flex w-[320px]">Loading...</div>;

  return (
    <aside
      className="
        hidden md:flex
        w-[320px] min-w-[320px] max-w-[320px]
        h-full min-h-0 overflow-hidden
        border-r border-white/10
        bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.26),transparent_28%),linear-gradient(180deg,#071226_0%,#0A1730_42%,#0B1324_100%)]
        text-white
      "
    >
      <div className="flex h-full min-h-0 w-full flex-col px-4 py-4 ">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.015 }}
          className="
    group relative shrink-0 overflow-hidden rounded-3xl
    border border-white/10
    bg-[linear-gradient(135deg,rgba(7,18,35,0.92)_0%,rgba(12,27,52,0.88)_45%,rgba(15,36,68,0.88)_100%)]
    p-3.5 text-white
    shadow-[0_18px_40px_rgba(0,0,0,0.30)]
    backdrop-blur-xl
  "
        >
          {/* top glow line */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />

          {/* animated background glow */}
          <motion.div
            animate={{
              x: [0, 10, -6, 0],
              y: [0, -8, 6, 0],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-400/15 blur-2xl"
          />

          <motion.div
            animate={{
              x: [0, -8, 10, 0],
              y: [0, 8, -4, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-500/15 blur-2xl"
          />

          <div className="relative flex min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              {/* avatar glow */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-cyan-400/25 blur-md"
              />

              {/* animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-0.75 rounded-full border border-cyan-300/30 border-t-cyan-200 border-r-blue-300/40"
              />

              <img
                src={user?.avatar || defaultAvatar}
                alt="profile"
                className="relative h-13 w-13 rounded-full border-2 border-white/15 object-cover shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h6 className="truncate text-[15px] font-bold leading-tight text-white">
                  {user?.name}
                </h6>

                <span className="inline-flex shrink-0 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  Active
                </span>
              </div>

              <p className="mt-1 truncate text-[13px] leading-tight text-slate-300/80">
                {user?.email}
              </p>
            </div>
          </div>

          {/* hover sheen */}
          <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        </motion.div>

        {/* Scrollable Menu Area */}
        <div className="mt-4 flex-1 min-h-0 flex flex-col overflow-hidden">
          <p className="mb-2 px-2 shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Overview
          </p>

          <div className=" flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 no-scrollbar">
            {options.map((option) => {
              const Icon = option.icon;
              const isActive = active === option.name;

              return (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setActive(option.name)}
                  className={cn(
                    "group flex cursor-pointer w-full items-center justify-between rounded-[20px] border px-3 py-3 text-left transition-all duration-300",
                    isActive
                      ? "border-cyan-400/30 bg-linear-to-r from-[#1677FF] to-[#13B8EA] text-white shadow-[0_14px_24px_rgba(19,120,255,0.34)]"
                      : "border-white/10 bg-white/6 text-white/90 hover:border-white/15 hover:bg-white/9",
                  )}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-300",
                        isActive
                          ? "bg-white/14"
                          : "bg-white/6 group-hover:bg-white/10",
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
                      "shrink-0 transition-all duration-300",
                      isActive
                        ? "opacity-100"
                        : "opacity-35 group-hover:translate-x-1 group-hover:opacity-70",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="mt-3 shrink-0 rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <p
            style={{ fontFamily: "MadeWith" }}
            className="text-[20px] leading-none text-white"
          >
            <span className="flex items-center gap-2">
              Made With
              <Heart className="fill-red-500 text-red-500" size={17} />
            </span>
          </p>
          <p className="mt-1 text-[11px] leading-tight text-white/45">
            Premium dashboard experience.
          </p>
        </div>
      </div>
    </aside>
  );
}
