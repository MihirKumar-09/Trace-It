import { motion, AnimatePresence } from "framer-motion";
import DashboardSection from "./DashboardSection";
import MyLostItemSection from "./MyLostItemsSection";
import MyFoundItemSection from "./MyFoundItemsSection";
import MyClaimSection from "./MyClaimSection";
import SavedItemSection from "./SavedItemSection";
import SettingSection from "./SettingSection";

export default function RightSection({ active }) {
  const renderSection = () => {
    switch (active) {
      case "Dashboard":
        return <DashboardSection />;
      case "My Lost Items":
        return <MyLostItemSection />;
      case "My Found Items":
        return <MyFoundItemSection />;
      case "My Claim":
        return <MyClaimSection />;
      case "Saved Items":
        return <SavedItemSection />;
      case "Settings":
        return <SettingSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <section className="w-full h-full px-4 py-6 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          group relative h-full w-full overflow-hidden
          rounded-[30px] border border-white/10
          bg-[linear-gradient(135deg,#081428_0%,#0A1830_22%,#0B1E3D_48%,#0D254A_72%,#0E2D57_100%)]
          shadow-[0_25px_70px_rgba(0,0,0,0.35)]
        "
      >
        {/* animated background layers */}
        <motion.div
          animate={{
            x: [0, 24, -10, 0],
            y: [0, -18, 14, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 16, 0],
            y: [0, 16, -14, 0],
            scale: [1, 0.96, 1.06, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-15 -left-10 h-80 w-80 rounded-full bg-blue-500/12 blur-3xl"
        />

        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_32%)]"
        />

        {/* subtle grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-size-[28px_28px]" />

        {/* top premium line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-cyan-300/90 to-transparent" />

        {/* animated side glow border */}
        <motion.div
          animate={{ opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/10"
        />

        {/* floating mini particles */}
        <motion.span
          animate={{ y: [0, -10, 0], opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-cyan-300/70 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
        />
        <motion.span
          animate={{ y: [0, 12, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-blue-300/70 shadow-[0_0_20px_rgba(96,165,250,0.8)]"
        />
        <motion.span
          animate={{ x: [0, 10, 0], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute bottom-[22%] left-[26%] h-1.5 w-1.5 rounded-full bg-sky-200/70 shadow-[0_0_18px_rgba(186,230,253,0.8)]"
        />

        {/* content area */}
        <div className="relative h-full w-full overflow-y-auto no-scrollbar p-4 md:p-5 lg:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.985,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, scale: 0.985, filter: "blur(6px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full w-full text-white"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
