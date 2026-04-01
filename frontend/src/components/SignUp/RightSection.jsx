import { FcGoogle } from "react-icons/fc";
import { Lock, ShieldCheck, Sparkles, User, Mail } from "lucide-react";
import PhoneAuth from "./PhoneAuth";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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

  return (
    <section className="relative w-full md:w-1/2 overflow-hidden bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef2ff_35%,#e2e8f0_100%)]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-16 right-10 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-10 left-8 h-52 w-52 rounded-full bg-blue-300/20 blur-3xl"
        />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-10">
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
            className="rounded-[28px] border border-white/50 bg-white/75 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.15)] p-6 sm:p-8"
          >
            {/* Top badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 shadow-sm"
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
              <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                Create your account
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
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
              className="mt-6 w-full flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition cursor-pointer hover:shadow-md"
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
              className="flex items-center my-6"
            >
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent" />
              <span className="mx-4 text-xs font-semibold tracking-[0.2em] text-slate-400">
                OR
              </span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-slate-300 to-transparent" />
            </motion.div>

            {/* Form */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Name */}
              <div>
                <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm transition-all duration-300 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 hover:border-slate-300">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-slate-400"
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
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                  />
                </div>
                {nameError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-500"
                  >
                    {nameError}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm transition-all duration-300 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 hover:border-slate-300">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-slate-400"
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
                    className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                  />
                </div>

                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 text-sm text-red-500"
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
              className="mt-6 w-full rounded-2xl bg-linear-to-r from-orange-500 via-orange-600 to-amber-500 px-4 py-3.5 text-sm md:text-base font-semibold tracking-wide text-white shadow-lg cursor-pointer"
            >
              CREATE ACCOUNT
            </motion.button>

            {/* Sign in */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-center text-sm text-slate-500"
            >
              Already have an account?{" "}
              <a
                className="font-semibold text-orange-600 hover:text-orange-700 transition"
                href="http://localhost:5173/signin"
              >
                Sign In
              </a>
            </motion.p>

            {/* Security Info */}
            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/80 px-3 py-3 text-sm text-slate-700"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-emerald-600"
                >
                  <Lock size={16} />
                </motion.span>
                Secure Authentication
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50/80 px-3 py-3 text-sm text-slate-700"
              >
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2 }}
                  className="text-blue-600"
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
