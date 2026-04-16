import {
  CalendarCheck,
  Camera,
  SendHorizontal,
  Timer,
  MapPin,
  Package,
  FileText,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useReports } from "../../Context/ReportContext";
import { API_URL } from "../../lib/api";

// create a initial form;
const initialForm = {
  name: "",
  category: "",
  color: "",
  model: "",
  city: "",
  area: "",
  date: "",
  time: "",
  description: "",
  phone: "",
  email: "",
  image: null,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function AnimatedSceneBackground() {
  const rainDrops = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    left: `${(i * 2.35) % 100}%`,
    delay: (i % 8) * 0.35,
    duration: 0.9 + (i % 5) * 0.22,
    height: 70 + (i % 6) * 18,
    opacity: 0.22 + (i % 4) * 0.12,
  }));

  const windLines = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    top: `${10 + i * 5.2}%`,
    delay: (i % 6) * 0.45,
    duration: 5 + (i % 4),
    width: 110 + (i % 5) * 55,
    opacity: 0.18 + (i % 3) * 0.08,
  }));

  const clouds = [
    { top: "10%", left: "-10%", scale: 1, duration: 28, delay: 0 },
    { top: "24%", left: "-18%", scale: 0.8, duration: 34, delay: 3 },
    { top: "42%", left: "-14%", scale: 1.15, duration: 31, delay: 6 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* LIGHT THEME */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef7ff_0%,#fffdf5_38%,#fff4e8_100%)]" />

        {/* sun glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[7%] h-36 w-36 rounded-full bg-yellow-300/35 blur-2xl"
        />

        {/* warm daylight haze */}
        <motion.div
          animate={{
            x: [0, 30, -18, 0],
            y: [0, 14, -10, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[14%] h-64 w-64 rounded-full bg-sky-200/25 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -24, 18, 0],
            y: [0, -12, 14, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[12%] bottom-[12%] h-72 w-72 rounded-full bg-orange-200/25 blur-3xl"
        />

        {/* clouds */}
        {clouds.map((cloud) => (
          <motion.div
            key={cloud.top}
            initial={{ x: 0, opacity: 0.45 }}
            animate={{
              x: ["0vw", "115vw"],
              opacity: [0.28, 0.45, 0.28],
            }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: "linear",
              delay: cloud.delay,
            }}
            className="absolute"
            style={{
              top: cloud.top,
              left: cloud.left,
              transform: `scale(${cloud.scale})`,
            }}
          >
            <div className="relative h-20 w-44 rounded-full bg-white/45 blur-[2px]">
              <div className="absolute -left-2 top-5 h-12 w-12 rounded-full bg-white/55" />
              <div className="absolute left-8 top-0 h-16 w-16 rounded-full bg-white/60" />
              <div className="absolute left-20 top-3 h-14 w-14 rounded-full bg-white/55" />
              <div className="absolute left-28 top-5 h-12 w-12 rounded-full bg-white/50" />
            </div>
          </motion.div>
        ))}

        {/* wind lines */}
        {windLines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ x: "-20vw", opacity: 0 }}
            animate={{
              x: ["-20vw", "115vw"],
              opacity: [0, line.opacity, line.opacity * 0.75, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
            }}
            className="absolute rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),rgba(191,219,254,0.85),transparent)] blur-[1px]"
            style={{
              top: line.top,
              width: line.width,
              height: 2,
            }}
          />
        ))}

        {/* subtle lightning flash for day storm feel */}
        <motion.div
          animate={{
            opacity: [0, 0, 0.12, 0, 0, 0, 0.08, 0, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.18, 0.2, 0.24, 0.52, 0.68, 0.7, 0.74, 1],
          }}
          className="absolute inset-0 bg-white"
        />

        {/* distant angled thunder streak */}
        <motion.div
          animate={{
            opacity: [0, 0, 0.55, 0, 0],
            scaleY: [0.85, 0.85, 1, 0.9, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.22, 0.24, 0.28, 1],
          }}
          className="absolute right-[18%] top-[16%] h-44 w-0.75 origin-top rotate-24 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,1),rgba(251,191,36,0.95),rgba(255,255,255,0))] blur-[0.5px]"
        />
      </div>

      {/* DARK THEME */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#020617_0%,#08111f_30%,#0f172a_100%)]" />

        {/* mist layers */}
        <motion.div
          animate={{
            x: [0, 40, -25, 0],
            opacity: [0.16, 0.28, 0.16],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] left-[-8%] h-52 w-[60%] rounded-full bg-cyan-300/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -35, 24, 0],
            opacity: [0.1, 0.22, 0.1],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[5%] right-[-10%] h-48 w-[58%] rounded-full bg-violet-400/10 blur-3xl"
        />

        {/* lightning flashes */}
        <motion.div
          animate={{
            opacity: [0, 0, 0.08, 0, 0, 0, 0.16, 0, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.18, 0.2, 0.24, 0.56, 0.66, 0.68, 0.72, 1],
          }}
          className="absolute inset-0 bg-cyan-100"
        />

        {/* thunder bolt */}
        <motion.div
          animate={{
            opacity: [0, 0, 0.9, 0, 0],
            scaleY: [0.8, 0.8, 1, 0.85, 0.85],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.23, 0.25, 0.3, 1],
          }}
          className="absolute left-[16%] top-[12%] h-56 w-1 origin-top rotate-16 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(125,211,252,1),rgba(255,255,255,1),rgba(125,211,252,0))] blur-[0.4px]"
        />

        {/* rain */}
        {rainDrops.map((drop) => (
          <motion.div
            key={drop.id}
            initial={{ y: "-18vh", opacity: 0 }}
            animate={{
              y: ["-18vh", "115vh"],
              x: [0, -16, -24],
              opacity: [0, drop.opacity, drop.opacity * 0.8, 0],
            }}
            transition={{
              duration: drop.duration,
              repeat: Infinity,
              ease: "linear",
              delay: drop.delay,
            }}
            className="absolute rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(125,211,252,0.92),rgba(59,130,246,0.35),rgba(255,255,255,0))] shadow-[0_0_12px_rgba(56,189,248,0.16)]"
            style={{
              left: drop.left,
              width: 2,
              height: drop.height,
              transform: "rotate(12deg)",
            }}
          />
        ))}

        {/* tiny far rain */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`mini-${i}`}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{
              y: ["-10vh", "110vh"],
              x: [0, -10],
              opacity: [0, 0.16, 0],
            }}
            transition={{
              duration: 1 + (i % 4) * 0.18,
              repeat: Infinity,
              ease: "linear",
              delay: (i % 10) * 0.22,
            }}
            className="absolute w-px rounded-full bg-cyan-200/60"
            style={{
              left: `${(i * 3.7) % 100}%`,
              height: 40 + (i % 4) * 8,
              transform: "rotate(12deg)",
            }}
          />
        ))}

        {/* storm glow */}
        <motion.div
          animate={{
            opacity: [0.12, 0.22, 0.12],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-[8%] h-44 w-44 rounded-full bg-sky-400/10 blur-3xl"
        />
      </div>
    </div>
  );
}

