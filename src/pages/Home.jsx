import Swiper from "../components/home/Swiper";
import HeroSection from "../components/home/HeroSection";
import LatestArticles from "../components/home/LatestArticles";

function Home() {
  return (
    <div className="container mx-auto px-[10px]">
      <HeroSection />
      <Swiper />
      <LatestArticles />
    </div>
  );
}

export default Home;
