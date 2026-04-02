import { motion } from "framer-motion";
import {
  BadgeCheck,
  Handshake,
  Search,
  TriangleAlert,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import { useAuth } from "../../Context/AuthContext";

const stats = [
  {
    title: "Total Lost",
    value: "12",
    icon: Search,
    iconWrap: "from-sky-400/20 via-cyan-400/10 to-blue-500/20 text-cyan-300",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.18)]",
  },
  {
    title: "Total Found",
    value: "04",
    icon: BadgeCheck,
    iconWrap: "from-blue-400/20 via-indigo-400/10 to-cyan-400/20 text-blue-300",
    glow: "shadow-[0_0_30px_rgba(96,165,250,0.18)]",
  },
  {
    title: "Successful Matches",
    value: "08",
    icon: Handshake,
    iconWrap:
      "from-emerald-400/20 via-teal-400/10 to-cyan-400/20 text-emerald-300",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.18)]",
  },
  {
    title: "Active Reports",
    value: "03",
    icon: TriangleAlert,
    iconWrap: "from-rose-400/20 via-orange-400/10 to-red-500/20 text-rose-300",
    glow: "shadow-[0_0_30px_rgba(251,113,133,0.18)]",
  },
];

export default function DashboardSection() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0">
          <div className="absolute -left-15 -top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-7.5 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex w-full max-w-md flex-col items-center rounded-[30px] border border-white/10 bg-white/4 px-8 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />

          <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute h-20 w-20 rounded-full border-[3px] border-white/10 border-t-cyan-300"
            />
            <LayoutDashboard className="h-9 w-9 text-cyan-200" />
          </div>

          <p className="text-lg font-semibold text-white">
            Loading your saved items...
          </p>
          <p className="mt-2 text-sm text-white/60">
            Fetching your favorite reports
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative">
      {/* top intro block */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/4 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-6"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-cyan-200 uppercase">
              <Sparkles size={14} />
              Dashboard Overview
            </div>

            <h4 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
              Welcome back,{" "}
              <span className="bg-linear-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                {user.name}
              </span>
            </h4>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/65 md:text-base">
              Your Lost Link dashboard is up to date. Track reports, monitor
              matches, and manage your activity from one place.
            </p>
          </div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 4, 0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-cyan-400/15 to-blue-500/15 text-cyan-200 shadow-[0_0_35px_rgba(34,211,238,0.18)]"
          >
            <Sparkles size={28} />
          </motion.div>
        </div>
      </motion.div>

      {/* stat cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4.5 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent opacity-40" />

              <div className="relative flex items-start justify-between">
                <motion.span
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2.8 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br ${item.iconWrap} ${item.glow}`}
                >
                  <Icon size={22} />
                </motion.span>

                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300/70 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
              </div>

              <div className="relative mt-6">
                <p className="text-sm font-medium tracking-wide text-white/65">
                  {item.title}
                </p>

                <div className="mt-2 flex items-end gap-2">
                  <h6 className="text-4xl font-bold leading-none tracking-tight text-white">
                    {item.value}
                  </h6>
                  <span className="pb-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                    stats
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
