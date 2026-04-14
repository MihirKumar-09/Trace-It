import { FcGoogle } from "react-icons/fc";
import { Lock, ShieldCheck, Sparkles, User, Mail } from "lucide-react";
import PhoneAuth from "./PhoneAuth";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function FloatingNode({ className = "", delay = 0, duration = 6 }) {
  return (
    <motion.div
      initial={{ opacity: 0.35, scale: 0.85 }}
      animate={{
        opacity: [0.35, 0.95, 0.35],
        y: [0, -16, 0],
        x: [0, 10, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    />
  );
}

function Beam({ className = "", duration = 5, delay = 0, rotate = "0deg" }) {
  return (
    <motion.div
      initial={{ x: "-20%", opacity: 0.15 }}
      animate={{
        x: ["-20%", "120%"],
        opacity: [0.12, 0.95, 0.12],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ rotate }}
      className={className}
    />
  );
}

export default function RightSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const createAccount = async () => {
    try {
      setNameError("");
      setEmailError("");
      setPhoneError("");

      let hasError = false;

      if (!phone) {
        setPhoneError("Verify mobile number");
        hasError = true;
      }

      if (!name.trim()) {
        setNameError("Enter your name");
        hasError = true;
      }

      if (!email) {
        setEmailError("Enter your email");
        hasError = true;
      }

      if (hasError) return;

      const res = await axios.post(
        "http://localhost:8080/auth/phone-login",
        {
          phone,
          name,
          email,
        },
        { withCredentials: true },
      );

      console.log("User:", res.data.user);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden md:w-1/2
      bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98)_0%,rgba(241,247,255,0.96)_28%,rgba(226,236,255,0.94)_58%,rgba(214,228,250,0.92)_100%)]
      dark:bg-[radial-gradient(circle_at_top,rgba(12,22,42,0.98)_0%,rgba(9,17,34,0.98)_32%,rgba(6,12,27,0.99)_68%,rgba(2,6,16,1)_100%)]"
    >
      {/* animated matching scene */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* atmosphere glows */}
        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, -16, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/10"
        />

        <motion.div
          animate={{
            x: [0, -18, 0],
            y: [0, 18, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -right-7.5 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl dark:bg-blue-600/10"
        />

        <motion.div
          animate={{ opacity: [0.18, 0.38, 0.18] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0
          bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.9),transparent_20%),radial-gradient(circle_at_84%_20%,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_55%_82%,rgba(59,130,246,0.16),transparent_24%)]
          dark:bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_84%_20%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_55%_82%,rgba(59,130,246,0.08),transparent_24%)]"
        />

        {/* orbit rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute left-[8%] top-[14%] h-44 w-44 rounded-full border border-sky-400/25 dark:border-cyan-400/15"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[16%] h-36 w-36 rounded-full border border-blue-400/25 dark:border-sky-500/15"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[14%] h-56 w-56 rounded-full border border-cyan-300/20 dark:border-cyan-300/10"
        />

        {/* floating nodes */}
        <FloatingNode
          delay={0.2}
          duration={4.8}
          className="absolute left-[18%] top-[18%] h-4 w-4 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.9)] dark:bg-cyan-300 dark:shadow-[0_0_20px_rgba(34,211,238,0.55)]"
        />
        <FloatingNode
          delay={0.8}
          duration={5.6}
          className="absolute right-[18%] top-[24%] h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_22px_rgba(56,189,248,0.5)] dark:bg-sky-400 dark:shadow-[0_0_18px_rgba(56,189,248,0.42)]"
        />
        <FloatingNode
          delay={1.3}
          duration={5.9}
          className="absolute left-[22%] bottom-[18%] h-5 w-5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.45)] dark:bg-cyan-200 dark:shadow-[0_0_18px_rgba(165,243,252,0.35)]"
        />
        <FloatingNode
          delay={0.5}
          duration={6.4}
          className="absolute right-[14%] bottom-[20%] h-5 w-5 rounded-full bg-blue-300 shadow-[0_0_22px_rgba(147,197,253,0.45)] dark:bg-blue-400 dark:shadow-[0_0_18px_rgba(96,165,250,0.35)]"
        />

        {/* connection beams */}
        <div className="absolute left-[8%] top-[28%] h-px w-[56%] overflow-hidden rounded-full bg-sky-300/20 dark:bg-cyan-400/10">
          <Beam
            duration={5}
            className="h-full w-24 bg-linear-to-r from-transparent via-sky-400/80 to-transparent dark:via-cyan-300/70"
          />
        </div>

        <div className="absolute right-[10%] top-[38%] h-px w-[42%] overflow-hidden rounded-full bg-blue-300/20 dark:bg-sky-400/10">
          <Beam
            delay={1}
            duration={4.2}
            rotate="-18deg"
            className="h-full w-24 bg-linear-to-r from-transparent via-blue-400/80 to-transparent dark:via-sky-300/70"
          />
        </div>

        <div className="absolute left-[16%] bottom-[26%] h-px w-[48%] overflow-hidden rounded-full bg-cyan-300/20 dark:bg-cyan-300/10">
          <Beam
            delay={0.6}
            duration={5.8}
            rotate="12deg"
            className="h-full w-24 bg-linear-to-r from-transparent via-cyan-400/80 to-transparent dark:via-cyan-200/70"
          />
        </div>

        {/* floating google access card */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 0.6, 0, -0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[12%] hidden w-57.5 rounded-[28px]
          border border-white/60 bg-white/60 p-4 shadow-[0_16px_60px_rgba(59,130,246,0.15)] backdrop-blur-2xl
          lg:block dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/75 px-4 py-3 dark:border-white/10 dark:bg-white/5">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white shadow-sm dark:bg-[#0f172a]">
              <FcGoogle size={20} />
            </div>

            <div>
              <p className="text-[11px] font-medium tracking-[0.2em] text-slate-500 dark:text-white/45">
                SAFE ACCESS
              </p>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                Google Sign Up
              </h4>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-2 rounded-full bg-sky-300/60 dark:bg-cyan-400/30" />
            <div className="h-2 rounded-full bg-blue-300/50 dark:bg-sky-400/20" />
            <div className="h-2 rounded-full bg-cyan-200/70 dark:bg-white/10" />
          </div>
        </motion.div>

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.14] dark:opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[28px] border border-white/70 bg-white/70 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-8
            dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_80px_rgba(0,0,0,0.38)]"
          >
            {/* Top badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 shadow-sm
              dark:border-orange-400/20 dark:bg-orange-500/10 dark:text-orange-300"
            >
              <motion.span
                animate={{ rotate: [0, 12, -12, 0], scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.4 }}
              >
                <Sparkles size={14} />
              </motion.span>
              Trusted Community Access
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="mt-5">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Create your account
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-white/65">
                Sign up to report, track, and recover lost or found items with a
                secure and premium experience.
              </p>
            </motion.div>

            {/* Google Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.015, y: -2 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => {
                window.location.href = "http://localhost:8080/auth/google";
              }}
              className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:shadow-md
              dark:border-white/10 dark:bg-white/6 dark:text-white"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <FcGoogle size={22} />
              </motion.span>
              Continue with Google
            </motion.button>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="my-6 flex items-center"
            >
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-white/15" />
              <span className="mx-4 text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-white/35">
                OR
              </span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent dark:via-white/15" />
            </motion.div>

            {/* Form */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Name */}
              <div>
                <div
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm transition-all duration-300 hover:border-slate-300 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100
                dark:border-white/10 dark:bg-white/6 dark:hover:border-white/20 dark:focus-within:border-orange-400/60 dark:focus-within:ring-orange-500/10"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-slate-400 dark:text-white/45"
                  >
                    <User size={18} />
                  </motion.span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameError) setNameError("");
                    }}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/35"
                  />
                </div>

                {nameError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-500 dark:text-red-400"
                  >
                    {nameError}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <div
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm transition-all duration-300 hover:border-slate-300 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100
                dark:border-white/10 dark:bg-white/6 dark:hover:border-white/20 dark:focus-within:border-orange-400/60 dark:focus-within:ring-orange-500/10"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-slate-400 dark:text-white/45"
                  >
                    <Mail size={18} />
                  </motion.span>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-white/35"
                  />
                </div>

                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-500 dark:text-red-400"
                  >
                    {emailError}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Phone Auth */}
            <motion.div variants={itemVariants} className="mt-4">
              <PhoneAuth
                onSuccess={(phone) => setPhone(phone)}
                error={phoneError}
              />
            </motion.div>

            {/* Create button */}
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.015,
                y: -2,
                boxShadow: "0px 16px 40px rgba(249,115,22,0.35)",
              }}
              whileTap={{ scale: 0.985 }}
              onClick={createAccount}
              className="mt-6 w-full cursor-pointer rounded-2xl bg-linear-to-r from-orange-500 via-orange-600 to-amber-500 px-4 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg md:text-base"
            >
              CREATE ACCOUNT
            </motion.button>

            {/* Sign in */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-center text-sm text-slate-500 dark:text-white/55"
            >
              Already have an account?{" "}
              <a
                className="font-semibold text-orange-600 transition hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-200"
                href="http://localhost:5173/signin"
              >
                Sign In
              </a>
            </motion.p>

            {/* Security Info */}
            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-3 py-3 text-sm text-slate-700
                dark:border-emerald-400/15 dark:bg-emerald-500/10 dark:text-white/80"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-emerald-600 dark:text-emerald-300"
                >
                  <Lock size={16} />
                </motion.span>
                Secure Authentication
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/80 px-3 py-3 text-sm text-slate-700
                dark:border-blue-400/15 dark:bg-blue-500/10 dark:text-white/80"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="text-blue-600 dark:text-blue-300"
                >
                  <ShieldCheck size={16} />
                </motion.span>
                Information Kept Private
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
