import DashboardSection from "./DashboardSection";
import MyLostItemSection from "./MyLostItemsSection";
import MyFoundItemSection from "./MyFoundItemsSection";
import MyClaimSection from "./MyClaimSection";
import SavedItemSection from "./SavedItemSection";
import SettingSection from "./SettingSection";
export default function RightSection({ active }) {
  const renderSection = () => {
    switch (active) {
      case "Dashboard":
        return <DashboardSection />;
      case "My Lost Items":
        return <MyLostItemSection />;
      case "My Found Items":
        return <MyFoundItemSection />;
      case "My Claim":
        return <MyClaimSection />;
      case "Saved Items":
        return <SavedItemSection />;
      case "Settings":
        return <SettingSection />;
      default:
        return <DashboardSection />;
    }
  };
  return (
    <section className="py-6 px-4 md:px-6 w-full h-auto">
      {renderSection()}
    </section>
  );
}
