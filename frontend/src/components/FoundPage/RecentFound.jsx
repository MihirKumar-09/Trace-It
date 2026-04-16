import { MapPin, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";
import { Link } from "react-router-dom";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function RecentFound() {
  const [allReports, setAllReport] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://192.168.1.8:8080/reports/allReports?reportType=found&limit=8",
        );
        if (!res.ok) {
          throw new Error("Failed");
        }
        const data = await res.json();
        setAllReport(data.allReports);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      className="
        px-3 py-12 sm:px-5 md:px-12
        bg-linear-to-b
        from-[#f8fafc] via-[#fdfdfd] to-[#fff7ed]
        dark:from-[#020617] dark:via-[#0f172a] dark:to-[#111827]
        transition-colors duration-300
      "
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
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
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-white"
            >
              Recently Found Items
            </motion.h4>

            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-2 max-w-xl text-sm text-gray-500 sm:text-base dark:text-slate-400"
            >
              Stay updated with the latest items reported in your area
            </motion.p>
          </div>

          <Link to="/reports/found">
            <motion.div
              variants={cardVariants}
              className="hidden md:block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                className="
                  group relative cursor-pointer overflow-hidden rounded-2xl px-6 py-3
                  font-medium text-white
                  bg-linear-to-r from-[#3358D4] via-[#4f6ef7] to-[#6b7cff]
                  shadow-[0_12px_30px_rgba(51,88,212,0.28)]
                  dark:shadow-[0_12px_30px_rgba(59,130,246,0.18)]
                  transition
                "
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
              className="
                group relative overflow-hidden rounded-[28px] border
                border-black/5 bg-white/80 backdrop-blur-xl
                shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                dark:border-white/10 dark:bg-white/5
                dark:shadow-[0_10px_35px_rgba(0,0,0,0.35)]
                dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                transition-all duration-300
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.10),transparent_35%)]
                  dark:bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.20),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.16),transparent_35%)]
                "
              />

              {/* Image */}
              <div className="relative h-90 w-full overflow-hidden sm:h-70 md:h-62 lg:h-56">
                <motion.img
                  src={report.image}
                  alt="Report"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent dark:from-black/60 dark:via-black/20 dark:to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  viewport={{ once: true }}
                  className="absolute top-3 left-3 flex gap-2"
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
                        ? "bg-gray-900/80 text-white dark:bg-white/20 dark:text-white"
                        : "bg-amber-400/90 text-white",
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
                    className="
                      shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold
                      bg-orange-50 border-orange-100 text-orange-500
                      dark:bg-orange-500/10 dark:border-orange-400/20 dark:text-orange-300
                    "
                  >
                    {report.category}
                  </motion.p>
                </div>

                {/* Location */}
                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
                    <MapPin
                      size={15}
                      className="text-gray-600 dark:text-slate-300"
                    />
                  </div>
                  <span className="line-clamp-1">
                    {report.location.city}, {report.location.area}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-4 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent dark:via-white/10" />

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-500 dark:text-slate-400">
                    {new Date(report?.dateTime).toLocaleString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>

                  {report.status !== "closed" ? (
                    <Link to={`/report/${report._id}`}>
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="flex cursor-pointer items-center gap-1 font-semibold text-[#3358D4] dark:text-blue-400"
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
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile button */}
        <Link to="/reports/found">
          <motion.button
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
              mt-7 block w-full rounded-2xl py-3.5 font-semibold text-white md:hidden
              bg-linear-to-r from-[#3358D4] via-[#4f6ef7] to-[#6b7cff]
              shadow-[0_12px_30px_rgba(51,88,212,0.28)]
              dark:shadow-[0_12px_30px_rgba(59,130,246,0.18)]
            "
          >
            View All
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
