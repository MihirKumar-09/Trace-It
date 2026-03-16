import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import RecentReport from "./RecentReport";
import HowWork from "./HowWork";
import SafetySection from "./SafetySection";
import SuccessStories from "./SuccessStories";
import Community from "./Community";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RecentReport />
      <HowWork />
      <SafetySection />
      <SuccessStories />
      <Community />
    </>
  );
}
