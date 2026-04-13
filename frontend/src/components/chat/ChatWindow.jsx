import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SendHorizontal,
  MessageSquareText,
  Clock3,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowLeft,
  Check,
  CheckCheck,
} from "lucide-react";
import { useAuth } from "../../Context/AuthContext";
import {
  acceptConversationRequest,
  rejectConversationRequest,
} from "../../services/conversationService";
import {
  getMessages,
  markMessagesSeen,
  sendMessage,
} from "../../services/messageService";
import { useSocket } from "../../Context/SocketContext";

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const bubbleVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.24,
      ease: "easeOut",
    },
  },
};

const floatSoft = {
  animate: {
    y: [0, -4, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 3.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function AnimatedRightPanelBackground() {
  const lightParticles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        size: i % 5 === 0 ? 14 : i % 3 === 0 ? 9 : 5,
        left: `${4 + ((i * 13) % 92)}%`,
        top: `${5 + ((i * 9) % 88)}%`,
        duration: 8 + (i % 5) * 1.8,
        delay: (i % 7) * 0.3,
      })),
    [],
  );

  const darkParticles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        id: i,
        size: i % 6 === 0 ? 4 : i % 3 === 0 ? 2.8 : 2,
        left: `${3 + ((i * 17) % 94)}%`,
        top: `${4 + ((i * 11) % 90)}%`,
        duration: 4 + (i % 6),
        delay: (i % 8) * 0.25,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* LIGHT THEME */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#fff7e8_18%,#eef8ff_42%,#f5f9ff_70%,#edf4ff_100%)]" />

        {/* main sunlight */}
        <motion.div
          animate={{
            x: [0, -30, 24, 0],
            y: [0, 18, -8, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-28 -top-24 h-96 w-96 rounded-full bg-yellow-300/50 blur-3xl"
        />

        {/* sun */}
        <motion.div
          animate={{
            x: [0, -16, 10, 0],
            y: [0, 10, -6, 0],
            rotate: [0, 8, -4, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[4%] top-[4%]"
        >
          <div className="relative h-24 w-24 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff9d9_0%,#ffe48a_38%,#ffcb57_68%,#ffb703_100%)] shadow-[0_0_70px_rgba(255,191,0,0.38)]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4.5 rounded-full border border-yellow-300/35"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8.5 rounded-full border border-amber-200/20"
            />
          </div>
        </motion.div>

        {/* rays */}
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
          className="absolute right-[-6%] top-[-8%] h-120 w-120 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,207,88,0.00)_0deg,rgba(255,207,88,0.18)_30deg,rgba(255,207,88,0.00)_68deg,rgba(255,207,88,0.13)_116deg,rgba(255,207,88,0.00)_180deg,rgba(255,207,88,0.11)_238deg,rgba(255,207,88,0.00)_304deg,rgba(255,207,88,0.17)_340deg,rgba(255,207,88,0.00)_360deg)] blur-2xl"
        />

        {/* floating bright chat cards */}
        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 14, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-[12%] rounded-[28px] border border-sky-200/60 bg-white/55 px-6 py-4 shadow-[0_20px_45px_rgba(59,130,246,0.08)] backdrop-blur-xl"
        >
          <div className="h-3 w-20 rounded-full bg-sky-200/80" />
          <div className="mt-2 h-3 w-12 rounded-full bg-blue-100/90" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 16, 0], x: [0, -14, 0], rotate: [0, -4, 0] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[12%] top-[34%] rounded-3xl border border-pink-200/60 bg-white/45 px-5 py-3 shadow-[0_18px_40px_rgba(236,72,153,0.08)] backdrop-blur-xl"
        >
          <div className="h-2.5 w-16 rounded-full bg-pink-200/80" />
          <div className="mt-2 h-2.5 w-10 rounded-full bg-rose-100/90" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0], x: [0, 18, 0], rotate: [0, 4, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute left-[14%] bottom-[16%] rounded-[26px] border border-violet-200/60 bg-white/40 px-6 py-4 shadow-[0_18px_45px_rgba(124,58,237,0.08)] backdrop-blur-xl"
        >
          <div className="h-3 w-24 rounded-full bg-violet-200/80" />
          <div className="mt-2 h-3 w-14 rounded-full bg-fuchsia-100/90" />
        </motion.div>

        {/* flowing ribbons */}
        <motion.svg
          viewBox="0 0 420 820"
          className="absolute inset-0 h-full w-full opacity-60"
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient
              id="chatWindowLightWave1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient
              id="chatWindowLightWave2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#facc15" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          <motion.path
            d="M-40 160 C 40 110, 120 230, 220 180 S 360 100, 460 170"
            stroke="url(#chatWindowLightWave1)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-40 160 C 40 110, 120 230, 220 180 S 360 100, 460 170",
                "M-40 175 C 50 130, 120 215, 220 165 S 360 120, 460 185",
                "M-40 160 C 40 110, 120 230, 220 180 S 360 100, 460 170",
              ],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.path
            d="M-60 540 C 50 490, 140 630, 250 580 S 360 490, 470 555"
            stroke="url(#chatWindowLightWave2)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: [
                "M-60 540 C 50 490, 140 630, 250 580 S 360 490, 470 555",
                "M-60 565 C 60 510, 150 610, 255 565 S 355 520, 470 575",
                "M-60 540 C 50 490, 140 630, 250 580 S 360 490, 470 555",
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

        <div className="absolute inset-x-0 bottom-0 h-48 bg-[radial-gradient(circle_at_bottom,rgba(96,165,250,0.16),transparent_70%)]" />
      </div>

      {/* DARK THEME */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#101a39_0%,#070d1f_28%,#040917_56%,#02040c_100%)]" />

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

        {/* cyber mesh */}
        <motion.svg
          viewBox="0 0 400 820"
          className="absolute inset-0 h-full w-full opacity-55"
          animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient
              id="chatWindowDarkLine1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.12" />
            </linearGradient>

            <linearGradient
              id="chatWindowDarkLine2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.10" />
            </linearGradient>

            <radialGradient id="chatWindowNodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
            </radialGradient>
          </defs>

          <motion.path
            d="M-40 120 C 40 80, 100 180, 170 150 S 280 70, 430 130"
            stroke="url(#chatWindowDarkLine1)"
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
            stroke="url(#chatWindowDarkLine2)"
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
            stroke="url(#chatWindowDarkLine1)"
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
              <circle cx={cx} cy={cy} r="8" fill="url(#chatWindowNodeGlow)" />
              <circle cx={cx} cy={cy} r="1.8" fill="#67e8f9" opacity="0.95" />
            </g>
          ))}
        </motion.svg>

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

        <motion.div
          animate={{ y: ["-10%", "110%"] }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-x-0 h-24 bg-[linear-gradient(180deg,rgba(34,211,238,0)_0%,rgba(34,211,238,0.08)_45%,rgba(34,211,238,0)_100%)] blur-xl"
        />

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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_18%,rgba(2,6,23,0.12)_100%)]" />
      </div>
    </div>
  );
}

