import { motion } from "framer-motion";
import { useAuth } from "../../Context/AuthContext";
import { MessageCircleMore, ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function ConversationList({
  conversations = [],
  selectedConversation,
  setSelectedConversation,
  loading,
}) {
  const { user } = useAuth();

  const getStatusStyles = (status) => {
    switch (status) {
      case "accepted":
        return "bg-emerald-500/10 text-emerald-700 border border-emerald-300/40";
      case "pending":
        return "bg-amber-500/10 text-amber-700 border border-amber-300/40";
      case "rejected":
        return "bg-rose-500/10 text-rose-700 border border-rose-300/40";
      default:
        return "bg-slate-500/10 text-slate-600 border border-slate-300/40";
    }
  };

  return (
    <div className="relative flex h-screen min-h-0 flex-col overflow-hidden bg-[#e9eefb] md:rounded-[30px] md:border md:border-white/20 md:shadow-[0_25px_80px_rgba(15,23,42,0.14)]">
      {/* 🔥 PREMIUM ANIMATED BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#eef2ff_0%,#e0e7ff_30%,#f1f5f9_100%)]" />

        {/* moving blob 1 */}
        <motion.div
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        />

        {/* moving blob 2 */}
        <motion.div
          animate={{
            x: [0, -50, 60, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
        />

        {/* moving blob 3 */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
        />
      </div>

      {/* 🔹 HEADER */}
      <div className="relative z-10 mb-3 shrink-0 border-b border-white/40 bg-white/60 px-4 py-4 backdrop-blur-xl md:mb-5 md:rounded-3xl md:border md:px-5 md:shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[26px] font-bold text-slate-900">Messages</h2>
            <p className="text-sm text-slate-500">
              {conversations.length} conversations
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg"
          >
            <MessageCircleMore className="h-5 w-5" />
          </motion.div>
        </div>
      </div>

      {/* 🔹 LIST */}
      <div className="relative z-10 flex-1 overflow-y-auto px-2 space-y-3">
        {conversations.map((conversation) => {
          const otherUser =
            String(
              conversation?.claimantId?._id || conversation?.claimantId,
            ) === String(user?._id)
              ? conversation?.reportOwnerId
              : conversation?.claimantId;

          const isSelected =
            String(selectedConversation?._id) === String(conversation?._id);

          return (
            <motion.button
              key={conversation._id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              onClick={() => setSelectedConversation(conversation)}
              className={`group relative w-full rounded-2xl border p-3 text-left transition-all ${
                isSelected
                  ? "border-blue-400 bg-white/80 shadow-[0_12px_30px_rgba(59,130,246,0.2)]"
                  : "border-white/40 bg-white/70 hover:bg-white/90"
              } backdrop-blur-xl`}
            >
              {/* subtle hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -left-10 top-0 h-20 w-20 bg-blue-500/10 blur-2xl rounded-full" />
              </div>

              <div className="relative z-10 flex items-center gap-3">
                {/* avatar */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full" />
                  <img
                    src={otherUser?.avatar || "/images/Profile/profile.jpeg"}
                    className="relative h-12 w-12 rounded-full object-cover border"
                  />
                </div>

                {/* text */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h3 className="font-semibold truncate">
                      {otherUser?.name}
                    </h3>

                    <span
                      className={`text-[10px] px-2 py-1 rounded-full font-semibold ${getStatusStyles(
                        conversation.status,
                      )}`}
                    >
                      {conversation.status}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500">
                    {conversation?.reportId?.name || "Item"}
                  </p>

                  <p className="text-sm truncate text-gray-700">
                    {conversation?.lastMessage || "No messages"}
                  </p>
                </div>

                <ChevronRight className="text-gray-400 group-hover:text-blue-500 transition" />
              </div>

              {/* bottom animated line */}
              <motion.div
                animate={{
                  scaleX: isSelected ? 1 : 0,
                }}
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400"
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
