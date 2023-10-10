import SectionHead from "../SectionHead";
import Img from "../Img";
import mainImage from "../../assets/Rectangle 153.png";

function LatestArticles() {
  return (
    <div className="mb-[50px] text-textColor">
      {/* Head Section */}
      <SectionHead title="Latest Articles" />

      <div className="mb-[30px] flex flex-col items-start gap-[20px] md:flex-row">
        <div className="w-full md:w-[50%]">
          <Img src={mainImage} styles="rounded-xl w-full h-full" />
        </div>
        <div className="w-full md:w-[50%]">
          <div className="text-sm">
            <span className="mr-[10px] text-purple">Alex Gordon</span>
            <span className="text-gray-400">23 Dec, 2023</span>
          </div>
          <h3 className="my-[10px] text-2xl">
            Why Cypher Joined Protocol Sight
          </h3>
          <p className="text-xl text-gray-400">
            Purus senectus vulputate elit pellentesque. Ut donec pretium,
            curabitur sed proin. Tristique feugiat massa fames faucibus
            condimentum quam at. Sed tellus praesent habitant tortor. Sed
            aliquet dapibus fermentum iaculis.
          </p>
        </div>
      </div>

      {/* Articles  */}
      {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[10px]"></div> */}
    </div>
  );
}

export default LatestArticles;
