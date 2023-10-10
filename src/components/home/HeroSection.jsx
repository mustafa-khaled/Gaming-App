import RecentArticles from "./RecentArticles";
import Slider from "./Slider";

function HeroSection() {
  return (
    <div className="mb-[50px] flex flex-col items-start gap-[20px] md:flex-row">
      <Slider />
      <RecentArticles />
    </div>
  );
}

export default HeroSection;
