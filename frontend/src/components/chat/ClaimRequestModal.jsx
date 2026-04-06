import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, SendHorizontal, X, SearchCheck } from "lucide-react";
import { createClaimRequest } from "../../services/conversationService";
import { toast } from "react-toastify";

export default function ClaimRequestModal({ open, onClose, report }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const isFoundReport = report?.reportType === "found";

  const handleSubmit = async () => {
    if (!text.trim()) {
      toast.error("Please enter your message");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        reportId: report._id,
        text,
        initiatedByAction: isFoundReport ? "this_is_mine" : "i_found_this",
      };

      await createClaimRequest(payload);
      toast.success("Request sent successfully");
      setText("");
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send request");
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !loading) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-4xl border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(248,250,252,0.90))] shadow-[0_30px_90px_rgba(15,23,42,0.28)] backdrop-blur-2xl"
          >
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_32%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_30%)]" />

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.94 }}
              onClick={onClose}
              disabled={loading}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition hover:text-slate-800 disabled:cursor-not-allowed"
            >
              <X className="h-4.5 w-4.5" />
            </motion.button>

            <div className="relative z-10 p-6 sm:p-7">
              {/* Top badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mb-5 flex items-center gap-4"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] text-white shadow-[0_18px_40px_rgba(37,99,235,0.28)]"
                >
                  {isFoundReport ? (
                    <ShieldCheck className="h-7 w-7" />
                  ) : (
                    <SearchCheck className="h-7 w-7" />
                  )}
                </motion.div>

                <div className="min-w-0">
                  <h2 className="text-[24px] font-bold leading-tight text-slate-900">
                    {isFoundReport
                      ? "Claim this item"
                      : "Tell the reporter you found this"}
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {isFoundReport
                      ? "Send one proof message explaining why this item belongs to you."
                      : "Send one message explaining where and how you found this item."}
                  </p>
                </div>
              </motion.div>

              {/* Report card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mb-5 rounded-3xl border border-slate-200/70 bg-white/70 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Selected Report
                </p>
                <h3 className="mt-2 truncate text-[16px] font-bold text-slate-900">
                  {report?.name || "Lost & Found Item"}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {report?.category || "General item"}
                </p>
              </motion.div>

              {/* Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="rounded-[26px] border border-slate-200/80 bg-white/75 p-2 shadow-[0_14px_34px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-3 rounded-[20px] bg-slate-50/80 px-4 py-3 transition-all duration-300 focus-within:bg-white focus-within:shadow-[0_10px_24px_rgba(37,99,235,0.08)]">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mt-1 shrink-0 text-blue-500"
                  >
                    <SendHorizontal className="h-5 w-5 rotate-[-18deg]" />
                  </motion.div>

                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={6}
                    placeholder={
                      isFoundReport
                        ? "Example: This belongs to me. It had a black cover, my ID card inside, and a scratch near the zip..."
                        : "Example: I found this near the bus stand around 6 PM and kept it safe with me..."
                    }
                    className="w-full resize-none bg-transparent text-[14px] leading-6 text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"
              >
                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  disabled={loading}
                  className="cursor-pointer rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-[0_8px_22px_rgba(15,23,42,0.04)] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancel
                </motion.button>

                <motion.button
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#2563EB,#1D4ED8)] px-5 py-3 font-semibold text-white shadow-[0_14px_32px_rgba(37,99,235,0.28)] transition hover:shadow-[0_18px_40px_rgba(37,99,235,0.34)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <SendHorizontal className="h-4.5 w-4.5" />
                  {loading ? "Sending..." : "Send Request"}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
