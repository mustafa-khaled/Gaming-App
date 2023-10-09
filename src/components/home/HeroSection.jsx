import RecentArticles from "./RecentArticles";
import Slider from "./Slider";

function HeroSection() {
  return (
    <div className="flex h-[100vh] flex-col items-start gap-[20px] md:flex-row">
      <Slider />
      <RecentArticles />
    </div>
  );
}

export default HeroSection;
