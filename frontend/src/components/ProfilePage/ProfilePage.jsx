import { useState } from "react";
import Navbar from "../../components/Navbar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import QuickActions from "./QuickActions";
import SafetyFirst from "./SafetyFirst";
import MobileBottomNav from "./MobileBottomNav";

export default function ProfilePage() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="h-dvh overflow-hidden bg-[linear-gradient(135deg,#081225_0%,#0B1730_25%,#0D1B38_55%,#101D3A_100%)]">
      {/* Fixed navbar height */}
      <div className="h-22 shrink-0">
        <Navbar />
      </div>

      {/* Remaining screen after navbar */}
      <div className="flex h-[calc(100dvh-88px)] overflow-hidden">
        <LeftSection active={active} setActive={setActive} />

        {/* Desktop content */}
        <div className="hidden md:flex flex-1 overflow-hidden">
          {/* Center content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <RightSection active={active} />
          </div>

          {/* Right sidebar */}
          <div className="w-[320px] shrink-0 overflow-y-auto no-scrollbar px-4 py-6">
            <QuickActions />
            <SafetyFirst />
          </div>
        </div>

        {/* Mobile content */}
        <div className="flex md:hidden flex-1 overflow-y-auto pb-20">
          <RightSection active={active} />
        </div>
      </div>

      <MobileBottomNav active={active} setActive={setActive} />
    </div>
  );
}
