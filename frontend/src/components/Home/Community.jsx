import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, ShieldCheck } from "lucide-react";

export default function Community() {
  const { user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white px-3 py-14 text-center sm:px-5 md:px-12">
      {/* Outer soft glow */}
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-15 -right-15 h-64 w-64 rounded-full bg-purple-200/25 blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative mx-auto w-full overflow-hidden rounded-[34px] border border-white/30 px-6 py-10 shadow-[0_30px_80px_rgba(0,71,204,0.18)] md:w-3xl md:px-12 md:py-14"
        style={{
          background:
            "linear-gradient(135deg, #00b4ff 0%, #0095ff 25%, #006aff 60%, #0047cc 100%)",
        }}
      >
        {/* Animated background layers */}
        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, -12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
        />

        <motion.div
          animate={{
            x: [0, -22, 0],
            y: [0, 12, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-12.5 -right-7.5 h-48 w-48 rounded-full bg-cyan-200/20 blur-3xl"
        />

        <motion.div
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-10 top-8 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-sm"
        />

        {/* Sub badge */}
        <motion.div
          variants={itemVariants}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur-md"
        >
          <Sparkles size={16} />
          Trusted Lost & Found Network
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
        >
          Join the Community Helping Return Lost Items
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base"
        >
          Every second, someone finds something valuable. Stay connected to the
          network that helps lost belongings get back to the right person —
          faster, safer, and with community support.
        </motion.p>

        {/* Mini feature pills */}
        <motion.div
          variants={itemVariants}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
          >
            <Users size={16} />
            Community Driven
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
          >
            <ShieldCheck size={16} />
            Safe & Reliable
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-8">
          {user ? (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{
                scale: 1.04,
                y: -3,
                boxShadow: "0px 20px 40px rgba(255,255,255,0.22)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white px-7 py-3.5 font-semibold text-[#0F172A] shadow-xl cursor-pointer"
            >
              Get Started Now
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          ) : (
            <Link to="/signIn">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -3,
                  boxShadow: "0px 20px 40px rgba(255,255,255,0.22)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white px-7 py-3.5 font-semibold text-[#0F172A] shadow-xl cursor-pointer"
              >
                Get Started Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>
          )}
        </motion.div>

        {/* Bottom shine */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white/10 to-transparent" />
      </motion.div>
    </section>
  );
}
