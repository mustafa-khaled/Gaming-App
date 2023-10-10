import Swiper from "../components/home/Swiper";
import HeroSection from "../components/home/HeroSection";

function Home() {
  return (
    <div className="container mx-auto px-[10px]">
      <HeroSection />
      <Swiper />
    </div>
  );
}

export default Home;
