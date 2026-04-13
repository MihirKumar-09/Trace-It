import { useMemo } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../Context/AuthContext";
import { MessageCircleMore } from "lucide-react";

function AnimatedSidebarBackground() {
  const lightParticles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: i % 4 === 0 ? 12 : i % 3 === 0 ? 8 : 5,
        left: `${5 + ((i * 13) % 88)}%`,
        top: `${6 + ((i * 11) % 84)}%`,
        duration: 8 + (i % 5) * 2,
        delay: (i % 6) * 0.35,
      })),
    [],
  );

  const darkParticles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        id: i,
        size: i % 5 === 0 ? 3.5 : i % 3 === 0 ? 2.5 : 1.8,
        left: `${4 + ((i * 17) % 92)}%`,
        top: `${5 + ((i * 9) % 88)}%`,
        duration: 4 + (i % 5),
        delay: (i % 7) * 0.28,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* LIGHT THEME */}
      <div className="absolute inset-0 dark:hidden">
        {/* base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#fef7e7_20%,#eef7ff_48%,#f4f8ff_74%,#edf4ff_100%)]" />

        {/* big sunlight aura */}
        <motion.div
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 20, -10, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-yellow-300/50 blur-3xl"
        />

        {/* sun core */}
        <motion.div
          animate={{
            x: [0, -18, 8, 0],
            y: [0, 10, -6, 0],
            rotate: [0, 8, -4, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[4%]"
        >
          <div className="relative h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff8d6_0%,#ffe48b_38%,#ffca55_68%,#ffb703_100%)] shadow-[0_0_60px_rgba(255,191,0,0.40)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4.5 rounded-full border border-yellow-300/35"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8.5 rounded-full border border-amber-200/20"
            />
          </div>
        </motion.div>

        {/* light rays */}
        <motion.div
          animate={{
            rotate: [0, 10, -6, 0],
            scale: [1, 1.04, 0.98, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-4%] top-[-8%] h-112 w-md rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,207,88,0.00)_0deg,rgba(255,207,88,0.18)_32deg,rgba(255,207,88,0.00)_68deg,rgba(255,207,88,0.14)_118deg,rgba(255,207,88,0.00)_180deg,rgba(255,207,88,0.12)_240deg,rgba(255,207,88,0.00)_308deg,rgba(255,207,88,0.16)_340deg,rgba(255,207,88,0.00)_360deg)] blur-2xl"
        />

        {/* floating chat bubbles */}
        <motion.div
          animate={{ y: [0, -16, 0], x: [0, 14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[12%] rounded-[28px] border border-sky-200/60 bg-white/50 px-6 py-4 shadow-[0_20px_45px_rgba(59,130,246,0.08)] backdrop-blur-xl"
        >
          <div className="h-3 w-20 rounded-full bg-sky-200/70" />
          <div className="mt-2 h-3 w-12 rounded-full bg-blue-100/90" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -16, 0], rotate: [0, -4, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[14%] top-[36%] rounded-3xl border border-pink-200/60 bg-white/45 px-5 py-3 shadow-[0_18px_40px_rgba(236,72,153,0.08)] backdrop-blur-xl"
        >
          <div className="h-2.5 w-16 rounded-full bg-pink-200/80" />
          <div className="mt-2 h-2.5 w-10 rounded-full bg-rose-100/90" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 20, 0], rotate: [0, 4, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute left-[16%] bottom-[16%] rounded-[26px] border border-violet-200/60 bg-white/40 px-6 py-4 shadow-[0_18px_45px_rgba(124,58,237,0.08)] backdrop-blur-xl"
        >
          <div className="h-3 w-24 rounded-full bg-violet-200/70" />
          <div className="mt-2 h-3 w-14 rounded-full bg-fuchsia-100/90" />
        </motion.div>

        {/* flowing wave ribbons */}
        <motion.svg
          viewBox="0 0 420 820"
          className="absolute inset-0 h-full w-full opacity-60"
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="lightWave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.08" />
            </linearGradient>

            <linearGradient id="lightWave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#facc15" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          <motion.path
            d="M-40 150 C 40 100, 120 220, 220 170 S 360 90, 460 160"
            stroke="url(#lightWave1)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-40 150 C 40 100, 120 220, 220 170 S 360 90, 460 160",
                "M-40 165 C 50 120, 120 205, 220 155 S 360 110, 460 175",
                "M-40 150 C 40 100, 120 220, 220 170 S 360 90, 460 160",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M-60 520 C 50 470, 140 610, 250 560 S 360 470, 470 535"
            stroke="url(#lightWave2)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-60 520 C 50 470, 140 610, 250 560 S 360 470, 470 535",
                "M-60 545 C 60 490, 150 590, 255 545 S 355 500, 470 555",
                "M-60 520 C 50 470, 140 610, 250 560 S 360 470, 470 535",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </motion.svg>

        {/* floating soft particles */}
        {lightParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              background:
                particle.id % 2 === 0
                  ? "rgba(251,191,36,0.45)"
                  : "rgba(96,165,250,0.38)",
              boxShadow:
                particle.id % 2 === 0
                  ? "0 0 16px rgba(251,191,36,0.38)"
                  : "0 0 16px rgba(96,165,250,0.30)",
            }}
            animate={{
              y: [0, -20, 0, 12, 0],
              x: [0, 8, -6, 10, 0],
              opacity: [0.25, 0.65, 0.32, 0.55, 0.25],
              scale: [1, 1.2, 0.95, 1.08, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* bottom glow */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(96,165,250,0.16),transparent_70%)]" />
      </div>

      {/* DARK THEME */}
      <div className="absolute inset-0 hidden dark:block">
        {/* base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#101a39_0%,#070d1f_28%,#040917_56%,#02040c_100%)]" />

        {/* neon glows */}
        <motion.div
          animate={{
            x: [0, 40, -22, 0],
            y: [0, -28, 16, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 24, -18, 0],
            scale: [1, 0.94, 1.08, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-fuchsia-500/12 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 24, -28, 0],
            y: [0, -18, 26, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-30 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        />

        {/* pulse rings */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.22, 0.08, 0.22],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[14%] top-[16%] h-44 w-44 rounded-full border border-cyan-300/20"
        />
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.16, 0.05, 0.16],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute right-[10%] top-[42%] h-52 w-52 rounded-full border border-fuchsia-300/15"
        />

        {/* cyber wave mesh */}
        <motion.svg
          viewBox="0 0 400 820"
          className="absolute inset-0 h-full w-full opacity-55"
          animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="darkLine1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
            </linearGradient>

            <linearGradient id="darkLine2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.10" />
            </linearGradient>

            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
            </radialGradient>
          </defs>

          <motion.path
            d="M-40 120 C 40 80, 100 180, 170 150 S 280 70, 430 130"
            stroke="url(#darkLine1)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-40 120 C 40 80, 100 180, 170 150 S 280 70, 430 130",
                "M-40 140 C 50 90, 110 165, 180 138 S 295 82, 430 145",
                "M-40 120 C 40 80, 100 180, 170 150 S 280 70, 430 130",
              ],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M-30 280 C 55 220, 120 335, 200 300 S 315 225, 430 285"
            stroke="url(#darkLine2)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-30 280 C 55 220, 120 335, 200 300 S 315 225, 430 285",
                "M-30 300 C 65 245, 125 320, 205 288 S 320 245, 430 300",
                "M-30 280 C 55 220, 120 335, 200 300 S 315 225, 430 285",
              ],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />

          <motion.path
            d="M-50 520 C 40 460, 135 600, 225 555 S 325 470, 450 535"
            stroke="url(#darkLine1)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-50 520 C 40 460, 135 600, 225 555 S 325 470, 450 535",
                "M-50 545 C 58 490, 140 585, 228 542 S 330 495, 450 550",
                "M-50 520 C 40 460, 135 600, 225 555 S 325 470, 450 535",
              ],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />

          {[
            [56, 110],
            [126, 160],
            [218, 140],
            [318, 100],
            [74, 265],
            [158, 318],
            [244, 286],
            [330, 248],
            [84, 505],
            [182, 566],
            [270, 532],
            [346, 492],
          ].map(([cx, cy], index) => (
            <g key={index}>
              <circle cx={cx} cy={cy} r="8" fill="url(#nodeGlow)" />
              <circle cx={cx} cy={cy} r="1.8" fill="#67e8f9" opacity="0.95" />
            </g>
          ))}
        </motion.svg>

        {/* data particles */}
        {darkParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-cyan-200/80"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              boxShadow:
                particle.id % 2 === 0
                  ? "0 0 12px rgba(103,232,249,0.65)"
                  : "0 0 12px rgba(217,70,239,0.45)",
            }}
            animate={{
              opacity: [0.2, 1, 0.3],
              scale: [1, 1.8, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* scan line */}
        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-x-0 h-24 bg-[linear-gradient(180deg,rgba(34,211,238,0)_0%,rgba(34,211,238,0.08)_45%,rgba(34,211,238,0)_100%)] blur-xl"
        />

        {/* subtle grid */}
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* glass veil */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_18%,rgba(2,6,23,0.12)_100%)]" />
      </div>
    </div>
  );
}

function HeaderIconCard() {
  return (
    <motion.div
      animate={{
        rotate: [-8, -4, -8],
        y: [0, -3, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-[22px] bg-pink-400/15 blur-xl dark:bg-cyan-400/15" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/20 bg-white/35 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-linear-to-br from-pink-400 to-fuchsia-500 opacity-80 blur-[2px] dark:from-cyan-400 dark:to-blue-500" />
        <MessageCircleMore className="relative z-10 h-7 w-7 text-slate-800 dark:text-white" />
      </div>
    </motion.div>
  );
}

export default function ConversationList({
  conversations = [],
  selectedConversation,
  setSelectedConversation,
  loading,
}) {
  const { user } = useAuth();
  const defaultAvatar = "/images/Profile/profile.jpeg";

  if (loading) {
    return (
      <div className="relative h-full min-h-155 overflow-hidden border border-slate-200/70 bg-white/50 shadow-[0_24px_80px_rgba(148,163,184,0.20)] backdrop-blur-xl dark:border-white/10 dark:bg-[#020617] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <AnimatedSidebarBackground />

        <div className="relative z-10 p-5">
          <div className="flex items-start justify-between gap-4 border-b border-slate-200/70 pb-5 dark:border-white/10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Messages
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                Loading conversations...
              </p>
            </div>
            <HeaderIconCard />
          </div>

          <div className="mt-6 space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/60 bg-white/45 px-4 py-3 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.07]"
              >
                <div className="h-14 w-14 animate-pulse rounded-full bg-slate-300/70 dark:bg-white/15" />
                <div className="min-w-0 flex-1">
                  <div className="h-4 w-36 animate-pulse rounded bg-slate-300/70 dark:bg-white/15" />
                  <div className="mt-3 h-3 w-28 animate-pulse rounded bg-slate-300/50 dark:bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-155 overflow-hidden border border-slate-200/70 bg-white/45 shadow-[0_24px_80px_rgba(148,163,184,0.20)] backdrop-blur-xl dark:border-white/10 dark:bg-[#020617] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <AnimatedSidebarBackground />

      <div className="relative z-10 flex h-full flex-col">
        <div className="border-b border-slate-200/70 px-5 pb-5 pt-6 backdrop-blur-[6px] dark:border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 backdrop-blur-md dark:border-white/10 dark:bg-white/6 dark:text-cyan-200/85">
                Inbox
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Messages
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                {conversations.length} conversation
                {conversations.length !== 1 ? "s" : ""}
              </p>
            </div>

            <HeaderIconCard />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2">
          {conversations.length === 0 ? (
            <div className="mx-2 mt-4 rounded-3xl border border-slate-200/70 bg-white/45 p-6 text-center backdrop-blur-md dark:border-white/10 dark:bg-white/8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                No conversations yet
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-white/65">
                When someone messages you, chats will appear here.
              </p>
            </div>
          ) : (
            conversations.map((conversation, index) => {
              const otherUser =
                String(conversation.claimantId?._id) === String(user?._id)
                  ? conversation.reportOwnerId
                  : conversation.claimantId;

              const isSelected = selectedConversation?._id === conversation._id;
              const status = conversation.status?.toLowerCase() || "pending";

              return (
                <motion.button
                  key={conversation._id}
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`relative flex w-full cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-white/55 shadow-[0_12px_28px_rgba(59,130,246,0.10)] backdrop-blur-xl dark:bg-white/10 dark:shadow-[0_12px_30px_rgba(34,211,238,0.08)]"
                      : "bg-transparent hover:bg-white/30 dark:hover:bg-white/5"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute bottom-3 left-0 top-3 w-1 rounded-full bg-linear-to-b from-sky-400 via-blue-500 to-pink-400 dark:from-cyan-400 dark:via-blue-500 dark:to-fuchsia-500" />
                  )}

                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-md dark:bg-cyan-400/12" />
                    <img
                      src={otherUser?.avatar || defaultAvatar}
                      alt={otherUser?.name || "User"}
                      className="relative h-14 w-14 rounded-full border border-white/60 object-cover shadow-[0_10px_24px_rgba(0,0,0,0.15)] dark:border-white/15 dark:shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div
                    className={`min-w-0 flex-1 py-1 ${
                      index !== conversations.length - 1
                        ? "border-b border-slate-200/60 dark:border-white/8"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="truncate text-[17px] font-semibold text-slate-900 dark:text-white">
                        {otherUser?.name || "User"}
                      </h3>

                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] ${
                          status === "accepted"
                            ? "bg-emerald-400/15 text-emerald-700 dark:text-emerald-300"
                            : status === "rejected"
                              ? "bg-rose-400/15 text-rose-700 dark:text-rose-300"
                              : "bg-amber-400/15 text-amber-700 dark:text-amber-300"
                        }`}
                      >
                        {conversation.status}
                      </span>
                    </div>

                    <p className="mt-2 truncate text-[15px] text-slate-600 dark:text-white/76">
                      {conversation.lastMessage || "No messages"}
                    </p>
                  </div>
                </motion.button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
