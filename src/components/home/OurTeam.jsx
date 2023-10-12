import { ourTeamData } from "../../data/data";

import Img from "../Img";
import SectionHead from "../SectionHead";

function OurTeam() {
  return (
    <div className="mb-[50px] text-textColor ">
      <SectionHead title="Our Team" />
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[10px]
         md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
      >
        {ourTeamData?.map((el) => {
          return (
            <div key={el.id}>
              <Img src={el.image} alt={el.title} />
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
