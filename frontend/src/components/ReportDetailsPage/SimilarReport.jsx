import { useState, useEffect } from "react";
import {
  MapPin,
  MoveRight,
  Clock3,
  Sparkles,
  ShieldCheck,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { API_URL } from "../../lib/api.js";

export default function SimilarReport() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${API_URL}/reports/allReports?status=open&limit=20`,
        );

        console.log("STATUS:", res.status);

        const data = await res.json();

        console.log("DATA:", data);

        setReports(Array.isArray(data.allReports) ? data.allReports : []);
      } catch (err) {
        console.log("Fetch error:", err);
        setReports([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-5 md:px-6">
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-10 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-5 md:p-6"
      >
        {/* Header */}
        <motion.div
          variants={fadeUp}
          className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
            >
              <motion.div
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={15} />
              </motion.div>
              Open Reports
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Explore Active Community Reports
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base"
            >
              Browse recently submitted open reports and quickly jump into the
              details page to verify item information, location, and time.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 backdrop-blur-md md:flex"
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300"
            >
              <ShieldCheck size={18} />
            </motion.div>
            <div>
              <p className="font-semibold text-white">Live Open Feed</p>
              <p className="text-xs text-gray-400">
                Showing latest available reports
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Loading */}
        {loading ? (
          <motion.div
            variants={fadeUp}
            className="flex min-h-52 flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300"
            >
              <Search size={24} />
            </motion.div>
            <p className="text-base font-semibold text-white">
              Loading open reports...
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Please wait while we fetch the latest data.
            </p>
          </motion.div>
        ) : reports.length === 0 ? (
          <motion.div
            variants={fadeUp}
            className="flex min-h-52 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 text-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300"
            >
              <Search size={24} />
            </motion.div>
            <p className="text-base font-semibold text-white">
              No open reports found
            </p>
            <p className="mt-1 text-sm text-gray-400">
              There are currently no active reports to display.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={sectionVariants}
            className="flex gap-6 overflow-x-auto pb-2 no-scrollbar"
          >
            {reports.map((report) => (
              <motion.div
                key={report._id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative min-w-72.5 overflow-hidden rounded-[26px] border border-white/10 bg-white/8 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:min-w-[320px]"
              >
                {/* Image section */}
                <div className="relative overflow-hidden rounded-[20px]">
                  <motion.img
                    src={report.image}
                    alt={report.name}
                    className="h-48 w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                  <motion.div
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Open
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="line-clamp-1 text-lg font-bold text-white">
                      {report.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-white/85">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <MapPin size={15} />
                      </motion.div>
                      <span className="line-clamp-1">
                        {report.location?.city}, {report.location?.area}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="relative p-3">
                  <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-blue-400/10 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <motion.div
                          animate={{ rotate: [0, 8, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-cyan-300"
                        >
                          <Clock3 size={15} />
                        </motion.div>
                        <span>
                          {new Date(report.dateTime).toLocaleTimeString(
                            "en-IN",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            },
                          )}
                        </span>
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                        {new Date(report.dateTime).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                        })}
                      </span>
                    </div>

                    <div className="mb-4 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

                    <Link to={`/report/${report._id}`}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between rounded-2xl border border-blue-400/15 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/15"
                      >
                        <span>View Details</span>

                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <MoveRight size={17} />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-transparent transition duration-300 group-hover:ring-cyan-400/20" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
