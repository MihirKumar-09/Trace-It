import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, MapPin } from "lucide-react";

export default function FilterSection({
  filters = { category: "", date: "", distance: 10 },
  setFilters = () => {},
}) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="bg-linear-to-b from-[#fffaf7] to-white px-3 py-8 dark:bg-[linear-gradient(180deg,#071126_0%,#0c1730_45%,#111827_100%)] sm:px-5 md:px-10 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.82),rgba(30,41,59,0.68))] dark:shadow-[0_14px_40px_rgba(0,0,0,0.30)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.10),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%)]" />

        <div className="relative p-4 sm:p-5 md:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250, damping: 14 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-200 dark:shadow-orange-500/10"
              >
                <Filter size={20} />
              </motion.div>

              <div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
                  Filter Results
                </h2>
                <p className="text-xs text-gray-500 dark:text-slate-400 sm:text-sm">
                  Refine items by category, date, and distance
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-300 md:flex">
              <SlidersHorizontal size={16} />
              Smart Filters
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_1.2fr]">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/6"
            >
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={filters.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="w-full cursor-pointer bg-transparent text-sm font-medium text-gray-800 outline-none dark:text-white"
              >
                <option value="" className="bg-white text-black">
                  Select Category
                </option>
                <option value="all" className="bg-white text-black">
                  All
                </option>
                <option value="phones" className="bg-white text-black">
                  Phones
                </option>
                <option value="tablets" className="bg-white text-black">
                  Tablets
                </option>
                <option value="wallets" className="bg-white text-black">
                  Wallets
                </option>
                <option value="keys" className="bg-white text-black">
                  Keys
                </option>
                <option value="jewelries" className="bg-white text-black">
                  Jewelries
                </option>
                <option value="laptop" className="bg-white text-black">
                  Laptops
                </option>
                <option value="briefcase" className="bg-white text-black">
                  Briefcase
                </option>
                <option value="electronics" className="bg-white text-black">
                  Electronics
                </option>
                <option value="accessories" className="bg-white text-black">
                  Accessories
                </option>
                <option value="clothings" className="bg-white text-black">
                  Clothings
                </option>
                <option value="watches" className="bg-white text-black">
                  Watches
                </option>
                <option value="documents" className="bg-white text-black">
                  Documents
                </option>
                <option value="pets" className="bg-white text-black">
                  Pets
                </option>
                <option value="others" className="bg-white text-black">
                  Others
                </option>
              </select>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/6"
            >
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                Date
              </label>
              <select
                name="date"
                id="date"
                value={filters.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full cursor-pointer bg-transparent text-sm font-medium text-gray-800 outline-none dark:text-white"
              >
                <option value="" className="bg-white text-black">
                  Select Date
                </option>
                <option value="Today" className="bg-white text-black">
                  Today
                </option>
                <option value="Yesterday" className="bg-white text-black">
                  Yesterday
                </option>
                <option value="7days" className="bg-white text-black">
                  7 Days
                </option>
                <option value="30days" className="bg-white text-black">
                  Last 30 Days
                </option>
              </select>
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="hidden rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/6 md:block"
            >
              <div className="mb-3 flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                  Distance
                </label>
                <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/8 dark:text-slate-300">
                  <MapPin size={12} />
                  {filters.distance} km
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={filters.distance}
                onChange={(e) =>
                  handleChange("distance", Number(e.target.value))
                }
                className="w-full cursor-pointer accent-orange-500"
              />

              <div className="mt-2 flex justify-between text-[11px] text-gray-400 dark:text-slate-500">
                <span>1 km</span>
                <span>25 km</span>
                <span>50 km</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="mt-3 rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/6 md:hidden"
          >
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
              Distance
            </label>
            <select
              name="Distance"
              id="Distance"
              value={String(filters.distance)}
              onChange={(e) => handleChange("distance", Number(e.target.value))}
              className="w-full cursor-pointer bg-transparent text-sm font-medium  outline-none dark:text-black"
            >
              <option value="1">1 km</option>
              <option value="2">2 km</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
              <option value="50">50 km</option>
            </select>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
