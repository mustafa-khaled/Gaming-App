import HeroSection from "../components/home/HeroSection";
import LatestArticles from "../components/home/LatestArticles";
import OurTeam from "../components/home/OurTeam";
import LatestNews from "../components/home/LatestNews";
import HomeSwiper from "../components/home/HomeSwiper";

function Home() {
  return (
    <div>
      <div className="container mx-auto px-[10px]">
        <HeroSection />
        <HomeSwiper />
        <LatestArticles />
        <OurTeam />
      </div>
      <LatestNews />
    </div>
  );
}

export default Home;
