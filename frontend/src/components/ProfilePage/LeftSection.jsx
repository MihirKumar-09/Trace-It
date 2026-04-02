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

  if (!user) return <div>Loading...</div>;

  return (
    <section className="hidden md:flex flex-col justify-between box-border w-[320px] min-w-[320px] max-w-[320px] border px-4 py-6">
      <div className="w-full rounded-xl overflow-hidden">
        <div className="flex items-center gap-3 bg-white px-3 py-4 shadow-lg rounded-xl w-full">
          <img
            src={user?.avatar || defaultAvatar}
            alt="profile"
            className="w-12 h-12 rounded-full object-cover border border-gray-200 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="min-w-0">
            <h6 className="font-semibold truncate">{user.name}</h6>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 mt-5">
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = active === option.name;

            return (
              <div
                key={option.name}
                onClick={() => setActive(option.name)}
                className={cn(
                  "w-full flex items-center gap-3 rounded-xl p-3 cursor-pointer transition-all box-border",
                  isActive
                    ? "bg-blue-50 text-blue-600 shadow-md font-medium"
                    : "bg-transparent text-black hover:bg-gray-200",
                )}
              >
                <Icon size={20} className="shrink-0" />
                <span className="text-[15px] truncate">{option.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <p style={{ fontFamily: "MadeWith" }} className="text-[26px]">
          <span className="flex items-center gap-2">
            Made With
            <Heart />
          </span>
        </p>
      </div>
    </section>
  );
}
