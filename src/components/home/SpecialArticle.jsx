import { articlesData, specialArticleData } from "../../data/data";
import Img from "../Img";

function SpecialArticle({ articleIndex }) {
  const { image, title } = articlesData[articleIndex];

  return (
    <div className="w-full text-center md:w-[35%]">
      <Img src={image} alt={title} styles="rounded-xl w-full" />
      <div>
        <span className="mr-[10px] text-purple">Alex Gordon</span>
        <span className="text-gray-400">23 Dec,2022</span>
      </div>
      <h3 className="text-2xl">{title}</h3>
      <p className="text-gray-400">
        Purus senectus vulputate elit pellentesque. Ut donec pretium, curabitur
        sed proin. Tristique feugiat massa fames faucibus condimentum quam at.
        Sed tellus praesent habitant tortor. Sed aliquet dapibus fermentum
        iaculis.
      </p>
      {specialArticleData.map((el) => {
        return (
          <div key={el.id}>
            <div>
              <span className="mr-[10px] text-purple">Alex Gordon</span>
              <span className="text-gray-400">27 Dec,2022</span>
            </div>
            <h3 className="text-lg uppercase">{el.articleTitle}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SpecialArticle;
