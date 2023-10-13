import { latestNewsData } from "../../data/data";

import background from "../../assets/Back.png";
import SectionHead from "../SectionHead";
import Img from "../Img";

function LatestNews() {
  return (
    <div
      className="min-h-[80vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto px-[10px] py-[30px] text-textColor">
        <SectionHead title="Latest News" />
        <div className="mx-auto flex min-h-[60vh] w-full flex-col items-center justify-around gap-[20px] sm:flex-row md:w-[70%]">
          {latestNewsData.map((el) => {
            return (
              <div key={el.id} className="rounded-xl bg-[#7931DE]">
                <Img src={el.image} alt={el.title} styles="w-full" />
                <h3 className="pb-[10px] pl-[5px] text-lg">{el.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LatestNews;

// 7931DE