export default function LostReportForm() {
  const [form, setForm] = useState(initialForm);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { fetchMyReports } = useReports();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setForm((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    setForm(initialForm);
    setPreview("");
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim()) return setError("Item name is required");
    if (!form.category) return setError("Category is required");
    if (!form.color.trim()) return setError("Color is required");
    if (!form.city.trim()) return setError("City is required");
    if (!form.area.trim()) return setError("Area is required");
    if (!form.date) return setError("Lost date is required");
    if (!form.time) return setError("Approximate time is required");
    if (!form.description.trim()) return setError("Description is required");
    if (!form.email.trim()) return setError("Email is required");
    if (!form.image) return setError("Image is required");

    const dateTime = new Date(`${form.date}T${form.time}`);

    if (Number.isNaN(dateTime.getTime())) {
      return setError("Invalid date or time");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("category", form.category);
      formData.append("color", form.color.trim());
      formData.append("model", form.model.trim());
      formData.append("city", form.city.trim());
      formData.append("area", form.area.trim());
      formData.append("dateTime", dateTime.toISOString());
      formData.append("description", form.description.trim());
      formData.append("phone", form.phone.trim());
      formData.append("email", form.email.trim());
      formData.append("image", form.image);

      const res = await fetch(`${API_URL}/reports/newLostReport`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to create lost report");
      }

      setSuccess("Lost report submitted successfully");
      setForm(initialForm);
      setPreview("");
      await fetchMyReports();
      navigate("/");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border px-4 py-3.5 text-[15px] outline-none transition duration-300 backdrop-blur-md " +
    "border-white/70 bg-white/78 text-gray-800 placeholder:text-gray-400 shadow-[0_6px_24px_rgba(0,0,0,0.05)] " +
    "focus:border-orange-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(249,115,22,0.10)] " +
    "dark:border-white/10 dark:bg-slate-900/40 dark:text-gray-100 dark:placeholder:text-gray-500 dark:shadow-[0_8px_26px_rgba(0,0,0,0.24)] " +
    "dark:focus:border-cyan-400/45 dark:focus:bg-slate-900/55 dark:focus:shadow-[0_0_0_4px_rgba(34,211,238,0.10)]";

  const cardClass =
    "rounded-[28px] border p-5 md:p-7 backdrop-blur-xl " +
    "border-white/60 bg-white/68 shadow-[0_14px_55px_rgba(15,23,42,0.08)] " +
    "dark:border-white/10 dark:bg-slate-950/30 dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)]";

  return (
    <section className="relative overflow-hidden px-3 py-10 sm:px-5 md:px-12 md:py-14">
      <AnimatedSceneBackground />

      {/* overlay to improve readability */}
      <div className="absolute inset-0 bg-white/30 dark:bg-slate-950/20" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/75 px-4 py-2 text-sm font-medium text-orange-600 shadow-sm backdrop-blur-md dark:border-cyan-400/20 dark:bg-slate-900/40 dark:text-cyan-300">
            <Package size={16} />
            Lost Item Report
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl md:text-5xl dark:text-white">
            Lost Something Important?
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base dark:text-gray-300">
            Fill in the details below so the community can help identify and
            return your missing item faster.
          </p>
        </motion.div>

        {/* Alerts */}
        <div className="mx-auto mt-8 max-w-3xl">
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-2xl border border-red-200 bg-red-50/95 px-4 py-3 text-left text-sm font-medium text-red-600 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
            >
              {error}
            </motion.p>
          )}

          {success && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-2xl border border-green-200 bg-green-50/95 px-4 py-3 text-left text-sm font-medium text-green-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
            >
              {success}
            </motion.p>
          )}
        </div>

        {/* Form */}
        <div className="mt-8 flex w-full justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-3xl flex-col gap-7"
          >
            {/* Section 1 */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={cardClass}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-pink-500 text-white shadow-lg">
                  <Package size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 dark:text-orange-300">
                    Step 01
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-white">
                    Item Information
                  </h2>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5">
                <div className="text-left">
                  <label
                    htmlFor="itemName"
                    className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Midnight Blue Leather Wallet"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <div className="flex-1 text-left">
                    <label
                      htmlFor="category"
                      className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      <option value="Phones">Phones</option>
                      <option value="Tablets">Tablets</option>
                      <option value="Wallets">Wallets</option>
                      <option value="Keys">Keys</option>
                      <option value="Jewelries">Jewelries</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Briefcase">Briefcase</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Clothings">Clothings</option>
                      <option value="Watches">Watches</option>
                      <option value="Documents">Documents</option>
                      <option value="Pets">Pets</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="flex-1 text-left">
                    <label
                      htmlFor="color"
                      className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                    >
                      Color
                    </label>
                    <input
                      type="text"
                      id="color"
                      name="color"
                      value={form.color}
                      onChange={handleChange}
                      placeholder="e.g. Navy Blue"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label
                    htmlFor="model"
                    className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                  >
                    Brand / Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    placeholder="e.g. Apple iPhone 13 Pro"
                    className={inputClass}
                  />
                </div>

                <div className="text-left">
                  <label
                    htmlFor="fileUpload"
                    className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                  >
                    Upload Photos
                  </label>

                  <motion.label
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.995 }}
                    htmlFor="fileUpload"
                    className="group relative flex min-h-55 cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-orange-200/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,247,237,0.92))] p-8 text-center shadow-[0_8px_30px_rgba(249,115,22,0.08)] transition dark:border-cyan-400/15 dark:bg-slate-900/35 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition group-hover:scale-110 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <Camera size={28} />
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-black">
                      <span className="text-orange-500 dark:text-orange-600">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-700">
                      PNG, JPG up to 10MB
                    </p>
                  </motion.label>

                  <input
                    type="file"
                    id="fileUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />

                  {preview && (
                    <motion.img
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      src={preview}
                      alt="preview"
                      className="mt-4 h-36 w-36 rounded-2xl border border-orange-100 object-cover shadow-md dark:border-white/10"
                    />
                  )}
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={cardClass}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 dark:text-cyan-300">
                    Step 02
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-white">
                    Where Did You Lose It?
                  </h2>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-5 md:flex-row">
                  <div className="flex-1 text-left">
                    <label
                      htmlFor="city"
                      className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Delhi"
                      className={inputClass}
                    />
                  </div>

                  <div className="flex-1 text-left">
                    <label
                      htmlFor="area"
                      className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                    >
                      Area / Place
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="e.g. Central Park Mall, Food Court"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <div className="flex-1 text-left">
                    <label
                      htmlFor="date"
                      className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                    >
                      Lost Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        onClick={(e) => e.target.showPicker?.()}
                        className={`${inputClass} appearance-none pr-12`}
                      />
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <CalendarCheck size={18} />
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 text-left">
                    <label
                      htmlFor="time"
                      className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                    >
                      Approximate Time
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        onClick={(e) => e.target.showPicker?.()}
                        className={`${inputClass} appearance-none pr-12`}
                      />
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">
                        <Timer size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={cardClass}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg">
                  <FileText size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-300">
                    Step 03
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-white">
                    Description
                  </h2>
                </div>
              </div>

              <div className="mt-6 text-left">
                <label
                  htmlFor="description"
                  className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                >
                  Item Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Please provide any unique identifying features, content inside, or special circumstances..."
                  className={`${inputClass} h-36 resize-none md:h-40`}
                />
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={cardClass}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500 dark:text-emerald-300">
                    Step 04
                  </p>
                  <h2 className="text-lg font-semibold text-gray-900 md:text-xl dark:text-white">
                    Contact Details
                  </h2>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5 md:flex-row">
                <div className="flex-1 text-left">
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="flex-1 text-left">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <motion.button
                type="button"
                onClick={handleCancel}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-8 py-3.5 font-medium text-gray-700 shadow-sm transition dark:border-white/10 dark:bg-slate-900/40 dark:text-gray-200"
              >
                Cancel
              </motion.button>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-[#EC5B13] via-orange-500 to-pink-500 px-8 py-3.5 font-medium text-white shadow-[0_14px_35px_rgba(236,91,19,0.30)] transition disabled:cursor-not-allowed disabled:opacity-60 md:px-12 dark:from-cyan-500 dark:via-sky-500 dark:to-violet-500 dark:shadow-[0_18px_45px_rgba(14,165,233,0.25)]"
              >
                <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative">
                  {loading ? "Submitting..." : "Submit Lost Item Report"}
                </span>
                <SendHorizontal
                  className="relative transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  size={18}
                />
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}