function StatusPill({ status }) {
  const normalized = status?.toLowerCase() || "pending";

  const styles =
    normalized === "accepted"
      ? "border-emerald-300/40 bg-emerald-400/12 text-emerald-700 dark:text-emerald-200"
      : normalized === "rejected"
        ? "border-rose-300/40 bg-rose-400/12 text-rose-700 dark:text-rose-200"
        : "border-amber-300/40 bg-amber-400/12 text-amber-700 dark:text-amber-200";

  const icon =
    normalized === "accepted" ? (
      <CheckCircle2 className="h-3.5 w-3.5" />
    ) : normalized === "rejected" ? (
      <XCircle className="h-3.5 w-3.5" />
    ) : (
      <Clock3 className="h-3.5 w-3.5" />
    );

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur-xl md:text-[11px] ${styles}`}
    >
      {icon}
      <span>{status}</span>
    </motion.div>
  );
}

function MessageTicks({ isOwn, isSeen }) {
  if (!isOwn) return null;

  return isSeen ? (
    <CheckCheck className="h-4 w-4 text-cyan-500 dark:text-cyan-200" />
  ) : (
    <Check className="h-4 w-4 text-slate-500 dark:text-white/75" />
  );
}

export default function ChatWindow({
  conversation,
  onBack,
  refreshConversations,
}) {
  const { user } = useAuth();
  const { socket } = useSocket();

  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const isOwner =
    String(conversation?.reportOwnerId?._id || conversation?.reportOwnerId) ===
    String(user?._id);

  const otherUser =
    String(conversation?.claimantId?._id || conversation?.claimantId) ===
    String(user?._id)
      ? conversation?.reportOwnerId
      : conversation?.claimantId;

  const markConversationSeenRealtime = useCallback(async () => {
    if (!conversation?._id) return;

    try {
      const data = await markMessagesSeen(conversation._id);

      if (data?.updatedMessageIds?.length) {
        setMessages((prev) =>
          prev.map((msg) =>
            data.updatedMessageIds.includes(String(msg._id))
              ? { ...msg, isSeen: true }
              : msg,
          ),
        );
      }
    } catch (error) {
      console.log("Mark seen realtime error:", error);
    }
  }, [conversation?._id]);

  useEffect(() => {
    if (!conversation?._id) return;

    const fetchMessages = async () => {
      try {
        const data = await getMessages(conversation._id);
        setMessages(data.messages || []);
        await markConversationSeenRealtime();
      } catch (error) {
        console.log("Fetch messages error:", error);
      }
    };

    fetchMessages();
  }, [conversation?._id, markConversationSeenRealtime]);

  useEffect(() => {
    if (!socket || !conversation?._id) return;

    const handleNewMessage = async (incomingMessage) => {
      const incomingConversationId = String(
        incomingMessage?.conversationId?._id || incomingMessage?.conversationId,
      );

      const currentConversationId = String(conversation?._id);

      if (incomingConversationId !== currentConversationId) return;

      setMessages((prev) => {
        const alreadyExists = prev.some(
          (msg) => String(msg._id) === String(incomingMessage._id),
        );

        if (alreadyExists) return prev;
        return [...prev, incomingMessage];
      });

      const incomingSenderId = String(
        incomingMessage?.senderId?._id || incomingMessage?.senderId,
      );

      const isIncomingFromOtherUser = incomingSenderId !== String(user?._id);

      if (isIncomingFromOtherUser) {
        await markConversationSeenRealtime();
      }
    };

    const handleMessagesSeen = ({ conversationId, messageIds }) => {
      if (String(conversationId) !== String(conversation?._id)) return;

      setMessages((prev) =>
        prev.map((msg) =>
          messageIds.includes(String(msg._id)) ? { ...msg, isSeen: true } : msg,
        ),
      );
    };

    socket.on("new_message", handleNewMessage);
    socket.on("messages_seen", handleMessagesSeen);

    return () => {
      socket.off("new_message", handleNewMessage);
      socket.off("messages_seen", handleMessagesSeen);
    };
  }, [socket, conversation?._id, user?._id, markConversationSeenRealtime]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAccept = async () => {
    try {
      setLoading(true);
      await acceptConversationRequest(conversation._id);
      if (refreshConversations) await refreshConversations();
    } catch (error) {
      console.log("Accept error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    try {
      setLoading(true);
      await rejectConversationRequest(conversation._id);
      if (refreshConversations) await refreshConversations();
    } catch (error) {
      console.log("Reject error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!text.trim()) return;

    try {
      const data = await sendMessage(conversation._id, text.trim());

      if (data?.newMessage) {
        setMessages((prev) => {
          const alreadyExists = prev.some(
            (msg) => String(msg._id) === String(data.newMessage._id),
          );

          if (alreadyExists) return prev;
          return [...prev, data.newMessage];
        });
      }

      setText("");
      if (refreshConversations) await refreshConversations();
    } catch (error) {
      console.log("Send message error:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const formatTime = (dateValue) => {
    if (!dateValue) return "";
    const date = new Date(dateValue);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!conversation) {
    return (
      <div className="relative hidden min-h-155 h-full items-center justify-center overflow-hidden border border-slate-200/70 bg-white/45 shadow-[0_24px_70px_rgba(148,163,184,0.18)] dark:border-white/10 dark:bg-[#020617] dark:shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:flex">
        <AnimatedRightPanelBackground />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-md px-6 text-center"
        >
          <motion.div
            variants={floatSoft}
            animate="animate"
            className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200/70 bg-white/55 shadow-[0_18px_45px_rgba(59,130,246,0.10)] backdrop-blur-xl dark:border-white/12 dark:bg-white/8 dark:shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
          >
            <MessageSquareText className="h-9 w-9 text-sky-600 dark:text-pink-200" />
          </motion.div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Open a conversation
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Pick any chat from the left panel to continue the conversation.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative flex min-h-155 h-full flex-col overflow-hidden border border-slate-200/70 bg-white/40 shadow-[0_24px_60px_rgba(148,163,184,0.18)] dark:border-white/10 dark:bg-[#020617] dark:shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
    >
      <AnimatedRightPanelBackground />

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 border-b border-slate-200/70 bg-white/45 px-4 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 md:px-6"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onBack}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-slate-700 shadow-sm dark:border-white/12 dark:bg-white/10 dark:text-white md:hidden"
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.04, rotate: 2 }}
              className="relative shrink-0"
            >
              <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-md dark:bg-pink-500/15" />
              {otherUser?.avatar ? (
                <img
                  src={otherUser.avatar}
                  alt={otherUser?.name || "User"}
                  className="relative h-12 w-12 rounded-full border-2 border-white/70 object-cover shadow-[0_14px_30px_rgba(0,0,0,0.15)] dark:border-white/20 dark:shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#60a5fa,#f472b6)] text-sm font-bold text-white shadow-[0_14px_30px_rgba(59,130,246,0.18)] dark:bg-[linear-gradient(135deg,#2a0b45,#8b3dff)] dark:shadow-[0_14px_30px_rgba(0,0,0,0.22)]">
                  {getInitials(otherUser?.name)}
                </div>
              )}
            </motion.div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="truncate text-[17px] font-bold text-slate-900 dark:text-white md:text-[18px]">
                  {otherUser?.name || "Chat"}
                </h2>

                <motion.div
                  variants={floatSoft}
                  animate="animate"
                  className="hidden text-pink-500 dark:text-pink-300 sm:block"
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
              </div>

              <p className="truncate text-[12px] text-slate-600 dark:text-slate-300 md:text-[13px]">
                {conversation?.reportId?.name || "Lost & Found conversation"}
              </p>
            </div>
          </div>

          <StatusPill status={conversation.status} />
        </div>
      </motion.div>

      {/* messages */}
      <div className="relative z-10 flex-1 overflow-y-auto px-3 py-4 no-scrollbar md:px-5 md:py-5">
        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex h-full min-h-80 items-center justify-center"
          >
            <div className="max-w-sm rounded-[28px] border border-slate-200/70 bg-white/55 px-7 py-10 text-center shadow-[0_18px_45px_rgba(59,130,246,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
              <motion.div
                variants={floatSoft}
                animate="animate"
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[20px] border border-slate-200/70 bg-white/70 text-sky-600 dark:border-white/12 dark:bg-white/10 dark:text-pink-200"
              >
                <MessageSquareText className="h-7 w-7" />
              </motion.div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                No messages yet
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Start chatting once the request is accepted.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {messages.map((message) => {
              const isOwn =
                String(message.senderId?._id || message.senderId) ===
                String(user?._id);

              const isSeen = Boolean(message.isSeen);

              return (
                <motion.div
                  key={message._id}
                  variants={bubbleVariants}
                  className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
                >
                  <motion.div
                    whileHover={{ y: -2, scale: 1.01 }}
                    className={`relative max-w-[84%] overflow-hidden rounded-3xl px-4 py-3.5 text-sm shadow-[0_14px_34px_rgba(15,23,42,0.12)] md:max-w-[72%] ${
                      isOwn
                        ? "border border-fuchsia-300/20 bg-[linear-gradient(135deg,rgba(236,72,153,0.18),rgba(79,70,229,0.28))] text-slate-900 backdrop-blur-xl dark:border-fuchsia-300/15 dark:bg-[linear-gradient(135deg,rgba(236,72,153,0.22),rgba(79,70,229,0.38))] dark:text-white"
                        : "border border-slate-200/70 bg-white/65 text-slate-900 backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:text-white"
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_34%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)]" />

                    <div className="relative z-10">
                      <p className="whitespace-pre-wrap wrap-break-word text-[14px] leading-6">
                        {message.text}
                      </p>

                      <div className="mt-2 flex items-center justify-end gap-2">
                        <span
                          className={`text-[11px] ${
                            isOwn
                              ? "text-slate-700/80 dark:text-pink-100/80"
                              : "text-slate-500/80 dark:text-slate-300/70"
                          }`}
                        >
                          {formatTime(message.createdAt)}
                        </span>

                        <MessageTicks isOwn={isOwn} isSeen={isSeen} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
            <div ref={messagesEndRef} />
          </motion.div>
        )}

        {/* owner pending actions */}
        <AnimatePresence>
          {conversation.status === "pending" && isOwner && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              className="mt-5 rounded-3xl border border-amber-300/25 bg-[linear-gradient(135deg,rgba(251,191,36,0.14),rgba(180,83,9,0.08))] p-5 shadow-[0_16px_38px_rgba(245,158,11,0.10)] backdrop-blur-xl dark:border-amber-300/15 dark:bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(180,83,9,0.08))] dark:shadow-[0_16px_38px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-3 flex items-center gap-2 text-amber-700 dark:text-amber-200">
                <motion.div variants={floatSoft} animate="animate">
                  <Clock3 className="h-5 w-5" />
                </motion.div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Pending request
                </h4>
              </div>

              <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                Accept to unlock the full conversation or reject to close this
                request.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAccept}
                  disabled={loading}
                  className="flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#16A34A,#15803D)] px-5 py-2.5 font-semibold text-white shadow-[0_10px_24px_rgba(22,163,74,0.26)]"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {loading ? "Processing..." : "Accept"}
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReject}
                  disabled={loading}
                  className="flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#EF4444,#DC2626)] px-5 py-2.5 font-semibold text-white shadow-[0_10px_24px_rgba(239,68,68,0.24)]"
                >
                  <XCircle className="h-4 w-4" />
                  {loading ? "Processing..." : "Reject"}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* claimant waiting */}
        <AnimatePresence>
          {conversation.status === "pending" && !isOwner && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              className="mt-5 flex items-center gap-2 rounded-[20px] border border-sky-200/70 bg-white/55 p-4 text-sm text-sky-700 shadow-[0_10px_26px_rgba(59,130,246,0.08)] backdrop-blur-md dark:border-blue-300/15 dark:bg-blue-400/8 dark:text-blue-100 dark:shadow-[0_10px_26px_rgba(0,0,0,0.10)]"
            >
              <Clock3 className="h-4 w-4" />
              Waiting for the report owner to respond.
            </motion.div>
          )}
        </AnimatePresence>

        {/* rejected */}
        <AnimatePresence>
          {conversation.status === "rejected" && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              className="mt-5 flex items-center gap-2 rounded-[20px] border border-rose-200/70 bg-white/55 p-4 text-sm text-rose-700 shadow-[0_10px_26px_rgba(244,63,94,0.08)] backdrop-blur-md dark:border-rose-300/15 dark:bg-rose-400/8 dark:text-rose-100 dark:shadow-[0_10px_26px_rgba(0,0,0,0.10)]"
            >
              <XCircle className="h-4 w-4" />
              This request was rejected. You cannot send more messages here.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* input */}
      {conversation.status === "accepted" && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 border-t border-slate-200/70 bg-white/45 px-3 pb-3 pt-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 md:px-4 md:pb-4"
        >
          <div className="flex items-end gap-3">
            <div className="flex flex-1 items-end gap-3 rounded-[22px] border border-slate-200/70 bg-white/65 px-4 py-3 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-md transition-all duration-300 focus-within:border-pink-300/40 dark:border-white/10 dark:bg-white/8 dark:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:focus-within:border-pink-300/25">
              <MessageSquareText className="mb-1 h-5 w-5 text-sky-600 dark:text-pink-200" />

              <textarea
                rows={1}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="max-h-28 flex-1 resize-none bg-transparent text-[14px] leading-6 text-slate-900 outline-none placeholder:text-slate-500 dark:text-white dark:placeholder:text-slate-300"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.08, rotate: 8 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleSendMessage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ec4899,#4f46e5)] text-white shadow-[0_10px_25px_rgba(99,102,241,0.34)]"
            >
              <SendHorizontal className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
