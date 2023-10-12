import { articlesData } from "../../data/data";
import Img from "../Img";

function RecentArticles() {
  return (
    <div className="w-full  text-textColor md:w-[450px]">
      <div className="flex items-center gap-[20px]">
        <i className="fa-solid fa-bullseye"></i>
        <h3 className="font-semibold uppercase">Recent Articles</h3>
      </div>

      <div>
        {articlesData.map((el) => (
          <div key={el.id} className="mt-[20px] flex items-start gap-[20px]">
            <div className="w-[100px]">
              <Img
                src={el.image}
                alt={el.title}
                styles="w-full object-cover h-full"
              />
            </div>
            <div className="text-xs">
              <h3>{el.title}</h3>
              <div>
                <span className="mr-[10px] text-purple">Alex Gordon</span>
                <span className="text-gray-400">23 Dec,2022</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentArticles;
