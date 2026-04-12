import {
  BriefcaseBusiness,
  Cable,
  Gem,
  Glasses,
  KeySquare,
  Laptop,
  LayoutGrid,
  NotepadText,
  Panda,
  Shirt,
  Smartphone,
  TabletSmartphone,
  Wallet2,
  Watch,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ItemCategory() {
  const categories = [
    { name: "Phones", icon: Smartphone },
    { name: "Tablets", icon: TabletSmartphone },
    { name: "Wallets", icon: Wallet2 },
    { name: "Keys", icon: KeySquare },
    { name: "Jewelries", icon: Gem },
    { name: "Laptops", icon: Laptop },
    { name: "Briefcase", icon: BriefcaseBusiness },
    { name: "Electronics", icon: Cable },
    { name: "Accessories", icon: Glasses },
    { name: "Clothing", icon: Shirt },
    { name: "Watches", icon: Watch },
    { name: "Documents", icon: NotepadText },
    { name: "Pets", icon: Panda },
    { name: "Others", icon: LayoutGrid },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.92,
    },
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
    <section className="relative overflow-hidden bg-linear-to-b from-[#fffaf7] to-white px-3 py-10 dark:bg-[linear-gradient(180deg,#071126_0%,#0c1730_45%,#111827_100%)] sm:px-5 md:px-10">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-0 h-52 w-52 rounded-full bg-orange-100/40 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-pink-100/30 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-[#EC5B13] dark:text-orange-300">
            Browse Categories
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Explore Lost & Found Items
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-gray-500 dark:text-slate-400 md:text-base">
            Quickly navigate through popular categories to find reported items
            faster.
          </p>
        </motion.div>

        <div className="no-scrollbar overflow-x-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex min-w-max gap-4 px-1 py-2"
          >
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                    transition: { duration: 0.22 },
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative min-w-31.25 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm transition-all duration-300 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.78),rgba(30,41,59,0.62))] dark:shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
                >
                  {/* animated glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#FDEEE7] via-transparent to-[#fff7f2] dark:from-blue-500/10 dark:via-transparent dark:to-violet-500/10"
                  />

                  {/* top shine bar */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-0 top-0 h-full w-10 rotate-12 bg-white/40 blur-md dark:bg-white/10"
                  />

                  {/* hover ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-orange-200 dark:group-hover:ring-white/10" />

                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <motion.span
                      whileHover={{ rotate: 8, scale: 1.12 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 14,
                      }}
                      className="flex items-center justify-center rounded-2xl bg-[#FDEEE7] p-3 shadow-sm transition-colors duration-300 group-hover:bg-[#EC5B13] dark:bg-white/8 dark:group-hover:bg-orange-500"
                    >
                      <Icon
                        size={24}
                        className="text-[#EC5B13] transition-colors duration-300 group-hover:text-white dark:text-orange-300 dark:group-hover:text-white"
                      />
                    </motion.span>

                    <span className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-black dark:text-slate-200 dark:group-hover:text-white md:text-base">
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
