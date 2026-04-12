import { MapPin, MoveRight, Clock3 } from "lucide-react";
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
          "http://192.168.1.8:8080/reports/allReports?limit=4",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch reports");
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
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative px-3 py-12 sm:px-5 md:px-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)]" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/15"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-purple-300/20 blur-3xl dark:bg-purple-500/15"
        />
      </div>

      {/* Header */}
      <motion.div
        variants={fadeUp}
        className="relative mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            Recently Reported
          </h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Stay updated with the latest lost and found items reported nearby
          </p>
        </div>

        <Link to="/reports/all">
          <motion.div className="hidden md:block" variants={fadeUp}>
            <motion.button
              whileHover={{
                y: -3,
                scale: 1.03,
                boxShadow: "0px 16px 35px rgba(51,88,212,0.25)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-blue-200/70 bg-white px-6 py-3 text-sm font-semibold text-[#3358D4] shadow-[0_10px_30px_rgba(51,88,212,0.12)] transition hover:border-blue-300 hover:bg-blue-50 dark:border-white/10 dark:bg-white/8 dark:text-white dark:shadow-[0_12px_30px_rgba(0,0,0,0.28)] dark:hover:bg-white/14"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />
              <span className="relative z-10">View All</span>
            </motion.button>
          </motion.div>
        </Link>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={sectionVariants}
        className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
      >
        {allReports.map((report) => {
          const reportLink =
            report.reportType === "lost"
              ? `/lostItem/${report._id}`
              : `/foundItem/${report._id}`;

          return (
            <motion.div
              key={report._id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f172a]/90 dark:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Image Area */}
              <div className="relative h-80 overflow-hidden bg-linear-to-br from-[#f8f9ff] to-[#e9efff] dark:from-[#0b1220] dark:to-[#111c34]">
                <motion.img
                  src={report.image}
                  alt={report.name || "Report"}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

                {/* Report Type Badge */}
                <motion.span
                  initial={{ opacity: 0, y: -16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md",
                    report.reportType === "lost"
                      ? "bg-red-500/95"
                      : "bg-emerald-500/95",
                  )}
                >
                  {report.reportType === "lost" ? "Lost" : "Found"}
                </motion.span>

                {/* Status Badge */}
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "absolute right-4 top-4 rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md",
                    report.status === "closed"
                      ? "bg-slate-900/90 text-white dark:bg-white/15 dark:text-white"
                      : "bg-white/90 text-[#3358D4] dark:bg-white/12 dark:text-blue-300",
                  )}
                >
                  {report.status === "closed" ? "Closed" : "Open"}
                </motion.span>

                {/* Bottom content on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <motion.h6
                    whileHover={{ x: 3 }}
                    className="line-clamp-1 text-xl font-bold leading-tight"
                  >
                    {report.name}
                  </motion.h6>

                  <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                    <MapPin size={16} />
                    <span className="line-clamp-1">
                      {report.location?.city}, {report.location?.area}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative bg-white p-5 dark:bg-transparent">
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 rounded-full bg-blue-100/50 blur-2xl dark:bg-blue-500/10" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Clock3 size={15} />
                      <span>
                        {new Date(report.dateTime).toLocaleTimeString("en-IN", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <span className="text-sm font-medium text-slate-400 dark:text-slate-500">
                      {new Date(report.dateTime).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="mb-4 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />

                  {report.status !== "closed" ? (
                    <Link to={reportLink}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex cursor-pointer items-center justify-between rounded-2xl border border-[#dbe4ff] bg-[#f7faff] px-4 py-3 transition hover:bg-[#eef4ff] dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10"
                      >
                        <span className="text-sm font-semibold text-[#3358D4] dark:text-blue-300">
                          View Details
                        </span>

                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-[#3358D4] dark:text-blue-300"
                        >
                          <MoveRight size={18} />
                        </motion.div>
                      </motion.div>
                    </Link>
                  ) : (
                    <div className="flex cursor-not-allowed items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                      <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                        Details Unavailable
                      </span>
                      <MoveRight
                        size={18}
                        className="text-slate-300 dark:text-slate-600"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-transparent transition duration-300 group-hover:ring-[#3358D4]/20 dark:group-hover:ring-blue-400/20" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Button */}
      <Link to="/reports/all">
        <motion.button
          variants={fadeUp}
          whileHover={{
            y: -3,
            scale: 1.02,
            boxShadow: "0px 16px 35px rgba(51,88,212,0.25)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="group relative mt-6 block w-full overflow-hidden rounded-xl border border-blue-200/70 bg-white p-3.5 font-semibold text-[#3358D4] shadow-[0_10px_30px_rgba(51,88,212,0.12)] md:hidden dark:border-white/10 dark:bg-white/8 dark:text-white dark:shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
        >
          <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />
          <span className="relative z-10">View All</span>
        </motion.button>
      </Link>
    </motion.section>
  );
}
