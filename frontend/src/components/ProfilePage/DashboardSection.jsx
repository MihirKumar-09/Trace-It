import { motion } from "framer-motion";
import {
  BadgeCheck,
  Handshake,
  Search,
  TriangleAlert,
  Sparkles,
  LayoutDashboard,
  Clock3,
  FolderOpen,
  TrendingUp,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { useAuth } from "../../Context/AuthContext";
import { useReports } from "../../Context/ReportContext";
import { Link } from "react-router-dom";

const floatTransition = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function DashboardSection() {
  const { user, loading: authLoading } = useAuth();
  const {
    totalLostReports = 0,
    totalFoundReports = 0,
    totalReports = 0,
    reports = [],
    loading: reportLoading,
  } = useReports();

  const loading = authLoading || reportLoading;

  const successfulMatches = reports.filter(
    (item) =>
      item.status?.toLowerCase() === "claimed" ||
      item.status?.toLowerCase() === "closed",
  ).length;

  const activeReports = reports.filter(
    (item) =>
      item.status?.toLowerCase() === "open" ||
      item.status?.toLowerCase() === "active",
  ).length;

  const closedReports = reports.filter(
    (item) => item.status?.toLowerCase() === "closed",
  ).length;

  const successRate =
    totalReports === 0
      ? 0
      : Math.round((successfulMatches / totalReports) * 100);

  const recentReports = [...reports]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const latestReport = recentReports[0];

  const categoryCount = reports.reduce((acc, item) => {
    const key = item.category || "Others";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const topCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const stats = [
    {
      title: "Total Lost",
      value: totalLostReports,
      icon: Search,
      iconWrap:
        "from-sky-500/18 via-cyan-400/14 to-blue-500/18 text-sky-700 dark:from-cyan-400/20 dark:via-sky-400/12 dark:to-blue-500/18 dark:text-cyan-200",
      dot: "bg-cyan-500 dark:bg-cyan-300",
    },
    {
      title: "Total Found",
      value: totalFoundReports,
      icon: BadgeCheck,
      iconWrap:
        "from-blue-500/18 via-indigo-400/14 to-sky-500/18 text-blue-700 dark:from-blue-400/20 dark:via-indigo-400/12 dark:to-cyan-400/18 dark:text-blue-200",
      dot: "bg-blue-500 dark:bg-blue-300",
    },
    {
      title: "Successful Matches",
      value: successfulMatches,
      icon: Handshake,
      iconWrap:
        "from-emerald-500/18 via-teal-400/14 to-cyan-400/18 text-emerald-700 dark:from-emerald-400/20 dark:via-teal-400/12 dark:to-cyan-400/18 dark:text-emerald-200",
      dot: "bg-emerald-500 dark:bg-emerald-300",
    },
    {
      title: "Active Reports",
      value: activeReports || totalReports,
      icon: TriangleAlert,
      iconWrap:
        "from-rose-500/18 via-orange-400/14 to-red-500/18 text-rose-700 dark:from-rose-400/20 dark:via-orange-400/12 dark:to-red-500/18 dark:text-rose-200",
      dot: "bg-rose-500 dark:bg-rose-300",
    },
  ];

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

  const getStatusClasses = (status) => {
    const value = status?.toLowerCase();

    if (value === "closed" || value === "claimed") {
      return "border-emerald-300/55 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200";
    }

    if (value === "open" || value === "active") {
      return "border-cyan-300/55 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200";
    }

    return "border-slate-300/70 bg-slate-100/80 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70";
  };

  const getReportTypeClasses = (type) => {
    const value = type?.toLowerCase();

    if (value === "lost") {
      return "border-rose-300/55 bg-rose-500/10 text-rose-700 dark:border-rose-400/20 dark:bg-rose-400/10 dark:text-rose-200";
    }

    if (value === "found") {
      return "border-blue-300/55 bg-blue-500/10 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200";
    }

    return "border-slate-300/70 bg-slate-100/80 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70";
  };

  if (loading) {
    return (
      <section className="relative min-h-[70vh] overflow-hidden border border-sky-200/60 bg-[linear-gradient(135deg,#f8fbff_0%,#eef5ff_30%,#fdfcff_65%,#eef8ff_100%)] px-4 dark:border-cyan-500/15 dark:bg-[linear-gradient(135deg,#031126_0%,#071a35_30%,#0a1e3e_58%,#0a1730_100%)]">
        <DashboardAmbientBackground />

        <div className="relative flex min-h-[70vh] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex w-full max-w-md flex-col items-center rounded-[30px] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(244,248,255,0.76))] px-8 py-12 shadow-[0_24px_60px_rgba(59,130,246,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(10,24,45,0.84),rgba(11,31,56,0.72))] dark:shadow-[0_24px_60px_rgba(0,0,0,0.30)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/80 to-transparent dark:via-cyan-300/80" />

            <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-sky-300/35 bg-sky-500/10 dark:border-cyan-300/20 dark:bg-cyan-400/10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute h-20 w-20 rounded-full border-[3px] border-slate-200/70 border-t-sky-500 dark:border-white/10 dark:border-t-cyan-300"
              />
              <LayoutDashboard className="h-9 w-9 text-sky-700 dark:text-cyan-200" />
            </div>

            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Loading your dashboard...
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-white/60">
              Fetching your reports and insights
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="
        relative overflow-hidden border p-4 md:p-6
        border-sky-200/60
        bg-[linear-gradient(135deg,#f8fbff_0%,#eef5ff_30%,#fdfcff_65%,#eef8ff_100%)]
        shadow-[0_20px_70px_rgba(148,163,184,0.18)]
        dark:border-cyan-500/15
        dark:bg-[linear-gradient(135deg,#031126_0%,#071a35_30%,#0a1e3e_58%,#0a1730_100%)]
        dark:shadow-[0_20px_70px_rgba(2,6,23,0.42)]
      "
    >
      <DashboardAmbientBackground />

      <div className="relative space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="
            relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-xl md:p-6
            border-white/70
            bg-[linear-gradient(145deg,rgba(255,255,255,0.84),rgba(244,248,255,0.76))]
            shadow-[0_16px_50px_rgba(59,130,246,0.10)]
            dark:border-white/10
            dark:bg-[linear-gradient(145deg,rgba(10,24,45,0.82),rgba(11,31,56,0.70))]
            dark:shadow-[0_14px_45px_rgba(0,0,0,0.24)]
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.11),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/70 to-transparent dark:via-cyan-300/70" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-300/35 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700 dark:border-cyan-300/15 dark:bg-cyan-400/10 dark:text-cyan-200">
                <Sparkles size={14} />
                Dashboard Overview
              </div>

              <h4 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
                Welcome back,{" "}
                <span className="bg-linear-to-r from-sky-700 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-white dark:via-cyan-200 dark:to-blue-300">
                  {user?.name || "User"}
                </span>
              </h4>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 md:text-base dark:text-white/65">
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
              className="
                hidden h-16 w-16 items-center justify-center rounded-2xl border md:flex
                border-sky-300/30 bg-linear-to-br from-sky-500/15 to-violet-500/12 text-sky-700 shadow-[0_0_35px_rgba(59,130,246,0.12)]
                dark:border-white/10 dark:from-cyan-400/15 dark:to-blue-500/15 dark:text-cyan-200 dark:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              "
            >
              <Sparkles size={28} />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                className="
                  group relative overflow-hidden rounded-3xl border p-5 backdrop-blur-xl
                  border-white/70
                  bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(244,248,255,0.74))]
                  shadow-[0_16px_45px_rgba(59,130,246,0.08)]
                  dark:border-white/10
                  dark:bg-[linear-gradient(145deg,rgba(10,24,45,0.78),rgba(10,30,55,0.68))]
                  dark:shadow-[0_14px_40px_rgba(0,0,0,0.22)]
                "
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-300/55 to-transparent dark:via-white/40" />

                <div className="relative flex items-start justify-between">
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 2.8 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-linear-to-br ${item.iconWrap}`}
                  >
                    <Icon size={22} />
                  </motion.span>

                  <div
                    className={`h-2.5 w-2.5 rounded-full ${item.dot} shadow-[0_0_16px_rgba(103,232,249,0.8)]`}
                  />
                </div>

                <div className="relative mt-6">
                  <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-white/65">
                    {item.title}
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <h6 className="text-4xl font-bold leading-none tracking-tight text-slate-900 dark:text-white">
                      {String(item.value).padStart(2, "0")}
                    </h6>
                    <span className="pb-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-600/80 dark:text-cyan-200/70">
                      stats
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-sky-100/70 blur-2xl dark:bg-white/5" />
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
            className="
              relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-xl md:p-6
              border-white/70
              bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(244,248,255,0.74))]
              shadow-[0_16px_50px_rgba(59,130,246,0.08)]
              dark:border-white/10
              dark:bg-[linear-gradient(145deg,rgba(10,24,45,0.80),rgba(10,30,55,0.68))]
              dark:shadow-[0_14px_45px_rgba(0,0,0,0.22)]
            "
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/70 to-transparent dark:via-cyan-300/70" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_28%)]" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-700 dark:border-white/10 dark:bg-white/6 dark:text-cyan-200">
                  <Clock3 size={14} />
                  Recent Activity
                </div>
                <h5 className="mt-3 text-xl font-bold text-slate-900 md:text-2xl dark:text-white">
                  Latest report updates
                </h5>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
                  A quick view of your most recent lost and found reports.
                </p>
              </div>

              <div className="hidden rounded-2xl border border-slate-200/70 bg-white/75 px-3 py-2 text-right md:block dark:border-white/10 dark:bg-white/6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 dark:text-white/45">
                  Latest
                </p>
                <p className="mt-1 text-sm font-semibold text-sky-700 dark:text-cyan-200">
                  {latestReport
                    ? getTimeAgo(latestReport.createdAt)
                    : "No activity"}
                </p>
              </div>
            </div>

            <div className="relative mt-6 space-y-4">
              {recentReports.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-200 bg-white/65 px-5 py-10 text-center dark:border-white/10 dark:bg-white/4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sky-700 dark:border-white/10 dark:bg-white/6 dark:text-cyan-200">
                    <FolderOpen size={24} />
                  </div>
                  <h6 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    No recent reports yet
                  </h6>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-white/55">
                    Once you create lost or found reports, your latest activity
                    will appear here with status and timeline.
                  </p>
                </div>
              ) : (
                recentReports.map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 * index,
                      ease: "easeOut",
                    }}
                    className="
                      group relative overflow-hidden rounded-3xl border p-4 transition
                      border-white/70 bg-white/72 hover:border-sky-200/80 hover:bg-white/82
                      dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-300/20 dark:hover:bg-white/[0.07]
                    "
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.12),transparent_30%)] dark:bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_30%)]" />

                    <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${getReportTypeClasses(
                              item.reportType,
                            )}`}
                          >
                            {item.reportType || "Report"}
                          </span>

                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${getStatusClasses(
                              item.status,
                            )}`}
                          >
                            {item.status || "Unknown"}
                          </span>
                        </div>

                        <h6 className="mt-3 truncate text-lg font-semibold text-slate-900 dark:text-white">
                          {item.name}
                        </h6>

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-white/55">
                          <span className="inline-flex items-center gap-1.5">
                            <FolderOpen size={14} />
                            {item.category || "Uncategorized"}
                          </span>

                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} />
                            {item.location?.city || "Unknown city"}
                            {item.location?.area
                              ? `, ${item.location.area}`
                              : ""}
                          </span>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center justify-between gap-4 md:flex-col md:items-end">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-700 dark:text-cyan-200">
                          <Clock3 size={14} />
                          {getTimeAgo(item.createdAt)}
                        </span>

                        <Link to={`/lostItem/${item._id}`}>
                          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-white/45">
                            View details
                            <ArrowUpRight size={14} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="
                relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-xl md:p-6
                border-white/70
                bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(244,248,255,0.74))]
                shadow-[0_16px_50px_rgba(59,130,246,0.08)]
                dark:border-white/10
                dark:bg-[linear-gradient(145deg,rgba(10,24,45,0.80),rgba(10,30,55,0.68))]
                dark:shadow-[0_14px_45px_rgba(0,0,0,0.22)]
              "
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/70 to-transparent dark:via-emerald-300/70" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_26%)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-700 dark:border-white/10 dark:bg-white/6 dark:text-emerald-200">
                  <TrendingUp size={14} />
                  Performance
                </div>

                <h5 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  Report insights
                </h5>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/70 bg-white/72 p-4 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-white/45">
                      Success Rate
                    </p>
                    <h6 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                      {String(successRate).padStart(2, "0")}%
                    </h6>
                    <p className="mt-2 text-sm text-slate-500 dark:text-white/55">
                      Based on closed or matched reports
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/70 bg-white/72 p-4 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-white/45">
                      Closed Reports
                    </p>
                    <h6 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                      {String(closedReports).padStart(2, "0")}
                    </h6>
                    <p className="mt-2 text-sm text-slate-500 dark:text-white/55">
                      Reports resolved successfully
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-white/70 bg-white/72 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-white/45">
                        Active Progress
                      </p>
                      <h6 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {activeReports}/{totalReports || 0}
                      </h6>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-500/10 text-emerald-700 shadow-[0_0_25px_rgba(16,185,129,0.10)] dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-200 dark:shadow-[0_0_25px_rgba(16,185,129,0.15)]">
                      <ShieldCheck size={24} />
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          totalReports === 0
                            ? 0
                            : Math.min(
                                100,
                                Math.round(
                                  (activeReports / totalReports) * 100,
                                ),
                              )
                        }%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-500 dark:from-emerald-400 dark:via-cyan-300 dark:to-blue-400"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
              className="
                relative overflow-hidden rounded-[28px] border p-5 backdrop-blur-xl md:p-6
                border-white/70
                bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(244,248,255,0.74))]
                shadow-[0_16px_50px_rgba(59,130,246,0.08)]
                dark:border-white/10
                dark:bg-[linear-gradient(145deg,rgba(10,24,45,0.80),rgba(10,30,55,0.68))]
                dark:shadow-[0_14px_45px_rgba(0,0,0,0.22)]
              "
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent dark:via-blue-300/70" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-700 dark:border-white/10 dark:bg-white/6 dark:text-blue-200">
                  <FolderOpen size={14} />
                  Top Categories
                </div>

                <h5 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                  Most reported items
                </h5>

                <div className="mt-5 space-y-3">
                  {topCategories.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-200 bg-white/65 px-4 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:bg-white/4 dark:text-white/55">
                      No category insights available yet.
                    </div>
                  ) : (
                    topCategories.map(([category, count], index) => {
                      const percentage =
                        totalReports === 0
                          ? 0
                          : Math.round((count / totalReports) * 100);

                      return (
                        <div
                          key={category}
                          className="rounded-3xl border border-white/70 bg-white/72 p-4 dark:border-white/10 dark:bg-white/5"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                {category}
                              </p>
                              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400 dark:text-white/45">
                                {count} reports
                              </p>
                            </div>

                            <div className="text-right">
                              <p className="text-sm font-semibold text-sky-700 dark:text-cyan-200">
                                {percentage}%
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/8">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-sky-500 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-400"
                            />
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardAmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* LIGHT THEME AMBIENT */}
      <motion.div
        animate={{
          x: [0, 30, -15, 0],
          y: [0, -24, 16, 0],
          scale: [1, 1.06, 0.97, 1],
        }}
        transition={floatTransition}
        className="absolute -left-20 -top-16 h-72 w-72 rounded-full bg-sky-300/28 blur-3xl dark:hidden"
      />
      <motion.div
        animate={{
          x: [0, -24, 20, 0],
          y: [0, 16, -20, 0],
          scale: [1, 0.96, 1.08, 1],
        }}
        transition={{ ...floatTransition, duration: 13 }}
        className="absolute -right-15 top-[10%] h-80 w-80 rounded-full bg-violet-300/22 blur-3xl dark:hidden"
      />
      <motion.div
        animate={{
          x: [0, 14, -10, 0],
          y: [0, -14, 18, 0],
          scale: [1, 1.04, 0.96, 1],
        }}
        transition={{ ...floatTransition, duration: 12 }}
        className="absolute -bottom-12.5 left-[22%] h-64 w-64 rounded-full bg-cyan-300/24 blur-3xl dark:hidden"
      />

      <div
        className="
          absolute inset-0 dark:hidden
          bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)]
          bg-size-[24px_24px]
          opacity-[0.22]
        "
      />

      <div className="absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_40%)]" />

      {/* DARK THEME AMBIENT */}
      <motion.div
        animate={{
          x: [0, 22, -12, 0],
          y: [0, -18, 14, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ ...floatTransition, duration: 11 }}
        className="absolute -left-20 top-0 hidden h-72 w-72 rounded-full bg-cyan-400/12 blur-3xl dark:block"
      />
      <motion.div
        animate={{
          x: [0, -18, 22, 0],
          y: [0, 18, -12, 0],
          scale: [1, 0.96, 1.08, 1],
        }}
        transition={{ ...floatTransition, duration: 13 }}
        className="absolute -right-15 top-[16%] hidden h-72 w-72 rounded-full bg-blue-500/12 blur-3xl dark:block"
      />
      <motion.div
        animate={{
          x: [0, 14, -8, 0],
          y: [0, -10, 14, 0],
          scale: [1, 1.04, 0.95, 1],
        }}
        transition={{ ...floatTransition, duration: 12 }}
        className="absolute -bottom-15 left-[18%] hidden h-64 w-64 rounded-full bg-emerald-400/8 blur-3xl dark:block"
      />

      <div
        className="
          absolute inset-0 hidden dark:block
          bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]
          bg-size-[24px_24px]
          opacity-[0.08]
        "
      />

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/65 to-transparent dark:via-cyan-300/55" />
    </div>
  );
}
