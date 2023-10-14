import { SwiperSlide } from "swiper/react";

import Swiper from "../Swiper";
import SectionHead from "../SectionHead";
import noUser from "../../assets/noUser.png";

function DevelopmentTeam({ data }) {
  return (
    data?.length > 0 && (
      <div className="my-[30px] text-textColor">
        <SectionHead title="Development Team" />

        <Swiper>
          {data?.map((el) => {
            return (
              <SwiperSlide key={el?.id} className="text-center">
                <img
                  src={el?.image || noUser}
                  alt={el?.name}
                  className="mx-auto h-[200px] w-[200px] rounded-full object-cover"
                />
                <h4>{el?.name}</h4>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    )
  );
}

export default DevelopmentTeam;
