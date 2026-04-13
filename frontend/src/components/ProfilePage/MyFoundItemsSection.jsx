import { motion } from "framer-motion";
import {
  BadgeCheck,
  MapPin,
  CalendarDays,
  Clock3,
  Phone,
  Mail,
  PackageCheck,
  ArrowUpRight,
  ShieldCheck,
  FolderOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useReports } from "../../Context/ReportContext";

export default function MyFoundItemsSection() {
  const { reports = [], loading } = useReports();

  const foundReports = [...reports]
    .filter((item) => item.reportType?.toLowerCase() === "found")
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const getStatusClasses = (status) => {
    const value = status?.toLowerCase();

    if (value === "closed" || value === "claimed") {
      return `
        border-emerald-500/20 bg-emerald-500/10 text-emerald-600
        dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200
      `;
    }

    if (value === "open" || value === "active") {
      return `
        border-sky-500/20 bg-sky-500/10 text-sky-700
        dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200
      `;
    }

    return `
      border-slate-300/70 bg-slate-200/60 text-slate-600
      dark:border-white/10 dark:bg-white/5 dark:text-white/70
    `;
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "Unknown date";

    const date = new Date(dateValue);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateValue) => {
    if (!dateValue) return "Unknown time";

    const date = new Date(dateValue);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTimeAgo = (dateValue) => {
    if (!dateValue) return "Recently";

    const date = new Date(dateValue);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    if (seconds < 60) return "Just now";

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hr ago`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day ago`;

    const weeks = Math.floor(days / 7);
    if (weeks < 5) return `${weeks} week ago`;

    const months = Math.floor(days / 30);
    return `${months} month ago`;
  };

  const AnimatedBackground = () => (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10"
      />

      <motion.div
        animate={{
          x: [0, -40, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10"
      />

      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -10, 20, 0],
          scale: [1, 1.05, 0.92, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl dark:bg-indigo-400/10"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_30%)]" />
    </div>
  );

  if (loading) {
    return (
      <section className="relative min-h-[70vh] overflow-hidden rounded-4xl">
        <AnimatedBackground />

        <div className="relative flex min-h-[70vh] items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="
              relative flex w-full max-w-md flex-col items-center rounded-[30px]
              border border-slate-200/80 bg-white/70 px-8 py-12
              shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl
              dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.28)]
            "
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent dark:via-blue-300/80" />

            <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-sky-300/30 bg-sky-500/10 dark:border-blue-300/20 dark:bg-blue-400/10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute h-20 w-20 rounded-full border-[3px] border-slate-300/40 border-t-sky-500 dark:border-white/10 dark:border-t-blue-300"
              />
              <PackageCheck className="h-9 w-9 text-sky-700 dark:text-blue-200" />
            </div>

            <p className="text-lg font-semibold text-slate-800 dark:text-white">
              Loading your found reports...
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-white/60">
              Fetching your found item history
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative space-y-6 overflow-hidden rounded-4xl">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-xl md:p-6
          border-slate-200/80 bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.08)]
          dark:border-white/10 dark:bg-white/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.22)]
        "
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/70 to-transparent dark:via-blue-300/70" />

        <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-200">
              <BadgeCheck size={14} />
              Found Reports
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              My Found Items
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base dark:text-white/65">
              Review every found item report you have submitted. Track status,
              location, timeline, and contact details in one premium view.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            className="
              inline-flex w-fit items-center gap-3 rounded-2xl border px-4 py-3
              border-slate-200/80 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)]
              dark:border-white/10 dark:bg-white/6 dark:shadow-[0_8px_30px_rgba(0,0,0,0.18)]
            "
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-sky-500/15 to-cyan-500/15 text-sky-700 shadow-[0_0_25px_rgba(14,165,233,0.12)] dark:from-blue-400/20 dark:to-cyan-400/20 dark:text-blue-200 dark:shadow-[0_0_25px_rgba(59,130,246,0.15)]">
              <FolderOpen size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-white/45">
                Total Found
              </p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {String(foundReports.length).padStart(2, "0")}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {foundReports.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-[30px] border border-dashed px-6 py-14 text-center backdrop-blur-xl
            border-slate-300/80 bg-white/70 shadow-[0_14px_45px_rgba(15,23,42,0.08)]
            dark:border-white/10 dark:bg-white/5 dark:shadow-[0_14px_45px_rgba(0,0,0,0.22)]
          "
        >
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-200/80 bg-white/80 text-sky-700 dark:border-white/10 dark:bg-white/6 dark:text-blue-200">
            <ShieldCheck size={28} />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
            No found reports yet
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 md:text-base dark:text-white/55">
            You have not created any found item reports yet. Once you submit a
            found report, it will appear here with full details and tracking.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {foundReports.map((item, index) => (
            <motion.article
              key={item._id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="
                group relative overflow-hidden rounded-[30px] border p-5 backdrop-blur-xl md:p-6
                border-slate-200/80 bg-white/72 shadow-[0_14px_40px_rgba(15,23,42,0.08)]
                dark:border-white/10 dark:bg-white/5 dark:shadow-[0_14px_40px_rgba(0,0,0,0.22)]
              "
            >
              <motion.div
                animate={{
                  x: [0, 12, -10, 0],
                  y: [0, -8, 10, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-500/10 blur-2xl dark:bg-blue-400/10"
              />

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_30%)] opacity-60 transition duration-500 group-hover:opacity-90 dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent opacity-80 dark:via-white/40 dark:opacity-50" />

              <div className="relative flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-sky-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
                        found
                      </span>

                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${getStatusClasses(
                          item.status,
                        )}`}
                      >
                        {item.status || "unknown"}
                      </span>
                    </div>

                    <h3 className="mt-3 truncate text-xl font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50">
                      {item.category || "Uncategorized"}
                      {item.color ? ` • ${item.color}` : ""}
                      {item.model ? ` • ${item.model}` : ""}
                    </p>

                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-2.5 py-1 text-xs text-cyan-700 dark:border-white/10 dark:bg-white/6 dark:text-cyan-200">
                      <Clock3 size={13} />
                      {getTimeAgo(item.createdAt)}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-white/40">
                      Found Location
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-white/80">
                      <MapPin
                        size={15}
                        className="text-sky-600 dark:text-blue-200"
                      />
                      {item.location?.city || "Unknown city"}
                      {item.location?.area ? `, ${item.location.area}` : ""}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-white/40">
                      Reported On
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-white/80">
                      <CalendarDays
                        size={15}
                        className="text-cyan-600 dark:text-cyan-200"
                      />
                      {formatDate(item.dateTime)}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-white/55">
                      <Clock3
                        size={15}
                        className="text-cyan-600 dark:text-cyan-200"
                      />
                      {formatTime(item.dateTime)}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-white/40">
                    Description
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-white/65">
                    {item.description || "No description available."}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-white/40">
                      Contact Email
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 break-all text-sm text-slate-700 dark:text-white/80">
                      <Mail
                        size={15}
                        className="text-sky-600 dark:text-blue-200"
                      />
                      {item.contact?.email || "Not provided"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-white/40">
                      Contact Phone
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-white/80">
                      <Phone
                        size={15}
                        className="text-emerald-600 dark:text-emerald-200"
                      />
                      {item.contact?.phone || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-white/40">
                    Report ID: {item._id?.slice(-6) || "N/A"}
                  </div>

                  {item?._id && (
                    <Link
                      to={`/lostItem/${item._id}`}
                      className="
                        group/link inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-medium transition
                        border-slate-200/80 bg-white/80 text-slate-700 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-700
                        dark:border-white/10 dark:bg-white/6 dark:text-white/80 dark:hover:border-cyan-300/20 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-200
                      "
                    >
                      View Details
                      <ArrowUpRight
                        size={16}
                        className="transition duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}
