import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { motion } from "framer-motion";

export default function RedirectBack() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
    localStorage.removeItem("redirectAfterLogin");

    if (user) {
      navigate(redirectPath, { replace: true });
    } else {
      navigate("/signIn", { replace: true });
    }
  }, [user, loading, navigate]);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#0F172A]">
      {/* Animated Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(120deg,#0F172A,#1E293B,#020617)] bg-size-[200%_200%]"
      />

      {/* Glow blobs */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-10 left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Center Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center gap-6 rounded-4xl border border-white/10 bg-white/10 px-10 py-10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
      >
        {/* Spinner */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="h-14 w-14 rounded-full border-4 border-white/20 border-t-blue-500"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="absolute inset-0 rounded-full bg-blue-500/10 blur-md"
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-medium tracking-wide text-white/80"
        >
          Logging you in...
        </motion.p>

        {/* Animated dots */}
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.2,
              }}
              className="h-2 w-2 rounded-full bg-white/70"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
