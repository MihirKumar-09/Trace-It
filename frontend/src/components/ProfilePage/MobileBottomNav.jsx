import { motion } from "framer-motion";
import { LayoutDashboard, Archive, BadgeCheck, Settings } from "lucide-react";

const options = [
  { name: "Dashboard", label: "Dashboard", icon: LayoutDashboard },
  { name: "My Lost Items", label: "Lost", icon: Archive },
  { name: "My Found Items", label: "Found", icon: BadgeCheck },
  { name: "Settings", label: "Settings", icon: Settings },
];

export default function MobileBottomNav({ active, setActive }) {
  return (
    <section className="pb-20  md:pb-0">
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-20px)] max-w-md -translate-x-1/2 md:hidden">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(10,20,40,0.95)_0%,rgba(13,28,55,0.96)_55%,rgba(10,36,71,0.95)_100%)] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_32%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/80 to-transparent" />

          <div className="relative grid grid-cols-4 gap-1">
            {options.map((option) => {
              const Icon = option.icon;
              const isActive = active === option.name;

              return (
                <motion.button
                  key={option.name}
                  onClick={() => setActive(option.name)}
                  whileTap={{ scale: 0.94 }}
                  className="relative flex flex-col items-center justify-center rounded-2xl px-2 py-2.5"
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-2xl border border-cyan-300/20 bg-linear-to-b from-white/12 to-white/4 shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                    />
                  )}

                  <motion.div
                    animate={
                      isActive
                        ? {
                            y: [-1, -4, -1],
                            scale: [1, 1.08, 1],
                          }
                        : {
                            y: 0,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: isActive ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-linear-to-br from-cyan-400/20 to-blue-500/20 text-cyan-200 shadow-[0_0_22px_rgba(34,211,238,0.16)]"
                          : "text-white/55"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </motion.div>

                  <motion.span
                    animate={
                      isActive ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className={`relative z-10 mt-1 text-[11px] font-medium tracking-wide ${
                      isActive ? "text-white" : "text-white/55"
                    }`}
                  >
                    {option.label}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-2 right-4 z-10 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.95)]"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
