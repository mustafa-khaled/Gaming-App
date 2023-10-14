import { ourTeamData } from "../../data/data";

import Img from "../Img";
import SectionHead from "../SectionHead";

function OurTeam() {
  return (
    <div className="mb-[50px] text-textColor ">
      <div className="mb-[30px]">
        <SectionHead title="Our Team" />
      </div>
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[10px]
        md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      >
        {ourTeamData?.map((el) => {
          return (
            <div key={el.id} className="text-center">
              <Img src={el.image} alt={el.title} styles="w-rull" />
              <h3 className="text-xl uppercase">{el.name}</h3>
              <p className="text-purple">{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
