import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Shield,
  Lock,
  User,
  Mail,
  Phone,
  Globe,
  MoonStar,
  Monitor,
  Eye,
  EyeOff,
  KeyRound,
  Smartphone,
  ChevronRight,
  Save,
  Sparkles,
  BadgeCheck,
  MapPin,
  Fingerprint,
  Info,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "../../lib/axios";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

function ToggleRow({ icon: Icon, title, desc, checked, onChange }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/4 px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.16)]">
          <Icon size={20} />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white sm:text-base">
            {title}
          </h3>
          <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
            {desc}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`relative h-7 w-14 shrink-0 rounded-full border transition-all duration-300 ${
          checked
            ? "border-cyan-300/50 bg-cyan-400/25 shadow-[0_0_22px_rgba(34,211,238,0.22)]"
            : "border-white/10 bg-white/10"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
            checked ? "left-8" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function InfoInput({
  icon: Icon,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  disabled = false,
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
        <Icon size={16} className="text-cyan-300" />
        {label}
      </span>

      <div
        className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ${
          disabled
            ? "border-white/10 bg-white/3 opacity-70"
            : "border-white/10 bg-white/4 hover:border-white/20 focus-within:border-cyan-400/40 focus-within:bg-white/6"
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full bg-transparent text-sm outline-none placeholder:text-slate-400 ${
            disabled ? "cursor-not-allowed text-slate-400" : "text-white"
          }`}
        />
      </div>
    </label>
  );
}

