import { useAuth } from "../../Context/AuthContext";
import { cn } from "../../lib/utils.js";
import {
  LayoutDashboard,
  Archive,
  BadgeCheck,
  Gift,
  Bookmark,
  Settings,
  Heart,
  ChevronRight,
} from "lucide-react";

const options = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "My Lost Items", icon: Archive },
  { name: "My Found Items", icon: BadgeCheck },
  { name: "My Claim", icon: Gift },
  { name: "Saved Items", icon: Bookmark },
  { name: "Settings", icon: Settings },
];

export default function LeftSection({ active, setActive }) {
  const { user } = useAuth();
  const defaultAvatar = "/images/Profile/profile.jpeg";

  if (!user) return <div className="hidden md:flex w-[320px]">Loading...</div>;

  return (
    <aside
      className="
        hidden md:flex
        w-[320px] min-w-[320px] max-w-[320px]
        h-full min-h-0 overflow-hidden
        border-r border-white/10
        bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.26),transparent_28%),linear-gradient(180deg,#071226_0%,#0A1730_42%,#0B1324_100%)]
        text-white
      "
    >
      <div className="flex h-full min-h-0 w-full flex-col px-4 py-4 ">
        {/* Profile Card */}
        <div className="shrink-0 rounded-3xl border border-white/15 bg-white/92 p-3 text-[#0F172A] shadow-[0_16px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-pink-500/25 blur-md" />
              <img
                src={user?.avatar || defaultAvatar}
                alt="profile"
                className="relative h-12 w-12 rounded-full border-2 border-white object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="min-w-0">
              <h6 className="truncate text-[15px] font-bold leading-tight">
                {user.name}
              </h6>
              <p className="mt-1 truncate text-[13px] leading-tight text-slate-500">
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Menu Area */}
        <div className="mt-4 flex-1 min-h-0 flex flex-col overflow-hidden">
          <p className="mb-2 px-2 shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Overview
          </p>

          <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-2 no-scrollbar">
            {options.map((option) => {
              const Icon = option.icon;
              const isActive = active === option.name;

              return (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setActive(option.name)}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-[20px] border px-3 py-3 text-left transition-all duration-300",
                    isActive
                      ? "border-cyan-400/30 bg-linear-to-r from-[#1677FF] to-[#13B8EA] text-white shadow-[0_14px_24px_rgba(19,120,255,0.34)]"
                      : "border-white/10 bg-white/6 text-white/90 hover:border-white/15 hover:bg-white/9",
                  )}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-300",
                        isActive
                          ? "bg-white/14"
                          : "bg-white/6 group-hover:bg-white/10",
                      )}
                    >
                      <Icon size={18} />
                    </div>

                    <span className="truncate text-[14px] font-semibold">
                      {option.name}
                    </span>
                  </div>

                  <ChevronRight
                    size={17}
                    className={cn(
                      "shrink-0 transition-all duration-300",
                      isActive
                        ? "opacity-100"
                        : "opacity-35 group-hover:translate-x-1 group-hover:opacity-70",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="mt-3 shrink-0 rounded-[20px] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <p
            style={{ fontFamily: "MadeWith" }}
            className="text-[20px] leading-none text-white"
          >
            <span className="flex items-center gap-2">
              Made With
              <Heart className="fill-red-500 text-red-500" size={17} />
            </span>
          </p>
          <p className="mt-1 text-[11px] leading-tight text-white/45">
            Premium dashboard experience.
          </p>
        </div>
      </div>
    </aside>
  );
}
