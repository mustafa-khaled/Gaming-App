import SectionHead from "../SectionHead";
import GameItem from "./GameItem";

function SameSeries({ data }) {
  return (
    <div className="my-[30px] text-textColor">
      <SectionHead title="Same Series" />
      {data?.map((ele) => {
        return <GameItem key={ele.id} game={ele} />;
      })}
    </div>
  );
}

export default SameSeries;