function SelectInput({ icon: Icon, label, value, onChange, options = [] }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
        <Icon size={16} className="text-cyan-300" />
        {label}
      </span>

      <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 focus-within:border-cyan-400/40 hover:border-white/20">
        <select
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-sm text-white outline-none"
        >
          {options.map((item) => (
            <option
              key={item.value}
              value={item.value}
              className="bg-slate-900 text-white"
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}

function ActionCard({
  icon: Icon,
  title,
  desc,
  iconClass = "",
  borderClass = "",
  onClick,
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full overflow-hidden rounded-3xl border bg-white/4 p-4 text-left shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:bg-white/6 ${borderClass}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_35%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-white ${iconClass}`}
          >
            <Icon size={20} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white sm:text-base">
              {title}
            </h3>
            <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
              {desc}
            </p>
          </div>
        </div>

        <ChevronRight className="mt-1 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
      </div>
    </motion.button>
  );
}

export default function SettingSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    language: "en",
    appearance: "dark",
    profileVisibility: "public",
  });

  const [toggles, setToggles] = useState({
    emailNotifications: true,
    pushNotifications: true,
    claimAlerts: true,
    reportUpdates: true,
    marketingEmails: false,
    showEmail: false,
    showPhone: false,
    twoFactorAuth: false,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/auth/me", {
        withCredentials: true,
      });

      const user = res?.data?.user;

      setForm((prev) => ({
        ...prev,
        fullName: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        location: user?.location || "",
      }));
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to load user details",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleSave = async () => {
    if (!form.fullName.trim()) {
      toast.error("Name is required");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: form.fullName,
        phone: form.phone,
      };

      const res = await axios.put("/auth/update-profile", payload, {
        withCredentials: true,
      });

      const updatedUser = res?.data?.user;

      setForm((prev) => ({
        ...prev,
        fullName: updatedUser?.name || "",
        email: updatedUser?.email || prev.email,
        phone: updatedUser?.phone || "",
      }));

      toast.success(res?.data?.message || "Profile updated successfully");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="relative min-h-full overflow-hidden rounded-4xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(2,6,23,0.96),rgba(3,37,76,0.94),rgba(8,47,73,0.92))] p-4 text-white shadow-[0_20px_80px_rgba(2,6,23,0.55)] sm:p-6 xl:p-7">
        <div className="space-y-6 animate-pulse">
          <div className="h-24 rounded-[28px] border border-white/10 bg-white/4" />
          <div className="h-72 rounded-[28px] border border-white/10 bg-white/4" />
          <div className="h-72 rounded-[28px] border border-white/10 bg-white/4" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-full overflow-hidden rounded-4xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(2,6,23,0.96),rgba(3,37,76,0.94),rgba(8,47,73,0.92))] p-4 text-white shadow-[0_20px_80px_rgba(2,6,23,0.55)] sm:p-6 xl:p-7">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-16 top-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 25, -10, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px] opacity-20" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/4 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles size={14} />
              Settings Panel
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Manage Your Account Settings
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-3"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <motion.div
                  animate={{
                    x: [0, 18, -8, 0],
                    y: [0, -6, 6, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -left-6 top-0 h-16 w-16 rounded-full bg-cyan-400/20 blur-2xl"
                />

                <motion.div
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.18)]"
                >
                  <Fingerprint size={18} />
                </motion.div>

                <div className="relative flex flex-col">
                  <motion.p
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-sm font-semibold tracking-wide text-white sm:text-base"
                  >
                    Update & Manage your account
                  </motion.p>

                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.22, duration: 0.4 }}
                    className="text-xs text-slate-400"
                  >
                    Securely control your profile details and preferences
                  </motion.span>
                </div>

                <motion.div
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(34,211,238,0.08),transparent)]"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.button
            type="button"
            onClick={handleSave}
            disabled={saving}
            whileHover={{ scale: saving ? 1 : 1.04, y: saving ? 0 : -2 }}
            whileTap={{ scale: saving ? 1 : 0.97 }}
            className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/30 bg-[linear-gradient(135deg,#0ea5e9,#2563eb)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(37,99,235,0.35)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Save"}
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <motion.section
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <User size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Account Information
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InfoInput
                  icon={User}
                  label="Full Name"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                />

                <InfoInput
                  icon={Mail}
                  label="Email Address"
                  type="email"
                  value={form.email}
                  disabled
                  placeholder="Email not available"
                />

                <InfoInput
                  icon={Phone}
                  label="Phone Number"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Not provided"
                />

                <InfoInput
                  icon={MapPin}
                  label="Location"
                  value={form.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="Not provided"
                  disabled
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 inline-flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/10 px-3 py-2 text-xs text-amber-200 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-0.5"
                >
                  <Info size={14} />
                </motion.div>

                <p className="leading-5">
                  Email & Location are not editable yet
                </p>
              </motion.div>
            </motion.section>

            <motion.section
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                  <Bell size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Notification Settings
                  </h2>
                  <p className="text-sm text-slate-300">
                    Ye abhi frontend-only state hai.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <ToggleRow
                  icon={Mail}
                  title="Email Notifications"
                  desc="Report status, claim response aur important account alerts email par bhejo."
                  checked={toggles.emailNotifications}
                  onChange={() => handleToggle("emailNotifications")}
                />

                <ToggleRow
                  icon={Bell}
                  title="Push Notifications"
                  desc="Realtime notifications ke liye browser/app alerts enable rakho."
                  checked={toggles.pushNotifications}
                  onChange={() => handleToggle("pushNotifications")}
                />

                <ToggleRow
                  icon={BadgeCheck}
                  title="Claim Alerts"
                  desc="Jab koi claim kare tab turant notify karo."
                  checked={toggles.claimAlerts}
                  onChange={() => handleToggle("claimAlerts")}
                />

                <ToggleRow
                  icon={Sparkles}
                  title="Report Updates"
                  desc="Lost/found item me kisi bhi update par user ko notify karo."
                  checked={toggles.reportUpdates}
                  onChange={() => handleToggle("reportUpdates")}
                />

                <ToggleRow
                  icon={Bell}
                  title="Promotional Emails"
                  desc="Naye features aur updates ke mails."
                  checked={toggles.marketingEmails}
                  onChange={() => handleToggle("marketingEmails")}
                />
              </div>
            </motion.section>

            <motion.section
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                  <Shield size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Privacy Controls
                  </h2>
                  <p className="text-sm text-slate-300">
                    Ye bhi abhi frontend-only hai.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <SelectInput
                  icon={Eye}
                  label="Profile Visibility"
                  value={form.profileVisibility}
                  onChange={(e) =>
                    handleChange("profileVisibility", e.target.value)
                  }
                  options={[
                    { label: "Public", value: "public" },
                    { label: "Only Logged In Users", value: "loggedIn" },
                    { label: "Private", value: "private" },
                  ]}
                />

                <ToggleRow
                  icon={EyeOff}
                  title="Show Email Publicly"
                  desc="Agar on hai to dusre users ko email visible ho sakta hai."
                  checked={toggles.showEmail}
                  onChange={() => handleToggle("showEmail")}
                />

                <ToggleRow
                  icon={Phone}
                  title="Show Phone Publicly"
                  desc="Agar on hai to contact phone visible ho sakta hai."
                  checked={toggles.showPhone}
                  onChange={() => handleToggle("showPhone")}
                />
              </div>
            </motion.section>
          </div>

          <div className="space-y-5">
            <motion.section
              custom={3}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-violet-300">
                  <Globe size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    App Preferences
                  </h2>
                  <p className="text-sm text-slate-300">
                    Ye abhi local state me hai.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <SelectInput
                  icon={Globe}
                  label="Language"
                  value={form.language}
                  onChange={(e) => handleChange("language", e.target.value)}
                  options={[
                    { label: "English", value: "en" },
                    { label: "Hindi", value: "hi" },
                    { label: "Hinglish", value: "hinglish" },
                  ]}
                />

                <SelectInput
                  icon={form.appearance === "dark" ? MoonStar : Monitor}
                  label="Appearance"
                  value={form.appearance}
                  onChange={(e) => handleChange("appearance", e.target.value)}
                  options={[
                    { label: "Dark", value: "dark" },
                    { label: "Light", value: "light" },
                    { label: "System Default", value: "system" },
                  ]}
                />
              </div>
            </motion.section>

            <motion.section
              custom={4}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                  <Lock size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Security</h2>
                  <p className="text-sm text-slate-300">
                    Password aur account protection actions.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <ToggleRow
                  icon={Smartphone}
                  title="Two-Factor Authentication"
                  desc="Extra security layer. Sirf password enough nahi hota."
                  checked={toggles.twoFactorAuth}
                  onChange={() => handleToggle("twoFactorAuth")}
                />

                <ActionCard
                  icon={KeyRound}
                  title="Change Password"
                  desc="Current password update karo aur stronger password set karo."
                  iconClass="border-amber-300/20 bg-amber-400/10 text-amber-300"
                  borderClass="border-white/10 hover:border-amber-300/20"
                  onClick={() => console.log("Change password clicked")}
                />

                <ActionCard
                  icon={Shield}
                  title="Review Login Activity"
                  desc="Recent devices aur suspicious activity ko inspect karo."
                  iconClass="border-cyan-300/20 bg-cyan-400/10 text-cyan-300"
                  borderClass="border-white/10 hover:border-cyan-300/20"
                  onClick={() => console.log("Login activity clicked")}
                />
              </div>
            </motion.section>

            <motion.section
              custom={5}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              className="rounded-[28px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(37,99,235,0.10),rgba(15,23,42,0.4))] p-5 shadow-[0_18px_46px_rgba(0,0,0,0.2)] backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white">Quick Notes</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                  Public email aur phone default me off rakhna better hai.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                  Claim alerts on rehna chahiye, warna user important request
                  miss karega.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                  Two-factor auth optional mat samajh. Real product me ye useful
                  hai.
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
