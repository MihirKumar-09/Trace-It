import { MapPin, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function RecentReport() {
  const [allReports, setAllReport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://192.168.1.8:8080/reports/allReports?reportType=lost&limit=8",
        );

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();
        setAllReport(data.allReports || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f6f8fc] px-3 py-12 dark:bg-[#020617] sm:px-5 md:px-12">
      {/* =========================
          FULL SCENE ANIMATED BACKGROUND
      ========================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Base layered scene */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_40%,#fdfaf5_100%)] dark:bg-[linear-gradient(180deg,#020617_0%,#081120_45%,#0b1220_100%)]" />

        {/* Fine tech grid */}
        <div className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,65,85,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.08)_1px,transparent_1px)] bg-size-[46px_46px] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
        </div>

        {/* Vertical moving scan rails */}
        <motion.div
          animate={{ x: ["-10%", "110%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-full w-24 skew-x-[-18deg] bg-white/20 blur-xl dark:bg-cyan-400/10"
        />
        <motion.div
          animate={{ x: ["110%", "-20%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-full w-16 skew-x-14 bg-blue-200/20 blur-xl dark:bg-indigo-400/10"
        />
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 h-full w-12 skew-x-[-10deg] bg-orange-200/20 blur-xl dark:bg-orange-400/10"
        />

        {/* Horizontal scan line */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 h-24 w-full bg-[linear-gradient(180deg,transparent,rgba(59,130,246,0.10),transparent)] dark:bg-[linear-gradient(180deg,transparent,rgba(34,211,238,0.10),transparent)]"
        />

        {/* Floating glass panels */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[4%] top-[10%] h-32 w-40 rounded-[28px] border border-white/60 bg-white/35 shadow-[0_20px_40px_rgba(148,163,184,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-x-4 top-4 h-2 rounded-full bg-slate-300/60 dark:bg-white/10" />
          <div className="absolute inset-x-4 top-10 h-2 rounded-full bg-slate-300/40 dark:bg-white/10" />
          <div className="absolute inset-x-4 top-16 h-14 rounded-2xl bg-blue-200/40 dark:bg-cyan-400/10" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 22, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[12%] h-28 w-52 rounded-[30px] border border-white/60 bg-white/30 shadow-[0_20px_40px_rgba(148,163,184,0.15)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute left-4 top-4 h-12 w-12 rounded-2xl bg-violet-200/60 dark:bg-violet-400/15" />
          <div className="absolute right-4 top-5 h-2 w-24 rounded-full bg-slate-300/60 dark:bg-white/10" />
          <div className="absolute right-4 top-11 h-2 w-16 rounded-full bg-slate-300/40 dark:bg-white/10" />
          <div className="absolute inset-x-4 bottom-4 h-8 rounded-2xl bg-orange-200/40 dark:bg-orange-400/10" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[12%] h-24 w-44 rounded-[26px] border border-white/60 bg-white/28 shadow-[0_20px_40px_rgba(148,163,184,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute left-4 top-4 h-3 w-20 rounded-full bg-slate-300/60 dark:bg-white/10" />
          <div className="absolute left-4 top-11 h-3 w-28 rounded-full bg-slate-300/40 dark:bg-white/10" />
          <div className="absolute right-4 top-5 h-10 w-10 rounded-full bg-emerald-200/60 dark:bg-emerald-400/15" />
        </motion.div>

        {/* Orbit rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[16%] h-64 w-64 -translate-x-1/2 rounded-full border border-blue-200/50 dark:border-cyan-400/10"
        >
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/70 dark:bg-cyan-300/80" />
          <div className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-orange-300/70 dark:bg-orange-300/80" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] bottom-[8%] h-72 w-72 rounded-full border border-violet-200/50 dark:border-violet-400/10"
        >
          <div className="absolute left-0 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/70 dark:bg-violet-300/80" />
          <div className="absolute right-0 top-1/2 h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/70 dark:bg-sky-300/80" />
        </motion.div>

        {/* Light columns */}
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3], scaleY: [1, 1.1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-[22%] h-[52%] w-0.5 bg-linear-to-t from-transparent via-blue-400/40 to-transparent dark:via-cyan-300/30"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.7, 0.2], scaleY: [1, 1.15, 1] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute bottom-0 left-[50%] h-[58%] w-0.5 bg-linear-to-t from-transparent via-violet-400/40 to-transparent dark:via-violet-300/30"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.65, 0.2], scaleY: [1, 1.12, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="absolute bottom-0 right-[18%] h-[48%] w-0.5 bg-linear-to-t from-transparent via-orange-400/40 to-transparent dark:via-orange-300/30"
        />

        {/* Ambient floor glow */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(15,23,42,0.08)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.45)_100%)]" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative"
      >
        {/* Top Section */}
        <motion.div
          variants={cardVariants}
          className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
            >
              Recently Lost Items
            </motion.h4>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-2 max-w-xl text-sm text-gray-600 dark:text-slate-400 sm:text-base"
            >
              Stay updated with the latest items reported in your area
            </motion.p>
          </div>

          <Link to="/reports/lost">
            <motion.div
              variants={cardVariants}
              className="hidden md:block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                type="button"
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/40 bg-[linear-gradient(135deg,#3358D4_0%,#4f6ef7_55%,#7c8fff_100%)] px-6 py-3 font-medium text-white shadow-[0_16px_34px_rgba(51,88,212,0.28)] transition dark:border-white/10 dark:shadow-[0_16px_34px_rgba(37,99,235,0.18)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All
                  <MoveRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
              </button>
            </motion.div>
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {allReports.map((report, index) => (
            <motion.div
              key={report._id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.28, ease: "easeOut" },
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_12px_36px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_22px_54px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.82),rgba(17,24,39,0.68))] dark:shadow-[0_16px_45px_rgba(0,0,0,0.32)] dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.42)]"
            >
              {/* Hover texture */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),transparent_30%,rgba(249,115,22,0.08))] opacity-0 transition duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_30%,rgba(168,85,247,0.08))]" />

              {/* Image */}
              <div className="relative h-90 w-full overflow-hidden sm:h-70 md:h-62 lg:h-56">
                <motion.img
                  src={report.image}
                  alt="Report"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent dark:from-black/55 dark:via-black/10" />

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  viewport={{ once: true }}
                  className="absolute left-3 top-3 flex gap-2"
                >
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-semibold shadow-md backdrop-blur-md",
                      report.reportType === "lost"
                        ? "bg-red-500/90 text-white"
                        : "bg-emerald-500/90 text-white",
                    )}
                  >
                    {report.reportType}
                  </span>

                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-[11px] font-semibold shadow-md backdrop-blur-md",
                      report.status === "closed"
                        ? "bg-gray-900/80 text-white dark:bg-white/15 dark:text-white"
                        : "bg-amber-400/90 text-white dark:bg-amber-400/85 dark:text-slate-900",
                    )}
                  >
                    {report.status === "closed" ? "Closed" : "Open"}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative p-5">
                <div className="flex items-start justify-between gap-3">
                  <h6 className="line-clamp-1 text-lg font-bold text-gray-900 dark:text-white">
                    {report.name}
                  </h6>

                  <motion.p
                    whileHover={{ scale: 1.06 }}
                    className="shrink-0 rounded-full border border-orange-100 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-500 dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-300"
                  >
                    {report.category}
                  </motion.p>
                </div>

                {/* Location */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-white/8">
                    <MapPin
                      size={15}
                      className="text-gray-600 dark:text-slate-300"
                    />
                  </div>
                  <span className="line-clamp-1">
                    {report.location?.city}, {report.location?.area}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent dark:via-white/10" />

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-500 dark:text-slate-400">
                    {report?.dateTime
                      ? new Date(report.dateTime).toLocaleString("en-IN", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </span>

                  {report.status !== "closed" ? (
                    <Link to={`/lostItem/${report._id}`}>
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="flex cursor-pointer items-center gap-1 font-semibold text-[#3358D4] dark:text-blue-300"
                      >
                        Details <MoveRight size={16} />
                      </motion.span>
                    </Link>
                  ) : (
                    <span className="flex cursor-not-allowed items-center gap-1 font-semibold text-gray-400 dark:text-slate-500">
                      Details <MoveRight size={16} />
                    </span>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-transparent transition duration-300 group-hover:ring-[#3358D4]/15 dark:group-hover:ring-white/10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile button */}
        <Link to="/reports/lost">
          <motion.button
            type="button"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 block w-full rounded-2xl border border-white/40 bg-[linear-gradient(135deg,#3358D4_0%,#4f6ef7_55%,#7c8fff_100%)] py-3.5 font-semibold text-white shadow-[0_16px_34px_rgba(51,88,212,0.28)] md:hidden dark:border-white/10 dark:shadow-[0_16px_34px_rgba(37,99,235,0.18)]"
          >
            View All
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
