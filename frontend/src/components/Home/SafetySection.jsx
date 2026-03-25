import { Download, ShieldCheck, Users } from "lucide-react";

export default function SafetySection() {
  return (
    <section
      className="px-3 py-10 text-white sm:px-5 md:px-12"
      style={{ backgroundColor: "#0F172A" }}
    >
      <h1 className="mb-3 text-4xl font-bold text-center">
        Your Safety is Our Priority
      </h1>
      <p className="text-sm text-center text-gray-400 md:text-base">
        We've Lost Link with security features to ensure every reunion is safe.
      </p>

      <div className="flex flex-col gap-4 mt-10 md:flex-row md:gap-8">
        <div
          className="p-6 border shadow-xl border-white/10 rounded-2xl"
          style={{ backgroundColor: "#162033" }}
        >
          <ShieldCheck size={35} color="#155DFC" />
          <h4 className="mt-3 mb-2 text-sm font-medium md:text-xl">
            Identity Verification
          </h4>
          <p className="text-gray-400">
            Mandatory account verification for all users to build a trustworthy
            and accountable community.
          </p>
        </div>
        <div
          className="p-6 border shadow-xl border-white/10 rounded-2xl"
          style={{ backgroundColor: "#162033" }}
        >
          <Download size={35} color="#155DFC" />
          <h4 className="mt-3 mb-2 text-sm font-medium md:text-xl">
            Secure Claiming
          </h4>
          <p className="text-gray-400">
            Finders must answers specify specific security questions about the
            item before direct contact is establish.
          </p>
        </div>
        <div
          className="p-6 border shadow-xl border-white/10 rounded-2xl"
          style={{ backgroundColor: "#162033" }}
        >
          <Users size={35} color="#155DFC" />
          <h4 className="mt-3 mb-2 text-sm font-medium md:text-xl">
            Community Moderation
          </h4>
          <p className="text-gray-400">
            Active monitoring and reporting tools to keep the platform free of
            spam and fraudulent activity.
          </p>
        </div>
      </div>
    </section>
  );
}
